var numpar=2;


/*
var numpar=prompt("Ingrese un  2 o 3 ");
if (numpar==2){
    alert("el número que ingreso es par")    
} else {
    alert("el número que ingreso es impar");

}   */
var sexo="Hombre";
var sexo ="Mujer";
var edadMuj =60;
var edadHom =65;
prompt("ingrese Mujer o Hombre ");
prompt("ingrese edad");
if((edadMuj>=60) && sexo=="Mujer"){
    alert (" Ud. está en edad de jubilarse");
}else if ((edadMuj <=59) && sexo=="Mujer"){
    alert ("Ud. No está en edad de jubilarse");
}else if(sexo=="Hombre" && (edadHom>=65)){
    alert("usted esta en edad de jubilarse");
}else if(sexo== "Hombre" && edadHom<=64)
    alert("Ud. No esta en edad de jubilarse");


