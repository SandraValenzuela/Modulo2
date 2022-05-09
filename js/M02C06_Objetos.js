// Ejemplo de arreglo

varFigurasGeometricas = ["triangulo","cuadrado","rectangulo","trapecio","pentagono"];
var segundoElemento = FigurasGeometricas[1];
var ultimoElemento = FigurasGeometricas[4];
//alternativa
var ultimoElemento2 = FigurasGeometricas[FigurasGeometricas.length-1];
console.log(FigurasGeometricas[0]);
console.log(FigurasGeometricas[1]);
console.log(FigurasGeometricas[2]);
console.log(FigurasGeometricas[3]);
console.log(FigurasGeometricas[4]);

console.log("---------------------------")
//inicializacion. condicion, incremento
for(i = 0;i < 5; i++);{
console.log(FigurasGeometricas[i]);
}
//recorrido inverso
//for(i=FigurasGeometricas)



//fin del for



//declaracion de un arreglo vacio
let miArreglo=[];
//declracion de un objeto vacio
let miObjeto={};

//declaracion de una variable
let miVariable="hola";

//declaracion de un arreglo con elementos
let miArreglos2=["hola","chao","que tal"];

//declaracion de un objeto con propiedad
let miObjeto2 ={
    nombre:"denis",
    edad:43,
    alumno:false
}
//crear un objeto que represente un triangulo
let Triangulo={
    lado1: 2,
    lado2: 2,
    lado3: 2
}
    

//crear un objeto que represente un punto en el plano caartesiano
let planoCar ={
    x:3,
    y:5
}

//crear un objeto que represente un auto
let auto={
    marca:"peugeot",
    modelo:"tepee",
    color:"gris",
    anio:2015,
    airbag:true   

}

//llamar a un elemento del arreglo miArreglo2(segundo elemento)
miArreglo2[1]="hasta luego";

//llamar a un elemento de un objetp, objetoAuto
objetoAuto["color"]="rojo";
console.log(objetoAuto);

//otra forma de acceder a un elemento es con la notacion de punto(.)
objetoAuto.color="verde";
console.log(objetoAuto);

//mostrar en pantalla solo la marca y modelo del objeto auto(mediante ambas notaciones)
let objetoAuto={
    marca:"peugeot",
    modelo:"tepee",
    color:"gris",
    anio:2015,
    airbag:true 
}
objetoAuto["marca","modelo"];
console.log(objetoAuto);

objetoAuto.marca="peugeot";
objetoAuto.modelo="tepee";
console.log(objetoAuto);

let casa={
    color:"blanca",
    cantidadHabitaciones:3,
    cantidadBanios: 2
}
//acceder a los elementos
console.log("el color de mi casa es " + casa.color);

//modificar
casa.color="verde";
casa["color"]= "verde";

//agregar una propiedad
casa.metrosCuadrados=75;
casa ["patio"]= true;

console.log(casa);
console.table(casa);

//------------------------------------
triangulo={
    a:2,
    b:3,
    c:3,
   
    perimeter: function(){
        return "hola desde la funcion perimetro";
    }
}

console.log(triangulo)
console.log(triangulo.perimetro());

//re-definicionde auto
let autoAuto ={
    marca:"mitsubishi",
    modelo:"montero",
    color:"negro",
    puertas:5,
    escribirMarca: function(){         console.log(this.marca);
    },
    escribirTodosLosDatos:function(){
        console.log(this.marca+ "," + this.modelo + "," + this.color);
    }

}

console.log(auto.marca);
console.log(auto.modelo);
auto.escribirMarca();
auto.escribirTodosLosDatos();

//objeto con propiedad y funciones que describa un cuadrilatero

var cuadrilatero = {
    lado1: 2,
    lado2: 3,
    perimetro:function(){
        return this.lado1*2 + this.lado2*2;
    },
    area:function(){
        return this.lado1*this.lado2;
    }
}

console.log("area del cuadrilateroes:" + cuadrilatero.area);

//--------------------------------------
//ejemplo de arreglo con datos de distinto tipo




//definir un arreglo de objetos donde cada objeto defina datos de una persona


var datosPersonales=[
    {rut:"13485345-0",nombre:"Juanito", apellido:"perez"},
    {rut:"9765765-2",nombre:"bruno", apellido:"fuenzalida"},
    {rut:"6345098-5",nombre:"alejandra", apellido:"Ruiz"}
    
]
console.log(datosPersonales[1].apellido);

console.log(datosPersonales);
console.table(datosPersonales);


autoAuto={
    marca:"mazda",
    modelo:"3",
    anio:2020,
    color:"azul"
}

//recorre y escribe identificadores de las propiedades 
for(let elemento in autoAuto){
    console.log(elemento);
}

//recorre y escribe valores delas propiedades
for(let elemento in autoAuto){
    console.log(autoAuto[elemento]);
}

//escribir con un solo for nombre de la propiedad y su valor

for(let elemento in autoAuto){
    console.log(elemento + "=" + auto[elemento]);
}
//------------------------------------
//crear un objeto pokemon que contenga las propiedades que lo definen
//numero
//nombre
//tipo: arreglo
// 2 ataques: Funciones

var pokemon={
    numero: 1,
    nombre: bulbaasour,
    tipo:["planeta","veneno"],
    latigoCepa:function(){
        console.log("latigo cepa!");
    }
}