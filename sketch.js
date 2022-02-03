var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
var score = 0
function setup() {
  createCanvas(800, 800)
  engine = Engine.create()
  world = engine.world
  ground = new Ground(width / 2, height, width, 20)

  var particles = []
  var plinkos = []
  var divisions = []

  var divisionHeight = 300

  //criar objetos de divisão
  for (var k = 0; k <= 80; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 100; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 180; k = k + 80){
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 260; k = k + 80){
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 340; k = k + 80){
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 420; k = k + 80){
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 500; k = k + 80){
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
  for (var k = 0; k <= 580; k = k + 80){
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    )
  }
    //crie a 1ª linha de objetos plinko
    for (var j = 75; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 75))
    }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175))
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 25; j <= width - 20; j = j + 50){
    plinkos.push(new Plinko(j, 275))
  }

  //crie a 4ª linha de objetos plinko
  for (var j = 0; j <= width - 30; j = j + 50){
    plinkos.push(new Plinko(j, 275))
  }

  //criar objetos de partículas
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(widgh / 2 - 10, widgh / 2 + 10, 10, 10)))
  }

function draw() {
  background('black')
  textSize(20)

  Engine.update(engine)
  ground.display()

  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display()
  }

  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }

  //exibir as partículas
  for (var k = 0; k < divisions.length; k++) {
    particles[p].display()
  }
}

//No console está falando que esta última chave está errada, mas pelo o que eu vi está certa.