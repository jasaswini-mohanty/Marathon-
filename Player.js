class Player {
    constructor(){
      this.name=null;
      this.distance=0;
      this.index=null;
      this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInforef=database.ref("players");
      playerInforef.on("value",(data)=>{
        allPlayers=data.val();
      })
    }
    
    getAthletesAtEnd(){
        database.ref("AthletesAtEnd").on("value",(data)=>{
          this.rank=data.val();
        })
      }

      static updateAthletsAtEnd(rank){
        database.ref('/').update({
        AthletesAtEnd:rank
        })
      } 
  }
  