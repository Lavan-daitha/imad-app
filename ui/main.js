console.log('Loaded!');
var button=document.getElementById('counter');
//var counter=0;
button.onclick = function(){
    
   //create request to the counter endpont
   
   var request = new XMLHttpRequest();
   
   //capture the response and store it in a variable
    
   request.onreadystatechange=function(){
     
     if(request.readystate === XMLHttpRequest.DONE) 
     {
         if(request.status === 200)
         {
             var counter=request.responseText;
            // counter=counter+1;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
         }
     }
       
   };
      //make a request to the server.
      request.open('GET','http://daithalavan444.imad.hasura-app.io/counter',true );
      request.send( null ) ;
      
    
};


//submit names
var nameinput = document.getElementById('names');
var name = nameinput.vaue;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to the server and send the name
  
  //capture a list of names and render as html
  
  var names = ['name1','name2','name3'];
  var list = ' ';
  for(var i=0; i<names.length;i++)
  {
      list == '<li>' +names[i] +'</li>' ; 
  }
var ul = document.getElementById('namelist');
ul.innerHTML = list;
 
 
 
};
 