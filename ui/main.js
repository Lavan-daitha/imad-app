console.log('Loaded!');
var button=document.getElementById('counter');
//var counter=0;
button.onclick = function(){
    
   //createrequest to the counter endpont
   
   var request = new XMLHttpRequest();
   
   //capture the response and store it in a variable
    
   request.onreadystatechange=function(){
     
     if(request.readystate === XMLHttpRequest.DONE) 
     {
         if(request.status === 200)
         {
             var counter=request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
       
   };
      //make a request to the server.
      request.open('GET','http://daithalavan444.imad.hasura-app.io',true );
      request.send( null ) ;
      
    
};