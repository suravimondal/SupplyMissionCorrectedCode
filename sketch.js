var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width/2,height-35, width,10);
	groundSprite.shapeColor = color(255)

	//zone1Sprite = createSprite(400,670,200,10);
	//zone1Sprite.shapeColor = "red";

    //zone1 = Bodies.rectangle(400,670,100,10, {isStatic: true});

	//World.add(world, zone1);

	//zone2Sprite = createSprite(300,640,10,50);
	//zone2Sprite.shapeColor = "red";

		//zone2 = Bodies.rectangle(355,640,10,50, {isStatic: true});

    //World.add(world, zone2);

	//zone3Sprite = createSprite(500,640,10,50);
	//zone3Sprite.shapeColor = "red";

	//zone3 = Bodies.rectangle(445,640,10,50, {isStatic: true});

    //World.add(world,zone3);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, friction: 3, density: 2, isStatic : true});
	World.add(world, packageBody);

	
	
	
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

		//to create the left box 
 	zone1Sprite=createSprite(width/2-100, 610, 20,100);
 	zone1Sprite.shapeColor="red";

 	zone1Body = Bodies.rectangle(width/2-100+20, 610, 20,100 , {isStatic:true} );
 	World.add(world, zone1Body);

	 //to create the middle bottom box 
 	zone2Sprite=createSprite(width/2-100+100, 650, 200,20);
 	zone2Sprite.shapeColor="red";

 	zone2Body = Bodies.rectangle(width/2-100+100, 635, 200,20 , {isStatic:true} );
 	World.add(world, zone2Body);

	 //to create the right box 
 	zone3Sprite=createSprite(width/2-100+200 , 610, 20,100);
 	zone3Sprite.shapeColor="red";

 	zone3Body = Bodies.rectangle(width/2-100+200-20 , 610, 20,100 , {isStatic:true} );
 	World.add(world, zone3Body);


	

  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 
	if(keyCode === LEFT_ARROW)
{
	helicopterSprite.x = helicopterSprite.x - 20;
	
}	
	
  else if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 20;
	
}	
 else if (keyCode === DOWN_ARROW){
	 Matter.Body.setStatic(packageBody,false)
  
      
}
}



