var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var teclas = {  UP: 38,  DOWN: 40,  LEFT: 37,  RIGHT: 39};
document.addEventListener("keydown", moverCerdo);
var xx = 420;
var yy = 420;
var movimiento=40;

var fondo =
{
  url: "tile.png",
  cargaOk: false
}

var vaca =
{
  url: "vaca.png",
  cargaOk: false
}

var cerdo =
{
  url: "cerdo.png",
  cargaOk: false
}

var pollo =
{
  url: "pollo.png",
  cargaOk: false
}

 fondo.objeto = new Image();
 fondo.objeto.src= fondo.url;
 fondo.objeto.addEventListener("load", cargarFondo);

 vaca.objeto = new Image();
 vaca.objeto.src = vaca.url;
 vaca.objeto.addEventListener("load", cargarVacas);

 cerdo.objeto = new Image();
 cerdo.objeto.src = cerdo.url;
 cerdo.objeto.addEventListener("load", cargarCerdos);

 pollo.objeto = new Image();
 pollo.objeto.src = pollo.url;
 pollo.objeto.addEventListener("load", cargarPollo);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOk = true;
  dibujar();
}


function dibujar()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.objeto, 0,0);
  }

  if (cerdo.cargaOk)
  {
    papel.drawImage(cerdo.objeto, xx,yy);
  }

  if (pollo.cargaOk)
  {
    var cant = aleatorio(1,10);
    for (var i =0; i<cant; i++)
    {
      var x = aleatorio(1,10);
      var y = aleatorio(1,10);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.objeto, x, y);
    }

  }

  if (vaca.cargaOk)
  {
    var cant = aleatorio(1, 10);
    for (var i=0; i<cant; i++){
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.objeto, x,y);
    }
  }
}

function moverCerdo(evento)
{
  switch (evento.keyCode) {
      case teclas.UP:
            yy = yy - movimiento;
            if(yy < -40){
              yy = 420;
            }
            dibujar();
          break;
       case teclas.DOWN:
           yy = yy + movimiento
           if(yy > 420){
              yy = 0;
           }
           dibujar();
           break;
       case teclas.LEFT:
           xx = xx - movimiento;
           if(xx < -40){
              xx = 420;
           }
           dibujar();
           break;
       case teclas.RIGHT:
           xx = xx + movimiento;
           if(xx > 420){
              xx = 0;
           }
           dibujar();
           break;
         default:
  }
}


 function aleatorio(min, maxi)
 {
      var resultado;
      resultado = Math.floor(Math.random() * (maxi - min + 1)) + min; //numeros aleatorios
      return resultado;
 }
