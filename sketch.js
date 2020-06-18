const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg3.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    box5 = new Box(810,160,70,70);

    pig1 = new Pig(820,350);
    pig2 = new Pig(640,350);

    pig3 = new Pig(820,220);
    pig4 = new Pig(1000,350);

    pig5 = new Pig(810,125);

    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(810,180,300, PI/2);
    
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});   
    }
}


function mouseReleased(){
    gameState = "launched";
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}