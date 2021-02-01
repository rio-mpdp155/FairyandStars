var a,b,c,myengine,myworld,body,d,e,fairy,s
function preload(){
b=loadImage("SPACE.jpg")
c=loadImage("star.png")
e=loadImage("fairy.png")
s=loadSound("song.mp3")
}
function setup(){
createCanvas(600,500)
s.loop()
a=createSprite(300,250,600,500)
a.addImage(b)
a.scale=0.5
myengine=Matter.Engine.create()
myworld=myengine.world;

ball=Matter.Bodies.rectangle(500,95,35,55,{isStatic:true,restitution:0,friction:1,density:3})
Matter.World.add(myworld,ball)

fairy=Matter.Bodies.rectangle(200,300,35,40,{isStatic:true,friction:1})
Matter.World.add(myworld,fairy)
d=createSprite(400,0,50,50)
d.addImage(e)
d.scale=0.8
a=createSprite(400,0,50,50)
a.addImage(c)
a.scale=0.3

}

function draw(){
  background("black")
  Matter.Engine.update(myengine)


a.x=ball.position.x
a.y=ball.position.y
d.x=fairy.position.x-100
d.y=fairy.position.y

d.velocityX = 0
    if (keyDown("left")) {
    Matter.Body.setPosition(fairy,{x:fairy.position.x-2,y:fairy.position.y})
    }
    if (keyDown("right")) {
      Matter.Body.setPosition(fairy,{x:fairy.position.x+2,y:fairy.position.y})
    }
    if(keyDown("down")){
      Matter.Body.setStatic(ball,false)
    }
  drawSprites()  
  




}