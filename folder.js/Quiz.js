class Quiz{

    constructor(){

    }

    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",(data)=>{
        gameState = data.val();
      })
    }
  

    update(state){
        database.ref('/').update({
        gameState: state
        });
    }

    async Start(){
        if(gameState === 0){
         contestant = new Contestant();
         var contestantCountRef = await database.ref('contestantCount').once("value");
         if(contestantCountRef.exists()){
           contestantCount = contestantCountRef.val();
           contestant.getCount();   
         }
         question = new Question();
         question.display();
        }
    }







}

