var bg;
var trophyImg,pointImg;
var bgImg;
var ball,trophy;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var spawn,spawn2,spawn3;
var barrier1,barrier2,barrier3;
var slime,slime2;
var enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8;
var safe,safe2,safe3,safe4,safe5,safe6,safe7,safe8,safe9,safe10,safe11,safe12;
var poin,point2;
var gameState;

function preload(){
trophyImg = loadImage("trophy.png");
pointImg = loadImage("point.png");
bgImg = loadImage("bg.png");

}

function setup(){


   bg = createCanvas(600,-displayHeight,displayWidth,displayHeight);
 
  


 ball = createSprite(500,400,10,10);
 ball.shapeColor = "blue";
 trophy = createSprite(28,110,30,30);
trophy.addImage(trophyImg);
trophy.scale = 10;

block1 = createSprite(335,350,200,5);
block2 = createSprite(172,351,80,5);
block3 = createSprite(65,351,80,5);
block4 = createSprite(170,255,345,5);
block5 = createSprite(342,203,5,50);
block6 = createSprite(342,86,5,123);
block7 = createSprite(170,135,340,5);
block8 = createSprite(265,78,5,110);
invisible = createSprite(265,10,5,30);
invisible.visible = false;
block9 = createSprite(70,55,5,110);
invisible2 = createSprite(70,121,5,30);
invisible2.visible = false;

//Respawn point
spawn = createSprite(2.6,276,5,27);
spawn.shapeColor = "pink";
spawn2 = createSprite(13,288,25,5);
spawn2.shapeColor = "pink";
spawn3 = createSprite(12,263,25,5);
spawn3.shapeColor = "pink";


//obstacles
 barrier1 = createSprite(345,390,3,25);
 barrier2 = createSprite(320,362,3,28);
 barrier3 = createSprite(295,390,3,25);


//moving obstacles
 slime = createSprite(30,377,40,40);
slime.shapeColor = "red";
slime.velocityX = 5;
 enemy = createSprite(200,300,10,13);
enemy.velocityY = 4;
enemy.shapeColor = "red";
 enemy2 = createSprite(139,300,10,13);
enemy2.velocityY = 3;
enemy2.shapeColor = "red";
 enemy3 = createSprite(270,300,10,13);
enemy3.velocityY = 5;
enemy3.shapeColor = "red";
 enemy4 = createSprite(331,300,10,13);
enemy4.velocityY = 6;
enemy4.shapeColor = "red";
 slime2 = createSprite(372,152,50,20);
slime2.velocityY = 5;
slime2.shapeColor = "red";
 enemy5 = createSprite(88,14,10,10);
enemy5.velocityY = 2;
enemy5.velocityX = -2;
enemy5.shapeColor = "red";
 enemy6 = createSprite(243,14,10,10);
enemy6.velocityY = 3;
enemy6.velocityX = -3;
enemy6.shapeColor = "red";
 enemy7 = createSprite(164,54,10,10);
enemy7.velocityY = -6;
enemy7.velocityX = -5;
enemy7.shapeColor = "red";
 enemy8 = createSprite(244,20,10,10);
enemy8.velocityY = -5;
enemy8.velocityX = 6;
enemy8.shapeColor = "red";


 safe = createSprite(210,342,5,22);
safe.shapeColor = "green";
 safe2 = createSprite(220,330,24.5,5);
safe2.shapeColor = "green";
 safe3 = createSprite(235,340,5,25);
safe3.shapeColor = "green";
 safe4 = createSprite(130,342,5,22);
safe4.shapeColor = "green";
 safe5 = createSprite(119,330,24,5);
safe5.shapeColor = "green";
 safe6 = createSprite(108,342,5,22);
safe6.shapeColor = "green";
 safe7 = createSprite(357,255,25,5);
safe7.shapeColor = "green";
 safe8 = createSprite(342,243,5,29);
safe8.shapeColor = "green";
 safe9 = createSprite(356,231,25,5);
safe9.shapeColor = "green";
 safe10 = createSprite(328,177,33,5);
safe10.shapeColor = "green";
 safe11 = createSprite(313,164,5,30);
safe11.shapeColor = "green";
 safe12 = createSprite(327,148,33,5);
safe12.shapeColor = "green";

 point = createSprite(352,85,5,5);
point.scale = 0.2;
point.addImage(pointImg);
 point2 = createSprite(370,85,5,5);
point2.addImage(pointImg);
point2.scale = 0.2;


 //Changing gameState
 gameState = "serve";

}




