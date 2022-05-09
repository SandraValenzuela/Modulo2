console.log("wertyuio")
//esta es una función
function miPrimeraFuncion(){
    alert("esta es mi primera función");
}
//
function happybirthday(){
    console.log("cumpleaños feliz");
    console.log("que los cumplas feliz");
    console.log("feliz cumpleaños Paula");
    console.log("que los cumplas feliz");  
}

function happybirthdayConNombre(Nombre){
    console.log("cumpleaños feliz");
    console.log("que los cumplas feliz");
    console.log("feliz cumpleaños " + Nombre);
    console.log("que los cumplas feliz");  
}

function cuadrado(numero){
    var resultado=numero*numero;
    return resultado;
}

//definicion de potencia
// retorna base elevado al exponente
//2 elevado a 3= 2*2*2 = 8
//4 elevado a 2 = 4*4 = 16
//3 elevado a 4 = 3*3*3*3 = 81
//2 * 10 = 2*2*2*2*2*2*2*2*2*2 = 1024
function potencia(base,exponente){
    var resultado= 1;
    var contador= 0;
    while(contador(exponente)){ //la condicion de salida es que el contador llegue al exponente (o sea contador>=exponente)
        resultado*=base;
        contador++;
    }
    return resultado;
}
varExterna=5;

function test(par){
    let var1=2;
    console.log(par);
    console.log(var1);
    console.log(varExterna);
}


var par=3;
console.log(test(par));


/*para que aparezca en pantalla se debe ejecutar de la siguiente manera: llamando a la funcion*/
//CODIGO EJECUTABLE
//---------------------------------------
/*miPrimeraFuncion();
miPrimeraFuncion();
miPrimeraFuncion();
miPrimeraFuncion();*/

var pot= potencia(2,4)
console.log("3 elevado a 4 es; " + pot);
varpot2= potencia(2,11);
console.log=("2 elevado a 11 es: " + pot2);
console.log("4 elevado a 7 es : " + potencia(4,7));


var contador=0;
while(contador<5){
    miPrimeraFuncion();
    contador++;
}
/*esto es ineficiente

console.log("cumpleaños feliz");
console.log("que los cumplas feliz");
console.log("feliz cumpleaños Paula");
console.log("que los cumplas feliz");

console.log("cumpleaños feliz");
console.log("que los cumplas feliz");
console.log("feliz cumpleaños Paula");
console.log("que los cumplas feliz");

console.log("cumpleaños feliz");
console.log("que los cumplas feliz");
console.log("feliz cumpleaños Paula");
console.log("que los cumplas feliz");
*/

//li mismo pero optimo

happybirthday();
/*
happybirthday();
happybirthday();
Math.sqrt(9);
Math.random();
Math.pow(2,5);
*/

var nombre="Alexis";

happybirthdayConNombre("Erick");
happybirthdayConNombre("Luis");
happybirthdayConNombre("Katty");
happybirthdayConNombre(nombre);
var valor = Math.pow(2,3);
console.log(valor);
console.log(cuadrado(5));
console.log(cuadrado(6));
console.log(cuadrado(10));
console.log(cuadrado(5));
