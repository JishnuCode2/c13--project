//creating the variables
var garden,rabbit,apples,leaves;
var gardenImg,rabbitImg,appleImg,leafImg,leafImg2,leafImg3;
var select_sprites,select_img;



function preload(){      
//loading the images
      gardenImg = loadImage("garden.png");
      rabbitImg = loadImage("rabbit.png");
      appleImg = loadImage("apple.png");
      leafImg = loadImage("leaf.png");
      leafImg2 = loadImage("orangeLeaf.png");
      leafImg3 = loadImage("redImage.png");
}


function setup(){
//making the canvas 
      createCanvas(400,400);
      

// Moving background
      garden = createSprite(200, 200);
      garden.addImage("garden", gardenImg);


//creating rabbit 
     rabbit = createSprite(180,340,30,30);
     rabbit.scale =0.09;
     rabbit.addImage("rabbit",rabbitImg);
}


function draw() {
//setting the background colour
      background(0);


//making the rabbit collide with the edges
      edges= createEdgeSprites();
      rabbit.collide(edges);


//assigning the X-position of the rabbit to the X-position of the mouse
      rabbit.x = World.mouseX;


//generating apples or leaves randomly
     if (frameCount%80 === 0){
      select_sprites = Math.round(random(1, 2))
      if (select_sprites == 1){
         createApples();
         }else{
          createLeaves();
      }
  } 


//drawing the sprites
     drawSprites();

}











function createApples(){

    apples = createSprite(random(50,350),40,10,10);
    apples.addImage("apples",appleImg);
    apples.velocityY = 4;
    apples.scale = 0.06;
    apples.depth = rabbit.depth-1;
    apples.lifetime = 80;


}

function createLeaves(){

    leaves = createSprite(random(10,330),10,10,10);

    leaves.velocityY = 4;
    leaves.scale = 0.10;
    leaves.depth = rabbit.depth-1;
    leaves.lifetime = 80;

    select_img = Math.round(random(1,3));

    if(select_img === 1){
       leaves.addImage("leaves",leafImg);
    }
    else if(select_img === 2){
       leaves.addImage("orangeLeaves",leafImg2);
    }
    else if(select_img === 3){
       leaves.addImage("redLeaves",leafImg3);
       leaves.scale = 0.07;
    }
}