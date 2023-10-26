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
  },
  //* funciones que vamos a utilizar
  scene: {
    preload: preload,
    create: create,
  },
};

//* 2--------------------------Cargamos los assets como imágenes, fondos y demás
function preload() {
  debugger;
  //* Precarga de fondo
  this.load.image("sky", "assets/sky.png");
  //* Precarga de imagen
  this.load.image("bird", "assets/bird.png");
}
//*3--------------------------- Inicialiamos las instancias de los objetos para mostrarlas
function create() {
  //* primer parámetro es eje X, segundo eje Y, tercero la imagen.
  //*Utilizamos los valores del objeto config para redimensionar la imagen
  //* Si usamos setorigin va a tomar los valores de height and width del objeto config
  //* Y pone en el medio la imagen
  debugger;
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  //* Sprite posicionado en el lado izquierda horizontal, medio vertical
  this.add.sprite(config.width / 10, config.height / 2, "bird").setOrigin(0);
}



//* 4----------Declaración de juego
new Phaser.Game(config);
