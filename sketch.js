var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance=0;
var database;

var form, player, game;

var athlete1,athlete2,athlete3,athlete4,athletes;

function preload(){

}

function setup(){
createCanvas(displayWidth - 20,displayHeight - 30);
form=new Form();
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){

if(playerCount==4){
    game.update(1);
  }

if(gameState==1){
    clear();
    game.play();
} 

if(gameState==2){
    game.end();
  }
}