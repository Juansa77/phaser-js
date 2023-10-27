import Phaser from "phaser";

//*1----------Objeto de configuración custom--------------
const config = {
  //*Detecta si el browser soporta WebGl, sino, pasa a Canvas JS
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    //*Utiliza el plugin de físicas arcade integrado en Phaser
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
    },
  },
  //* funciones que vamos a utilizar
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

//* 2--------------------------Cargamos los assets como imágenes, fondos y demás
function preload() {
  //* Precarga de fondo
  this.load.image("sky", "assets/sky.png");
  //* Precarga de imagen
  this.load.image("bird", "assets/bird.png");
}
//*3--------------------------- Inicialiamos las instancias de los objetos para mostrarlas
let bird = null;
let flapVelocity=300
let totalDelta = null;
const VELOCITY = 200;
function create() {
  //* primer parámetro es eje X, segundo eje Y, tercero la imagen.
  //*Utilizamos los valores del objeto config para redimensionar la imagen
  //* Si usamos setorigin va a tomar los valores de height and width del objeto config
  //* Y pone en el medio la imagen

  this.add.image(0, 0, "sky").setOrigin(0, 0);
  //* Sprite posicionado en el lado izquierda horizontal, medio vertical
  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0);
  //* Listener para las funciones de interfaz
  this.input.on(`pointerdown`, flap);
  this.input.keyboard.on(`keydown-SPACE`, flap);
  //* VELOCITY: LE DECIMOS QUE SE MUEVA EN EL EJE X 200 PX
  bird.body.velocity.x = VELOCITY;
}
//* Si la posición en X del sprite es mayor o igual al ancho, lo devolvemos hacia atras, sino palante
//* Función para actualziar a 60 fps
function update(time, delta) {
  if (bird.x >= config.width - bird.width) {
    bird.body.velocity.x = -VELOCITY;
  } else if (bird.x <= 0) {
    bird.body.velocity.x = VELOCITY;
  }
}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

//* 4----------Declaración de juego
new Phaser.Game(config);
