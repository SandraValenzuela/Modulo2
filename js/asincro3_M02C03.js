// ejercicio Multiplo de 3 y 5
    function multiplo(Valor, multi){
        var respuesta= Valor % multi;
        if (respuesta ==0) 
            return true;
        else
            return false
}
function multiple(){
    var min = 0;
    for(var i =100; i>min; i--){
        if(multiplo(i,3) && multiplo(1,5)){
            console.log(i,"FizzBuzz")
        }else{
            if (multiplo (i,3)){
                console.log(i,"Fizz")
            }else{
                if (multiplo (i,5)){
                    console.log(i,"Buzz")
                }else{
                    console.log(i,"terminó")
                }
            }
        }
    }
}

//------------------------------------------------------------------------
//ejercicio de piedra, Papel o Tijera
 prompt("Ingrese: Piedra, Papel o Tijera");
 var piedra= 0;
 var papel= 1;
 var tijera= 2;
 if (piedra==0){
      console.log("Piedra gana a tijera")
    }else if (papel== 1){
        console.log("papel le gana a piedra")
        }else if(tijera==2){
            console.log("termino juego")
}

    


    
