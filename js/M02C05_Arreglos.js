function escribir(){
    console.log("texto de ejemplo");
}


var palabra="Hola";
var palabra2

//escribir();
//Math.pow(2,3);

console.log(palabra.length);
console.log("la primera letra de la palabra hola es: " + palabra[0]);
console.log("la segunda letra de la palabra hola es: " + palabra[1]);
console.log("la ultima letra de la palabra hola es:")+ palabra[3];
console.log("la letra en la posición 4 de la palabra holaes:" + palabra[4]);

var largoPalabra = palabra2.length;
console.log("la ultima letra es:" + palabra2[largoPalabra-1]);
//en un solo paso
console.log("ultima letra:" + palabra2[palabra2.lenght-1]);


//quiero guardar los nombres de los alumnos del curso
//version 1, sin arreglos
var Alumno1="Paula";
var Alumno2="Alexis";
var Alumno3="Katty";
var Alumno4="Sandra";
var Alumno5="Fernando";

console.log("el alumno 3 es:" + Alumno3);

//version arreglos
let Alumnos=["Paula","Alexis","Katty","Sandra","Fernando"];

console.log("la cantidad total de alumnos es: " + Alumnos.lenght);
console.log("el segundo alumno es:" + Alumnos[1]);
console.log("el primer alumno es:" + Alumnos[0]);
console.log("el ultimo alumno es:" + Alumnos[Alumnos.lenght-1]);  //siempre el ultimo elemento del arreglo es arreglo.lenght -1


//modificacion de un elemento del arreglo
console.log("el tercer alumno antes del cambio es:" + Alumnos[2]);
Alumnos[2]="Matias";        //reemplazo el tercer elemento del arreglo
console.log("el tercer alumno despues del cambio es:" + Alumnos[2]);

//agregar elementos al final del arreglo
console.logtable(Alumnos);
Alumnos.push("Clemente");
console.table(Alumnos);
//agregar dos elementos
Alumnos.push(["Guillermo", "Alejandra"]);  //cuando es en corchete los agrega como conjunto y no por separado, se debe borrar el corchete y dejar solo los parentesis
console.table(Alumnos);

//sacar el ultimo elemento con pop
console.log("antes del pop");
console.table(Alumnos);
let ultimo= Alumnos.pop();
console.log("despues del pop------------");
console.table(Alumnos);
console.log("el elemento sacado es:" + ultimo);

//sacar el primero elemento con pop
console.log("antes del shift--------");
console.table(Alumnos);
let primero= Alumnos.shift();
console.log("despues del pop------------");
console.table(Alumnos);
console.log("el elemento sacado es:" + primero);

//indexoft
var texto="mi primer index";
var posicion=texto.indexOf("p");
console.log("la palabra del texto es:" + posicion);  //3
console.log("la posicion del texto es: " + texto.indexOf("primer"));  //3
console.log("la posicion del texto es: " + texto.indexOf("index"));  //10
console.log("la posicion del texto es: " + texto.indexOf("pro"));  //-1
console.log("la posicion del texto es: " + texto.indexOf("i"));  //1


//index of arreglos
Alumnos=["Paula","Alexis","Katty","Sandra","Fernando"]; //reescribe........



//crear una copia de arreglo original (slice)
var CopiaAlumnos=Alumnos.slice();
var CopiaParcialAlumnos=Alumnos.slice(1,4);
console.log("copia---------------");
console.table(CopiaAlumnos);
console.log("copia parcial-------------");
console.table(CopiaParcialAlumnos);


//eliminar elementos desde cualquier parte
console.log("antes de eliminar");
console.table(CopiaAlumnos);
var Eliminados=CopiaAlumnos.splice(1,3);
console.table(CopiaAlumnos);
console.log("Elementos eliminados");
console.table(Eliminados);



//eliminar un solo alemento en una posicion de enmedio
CopiaAlumnos=Alumnos.slice();
console.log("antes de eliminar un elemento");
console.table(CopiaAlumnos);
var eliminado = CopiaAlumnos.splice(2.1);
console.log("despues de eliminar un elemento");
console.table(CopiaAlumnos);
console.log(eliminado);
CopiaAlumnos.splice 

//tranformar arreglo en texto
console.log(Alumnos.join("-"));

var textoAlumnos="Pedro juan diego denis pablo";
vararregloAlumnos=TextoAlumnos.split(" ");
console.table(arregloAlumnos);