function draw() {
      background("white");
        camera.position.x =ball.position.x;
        camera.position.y =ball.position.y;
      edges = createEdgeSprites();
        
      if(ball.isTouching(safe5)&& gameState === "play"){
        slime.velocityX = 8;
      }
        
      if(ball.isTouching(trophy)){
       gameState = "end";
      
      }
      
      if(gameState==="end"){
        text("YOU ESCAPED",150,200);
        ball.destroy();
        trophy.velocityY = -9;
       
                
      }
      if(keyDown("up")){
        ball.velocityY = -3;
        ball.velocityX = 0;
        gameState = "play";
      }
      
  
      if(keyDown("down")){
        ball.velocityY = 3;
        ball.velocityX = 0;
        gameState = "play";
      }
      
      
      if(keyDown("left")){
        ball.velocityX = -3;
        ball.velocityY = 0;
        gameState = "play";
      }
  
      if(keyDown("right")){
        ball.velocityX = 3;
        ball.velocityY = 0;
        gameState = "play";
      }
      
     if(ball.isTouching(barrier3)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
     }
     
     if(ball.isTouching(enemy)){
         ball.x = 12;
         ball.y = 274;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
     if(ball.isTouching(enemy2)){
         ball.x = 12;
         ball.y = 274;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
     if(ball.isTouching(enemy3)){
         ball.x = 12;
         ball.y = 274;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
     if(ball.isTouching(enemy4)){
         ball.x = 12;
         ball.y = 274;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
     if(ball.isTouching(enemy5)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
     } 
     
     if(ball.isTouching(enemy6)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
     if(ball.isTouching(enemy7)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
      if(ball.isTouching(enemy8)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
     }
     
     if(ball.isTouching(point)){
         ball.velocityY = -6;
         playSound("sound://category_collect/retro_game_coin_pickup_12.mp3");
     }
     
     if(ball.isTouching(point2)){
         ball.velocityY = -6;
         playSound("sound://category_collect/collect_item_bling_1.mp3");
     }
     
      if(ball.isTouching(barrier1)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
      }
      
     if(ball.isTouching(barrier2)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
      }
      
      if(ball.isTouching(block1)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
      }
      
      
      if(ball.isTouching(block2)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
      }
      
      if(ball.isTouching(block3)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
      }
      
      if(ball.isTouching(block4)){
         ball.x = 12;
         ball.y = 274;
         ball.velocityY = 0;
         ball.velocityX = 0;
      }
      
       if(ball.isTouching(block5)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
      }
      
      if(ball.isTouching(block6)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
      }
      
      if(ball.isTouching(slime2)){
         ball.x = 353;
         ball.y = 244;
         ball.velocityY = 0;
         ball.velocityX = 0;
      }
      
      if(ball.isTouching(slime)){
         ball.x = 395;
         ball.y = 367;
         ball.velocityY = 0;
         ball.velocityX = 0;
         slime.velocityX = 5;
         gameState = "serve";
      }
      
      if (gameState === "serve") {
    text("GO TO THE SPACESHIP AND ESCAPE",80,200);
    text("'GREEN AREA IS SAFE'",120,220);
  }
  text("FINISH",9,64);
  
      enemy8.bounce(enemy5);
      enemy8.bounce(enemy7);
      enemy8.bounce(enemy5);
      enemy8.bounceOff(block8);
      enemy8.bounceOff(block9);
      enemy8.bounceOff(block7);
      enemy8.bounceOff(invisible2);
      enemy8.bounceOff(invisible);
      enemy8.bounceOff(edges[2]);
      enemy7.bounceOff(edges[2]);
      enemy7.bounceOff(invisible);
      enemy7.bounceOff(invisible2);
      enemy7.bounceOff(block7);
      enemy7.bounceOff(block8);
      enemy7.bounceOff(block9);
      enemy7.bounce(enemy6);
      enemy7.bounce(enemy5);
      enemy6.bounce(enemy5);
      enemy6.bounceOff(block8);
      enemy6.bounceOff(block9);
      enemy6.bounceOff(block7);
      enemy6.bounceOff(invisible);
      enemy6.bounceOff(invisible2);
      enemy6.bounceOff(edges[2]);
      enemy5.bounceOff(edges[2]);
      enemy5.bounceOff(invisible2);
      enemy5.bounceOff(invisible);
      enemy5.bounceOff(block7);
      enemy5.bounceOff(block9);
      enemy5.bounceOff(block8);
      enemy4.bounceOff(block4);
      enemy4.bounceOff(block1);
      enemy3.bounceOff(block4);
      enemy3.bounceOff(block1);
      enemy2.bounceOff(block4);
      enemy2.bounceOff(block2);
      enemy.bounceOff(block4);
      enemy.bounceOff(block2);
      ball.isTouching(trophy);
      ball.bounceOff(block7);
      ball.bounceOff(block8);
      ball.bounceOff(block9);
      ball.collide(spawn3);
      ball.collide(spawn2);
      ball.collide(spawn);
      ball.collide(safe12);
      ball.collide(safe11);
      ball.collide(safe10);
      ball.collide(safe9);
      ball.collide(safe8);
      ball.collide(safe7);
      ball.collide(safe6);
      ball.collide(safe5);
      ball.collide(safe4);
      ball.collide(safe3);
      ball.collide(safe2);
      ball.collide(safe);
      ball.bounceOff(edges);
      slime.bounceOff(edges[0]);
      slime.bounceOff(barrier3);
      slime2.bounceOff(safe9);
      slime2.bounceOff(edges[2]);
  
  
  
  
        
        drawSprites();
         if (gameState === "serve") {
           fill("black");
           textFont("Georgia");
            stroke("blue");
    text("GO TO THE SPACESHIP AND ESCAPE",80,200);
    text("'GREEN AREA IS SAFE'",120,220);
  }
}
