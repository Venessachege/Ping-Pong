$(document).ready(function(){
  //gather user input
  var input=parseInt(prompt("Enter the number"));
  //create a function
  function ping(input){
    for (var i = 1; i <=input; i++) {
      if ((i%3===0) && (i%5===0)){
       console.log("pingpong");

     }else if (i%3===0) {
       console.log("ping");
     } else if (i%5===0) {
       console.log("pong");
     }
     else{
        console.log(i);
      }
    }//end of for
  }
  //call the function
  ping(input);

});
