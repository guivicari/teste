/*function inverterArray() {
    var arrayContrario = [1, 2, 3, 4, 5, 6];
     //var arryContrario = prompt("digite tres valores");
    console.log("Array original " + arrayContrario);
    console.log("Array invertido " + arrayContrario.reverse());
}

inverterArray();

*/

 
/*
   
function isUniform(arrayTeste) {
    var primeira = arrayTeste[0];
    for(var i=1; i<arrayTeste.length; i++){
        if(arrayTeste[i] !== primeira){
            return false;
        }
    }
    return true;
}

**************SUM ARRAY**********************

var sumArray  = function(arrayy){
    var total = 0;
    for (var i=0; i<=arrayy.length; i++){
        total += i;
    }
    return total;
}

*/

var sumArray2 = function(arrayy){
    var total = 0;
    arrayy.forEach(function(element){
        total+=element;
    });
    return total;
}


//************max()**************


function maxValue(arrayy){
    var maxx = arrayy[0];
    for (var i=1; i<arrayy.length; i++){
        if(arrayy[i]>maxx){
            maxx = arrayy[i];
        }
    }
    return maxx;
}