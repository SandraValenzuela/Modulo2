//pedir un numero y elevado al cuadrado
//var numero = prompt("ingrese un numero");//pedir numero y guardarlo en la variable

/*if (Number(numero)){
    console.log(Number(numero));
    console.log("conversion correcta");
}else{
    console.log(Number(numero));
    console.log("conversion incorrecta");
}*//*


var cuadrado = numero*numero; // calcular el cuadrado del numero
alert("el cuadrado de " + numero + " es " + cuadrado);*/
//------------------------------------------------
//mismo ejercicio pero corregido para que detecte cuando el valor ingresado es un numero
/*var numero= prompt("ingrese un numero")//pedir numero y guardarlo en la variable
var cuadrado = numero*numero;*/ //calcular el cuadrado del numero

/*if (numero=="0"){ //caso especial, cuando se ingresa un 0
    alert("el cuadrado de 0 es 0");
}else if(Number(numero)){//cuando lo ingresado es un numero distinto a 0
    alert("el cuadrado de " + " es " + cuadrado);
}else{//caso por defecto: cualquier cosa que no cumpla las condiciones anteriores, o sea no es numero
    alert("la cifra ingresada no es un numero");
}*/
//---------------------------------------------
//ciclos

console.log("inicio, el bus esta vacio");
var contador=0; //variable que lleva la cuenta de la cantidad de pasajeros
while(contador<20){// se repite el bloque(entre las llaves{} hasta que el contador sea 20)
    console.log("un nuevo pasajero se ha subido");
    contador=contador+1;//le suma uno al contador
    //es lo mismo que contador++;
    console.log("hay " + contador + " pasajeros en el bus");
    console.log("--------------------------");
}
console.log("el bus esta lleno. Es hora de partir");
//---------------------------------------------------------
//ciclo para pedir numeros y entregar la suma de todos ellos hasta que el usuario ingrese un 0
var numero=1;
var contador=0;
var suma=0; // es la variable donde el usuario se van ir sumando los numeros ingresados por el usuario
while(numero!=0){ //preguntamos si el numero leido
    numero=Number(prompt("ingrese un numero (0 para salir"));
    suma=suma+numero;
    //es lo mismo que suma+=numero;
}
alert("la suma es " + suma); // mostramos el resultado

//----------------------------------------------------------
var palabra=""; //aqui vamos a guardar la palabra que ingreses el usuario

while(palabra!="chao"){
    palabra=prompt("ingrese palabra");
    if(palabra=="hola"){
        alert("hola que tal");
    }else if(palabra=="chao"){
        alert("adios!!");
        break;
    }else{
        alert("no entiendo");
    }
}
//----------------------------------------------------------
//desafio nota
//este codigo esta malo
/*
var nota
var nota1
var nota2
var total

while(nota!=0){
    nota=prompt("ingrese nota");
    if(nota= suma(nota1 + nota2));
}else {total= nota /total
alert("su promedio es: ");
}*/

var sumaNotas=0;        //acumulador, para sumar todas las notas
var contadorNotas=0;    //contador, para contar la cantidad total de notas
var nota;   //aqui se guardara lo que ingrese el usuario

while(nota!=0){
nota=prompt("ingrese una nota(0 para salir)");
sumaNotas+=nota;    //es lo mismo que sumaNotas=sumaNotas+nota;
contadorNotas++;    //esto es lo mismo que contadorNotas=contadorNotas+

}

alert("promedio=" + sumaNotas/contadorNotas);



/*palabra =prompt("ingrese palabra");

if(palabra=="hola"){
    alert("hola que tal");
}else if(palabra=="chao"){
    alert("adios!!!");
}else{
    alert("no entiendo");
}*/