var canva;
var gameState,contestantCount,database,quiz,question,contestant;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  database = firebase.database();
}


function draw(){
  background("pink");

  
}
