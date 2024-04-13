function obtenerPeso() {
    let PDa = document.getElementById("pesoDado").value
    let PDes= document.getElementById("pesoDeseado").value;
    let numero = document.getElementById("magnitudP").value;
    let factor, resultado, tabien = true;
    
    if((PDa !="km" && PDes != "km") && (PDa !="hm" && PDes != "hm") && (PDa !="dam" && PDes != "dam") && (PDa !="m" && PDes != "m") && (PDa !="dm" && PDes != "dm") && (PDa !="cm" && PDes != "cm") && (PDa !="mm" && PDes != "mm")){
        //Sabemos q ninguno es de distancia
    }
    else if((PDa !="Kg" && PDes != "Kg") && (PDa !="Hg" && PDes != "Hg") && (PDa !="Dg" && PDes != "Dg") && (PDa !="g" && PDes != "g") && (PDa !="dg" && PDes != "dg") && (PDa !="cg" && PDes != "cg") && (PDa !="mg" && PDes != "mg")){
        //Sabemos q ninguno es de peso
    }
    else{
        if (numero < 1){
            alert('Sí hombre, ahorita te convierto '+ numero + ' de '+PDa+' a '+PDes)
        }
        else{
        alert('Eres bobo o q? Esta va pasar '+PDa+' a '+PDes)
        }
        tabien = false;
    }

    if(tabien){
        if((PDa==="Kg" && PDes==="g")||(PDa==="g" && PDes==="mg")||(PDa==="Hg" && PDes==="dg")||(PDa==="Dg" && PDes==="cg")||(PDa==="km" && PDes==="m")||(PDa==="hm" && PDes==="dm")||(PDa==="dam" && PDes==="cm")||(PDa==="m" && PDes==="mm")){
            factor=1000;    
            resultado = numero * factor;
        }
        else if((PDa==="Kg" && PDes==="Dg")||(PDa==="g" && PDes==="cg")||(PDa==="Hg" && PDes==="g")||(PDa==="Dg" && PDes==="dg")||(PDa==="km" && PDes==="dam")||(PDa==="hm" && PDes==="m")||(PDa==="dam" && PDes==="dm")||(PDa==="m" && PDes==="cm")||(PDa==="dm" && PDes==="mm")){
            factor=100;    
            resultado = numero * factor;
        }
        else if((PDa==="Kg" && PDes==="Hg")||(PDa==="g" && PDes==="dg")||(PDa==="Hg" && PDes==="Dg")||(PDa==="Dg" && PDes==="g")||(PDa==="km" && PDes==="hm")||(PDa==="hm" && PDes==="dam")||(PDa==="dam" && PDes==="m")||(PDa==="m" && PDes==="dm")||(PDa==="dm" && PDes==="cm")||(PDa==="cm" && PDes==="mm")){
            factor=10;    
            resultado = numero * factor;
        }
        else if((PDa==="Hg" && PDes==="Kg")||(PDa==="dg" && PDes==="g")||(PDa==="Dg" && PDes==="Hg")||(PDa==="g" && PDes==="Dg")||(PDa==="hm" && PDes==="km")||(PDa==="dam" && PDes==="hm")||(PDa==="m" && PDes==="dam")||(PDa==="dm" && PDes==="m")||(PDa==="cm" && PDes==="dm")||(PDa==="mm" && PDes==="cm")){
            factor=10;    
            resultado = numero / factor;
        }
        else if((PDa==="Dg" && PDes==="Kg")||(PDa==="cg" && PDes==="g")||(PDa==="g" && PDes==="Hg")||(PDa==="dg" && PDes==="Dg")||(PDa==="dam" && PDes==="km")||(PDa==="m" && PDes==="hm")||(PDa==="dm" && PDes==="dam")||(PDa==="cm" && PDes==="m")||(PDa==="mm" && PDes==="dm")){
            factor=100;    
            resultado = numero / factor;
        }
        else if((PDa==="g" && PDes==="Kg")||(PDa==="mg" && PDes==="g")||(PDa==="dg" && PDes==="Hg")||(PDa==="cg" && PDes==="Dg")||(PDa==="m" && PDes==="km")||(PDa==="dm" && PDes==="hm")||(PDa==="cm" && PDes==="dam")||(PDa==="mm" && PDes==="m")){
            factor=1000;    
            resultado = numero / factor;
        }
        else if((PDa ==="km" && PDes=="dm")||(PDa ==="hm" && PDes=="cm")||(PDa ==="dam" && PDes=="mm")){
            factor=10000;    
            resultado = numero * factor;
        }
        else if((PDa ==="km" && PDes=="cm")||(PDa ==="hm" && PDes=="mm")){
            factor=100000;    
            resultado = numero * factor;
        }
        else if((PDa ==="km" && PDes=="mm")){
            factor=1000000;    
            resultado = numero * factor;
        }
        else if((PDa ==="dm" && PDes=="km")||(PDa ==="cm" && PDes=="hm")||(PDa ==="mm" && PDes=="dam")){
            factor=10000;    
            resultado = numero / factor;
        }
        else if((PDa ==="cm" && PDes=="km")||(PDa ==="mm" && PDes=="hm")){
            factor=100000;    
            resultado = numero / factor;
        }
        else if((PDa ==="mm" && PDes=="km")){
            factor=1000000;    
            resultado = numero / factor;
        }
        else if(PDa===PDes){
            factor=1;    
            resultado = numero*factor;
        }
    }

    document.getElementById("resultadoP").value = resultado;
}


    