
function generateProblem(){
  var a = Math.floor((Math.random() * 20) + 1); 
  var b = Math.floor((Math.random() * 15) + 1);

  if (b > a) {   
    
    b=a;
    a=b;
    
  }


  var op = '-'
  var problem  = a + " " + op + " " + b 
  document.getElementById("problem").innerHTML = problem 





  
  document.getElementById('a').innerHTML=a;      
  document.getElementById('b').innerHTML=b;      
}


var score =0;   var q=1;

function bad_score(){
  document.getElementById("score").innerHTML = score;
  if (score > 2) {
    score-=2;
  }
  else {
    score=0;
  }
  document.getElementById("score").innerHTML = score;
}

function good_score(){
  document.getElementById("score").innerHTML = score;
  score=score+5;  
  document.getElementById("score").innerHTML = score;
}


function checkAnswer(){

  var problem= document.getElementById("problem").innerHTML;
  var correctAnswer=Math.abs(eval(problem));   
  var userAnswer=document.getElementById("answers").value ;

  if (userAnswer == correctAnswer){
    

    good_score();  
      
    q=q+1;  document.getElementById("q").innerHTML = q;  
    generateProblem();
    answers.value=''
  }
  else{
    alert("Wrong Answer 🙁");
    answers.value=''
    bad_score();   
}

}

window.addEventListener("load", function(){
generateProblem();
})





