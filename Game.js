class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountref=await database.ref("playerCount").once("value");
        if (playerCountref.exists()){
          playerCount=playerCountref.val();
          player.getCount();
        }     
        form = new Form()
        form.display();
      }

      athlete1 = createSprite(100,200);
      athlete2 = createSprite(300,200);
      athlete3 = createSprite(500,200);
      athlete4 = createSprite(700,200);
      athletes = [athlete1,athlete2,athlete3,athlete4];
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start",120,100);
      Player.getPlayerInfo();
      //Player.getAthletesAtEndInfo();
  
      if(allPlayers !==undefined){
        
        var index=0;
        var x=0;
        var y;

        for (var plr in allPlayers) {
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[plr].distance;
         athletes[index-1].x=x;
         athletes[index-1].y=y;

         if(index===player.index){
             athletes[index-1].shapeColor=red;
             camera.position.x=displayWidth/2;
             camera.position.y=athletes[index-1].y;
         }
        }        
      }
     
    if(keyIsDown(UP_ARROW) && player.index !==null){
       player.distance+=50;
       player.update();
    }
    if(player.distance>4400){
        gameState=2;
        player.rank=player.rank+1;
        Player.updateAthletesAtEnd(player.rank);
      }
      drawSprites();   
   }
   end(){
    console.log("game ended");     
    game.update(2);
    console.log(player.rank);
  }
}
  