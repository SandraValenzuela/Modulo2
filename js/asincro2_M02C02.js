var numpar=2;


// ejercicio  Par o Impar
var numpar=prompt("Ingrese un  2 o 3 ");
if (numpar==2){
    alert("el número que ingreso es par")    
} else {
    alert("el número que ingreso es impar");

}  

//---------------------------
// Ejercicio Edad de Jubilarse
var sexo="Hombre";
var sexo ="Mujer";
var edadM =60;
var edadH =65;
prompt("ingrese Mujer o Hombre ");
prompt("ingrese edad");
if(edadM>=60 && sexo=="Mujer"){
    alert (" Ud. está en edad de jubilarse");
}else if (edadM<60 && sexo=="Mujer"){
    alert ("Ud. No está en edad de jubilarse");
}else if(sexo=="Hombre" && edadH>=65){
    alert("usted esta en edad de jubilarse");
}else if(sexo== "Hombre" && edadH<=64)
    alert("Ud. No esta en edad de jubilarse");


