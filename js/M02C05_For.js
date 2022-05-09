
//ciclo normal
for (i =0;i<10;i++){
    console.log("el valor de i es: " + i);
}
console.log("-------------------------------");
//ciclo que no empieza con 0
for (i =5;i<10;i++){
    console.log("el valor de i es: " + i);
}
console.log("--------------------------------")
//ciclo que empieza con 0, pero se incrementa en 2
for (i =5;i<10;i+=2){
    console.log("el valor de i es: " + i);
}
console.log("--------------------------------")
//ciclo con diferentes valores
for (i =5;i<11;i+=3){
    console.log("el valor de i es: " + i);
}
console.log("-------------------------------")
//ciclo que no empieza con 0
for (i =10;i>0;i--){
    console.log("el valor de i es: " + i);
}
console.log("------------------------------")

var letras="abcdefgh";
for(i=0;i<letras.length;i++){
    console.log(letras[i]);
}

//contar vocales
var palabra="hola que tal, festival";
var contadorVocales=0;
for(i=0; i<palabra.length;i++){
    if(palabra[i]=="a" || palabra[i]=="e" || palabra[i]=="i" || palabra[i]=="o" || palabra[i]=="u") {
        contadorVocales++;
    }
}
console.log("la cantidad de valores es:" + contadorVocales);

//mostrar en pantalla letras pares
palabra="curso de fullStack con javascript";
for(i=0;i<palabra.length;i+=2){
    console.log(palabra[i]);
}

console.log("----------------------------")
//generar el arreglo al reves
palabra="hola que tal!";
var resultado=[];
for(i=palabra.length-1;i>=0;i--){
    console.log(palabra[i]);
    resultado.push
}