
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground



function setup() {
  createCanvas(600, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Box(0, height - 20, width, 20)

}


function draw() {
  background(0);
  Engine.update(engine);
  ground.show()

}

function sweet_atart(){

  swal({
      title: "Game Over!",
      text: "Better luck next time!",
      imageUrl: "images.app.goo.gl/HWqk4C4tqGFWaTk29",
      showCancelButton: false,
      confirmButtonColor: "red",
      confirmButtonText: "OK",
      closeOnConfirm: true
    },
   
    );


}
