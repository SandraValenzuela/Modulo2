var nombreGato ="misifus";
var numTelefono = 123123123;
var mayorEdad = true;


var edad = prompt("Ingrese su edad");
if (edad>=18){
    alert("Ud. es mayor de edad");
}else{
    var edadFaltante = 18-edad;
    alert("Ud. es menor de edad, te faltan "+edadFaltante+" Años");
    
    if(edadFaltante>5){
        alert("Ud. es un niño, le falta "+ edadFaltante +" años ");
    }
}
console.log("hola");


//3<5 (true)
//4>=4 (true)
//4>4 (false)
//4==4 (true)
//4=="4" (true)
//4==="4" (false,son de distinto tipo)

var numero1 = 5;
var numero2 = "5";

if (numero1==numero2){
    alert("son iguales (1)!!!");
}




//Multievaluacion

var respuesta = prompt("Cuanto es 1+1?  :A)3 - B) 5 - C) 0 - D)2");

if (respuesta =="A"){
    alert("Respuesta Incorrecta");
}else if(respuesta=="B"){
    alert("Respuesta Incorrecta");
}else if(respuesta=="C"){
    alert("Respuesta Incorrecta");
}else if(respuesta=="D"){
    alert("respuesta Correcta !!!!!!!!!!!");
}else{
    alert("debe ingresar una alternativa entre A y D")
}

//desafio de las operaciones matemáticas
var num1 = prompt("Ingrese un número");
var num2 = prompt("Ingrese otro número");
var operacion= prompt(" ingrese la operación");




//-------------------------------
//condiciones simultaneas
var dia= prompt("indique el dia de la semana 1-7")
var hora= prompt("Indique la hora (0-24");
/*
if (dia<=5){
    if (hora>7){
        if(hora<19){
        alert("es hora de trabajo!")
        }
    }
}*/

if (dia<=5 && hora >7 && hora <19){
    alert("es hora de trabajar");
}

//----------------------------
var mascota= prompt("que animal es tu mascota?  1)Perro - 2)gato");
var color =prompt("que color es tu mascota? 1) claro - 2)oscuro");

//1) dejarlo pasar si su mascota no es gato

/* if(mascota! = 2){
    alert ("puedes pasar");
}else{
    alert("deja la mascota afuera!!!");
}
*/
//2): dejarlo pasar si la mascota es un perro y además es claro