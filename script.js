/*var secretNumber = Math.floor(Math.random()*100);
var guess = Number(prompt("Digite um número até 10"));
console.log(secretNumber);
if (guess < secretNumber) { 
    alert("Too low");
}
else if(guess > secretNumber)
{
    alert("Too high");
}
else
{
    alert("Thats corret, sir");
} 

console.log("IMPRIMINDO NÚMEROS PARES DE 10 A 40")
var numeroPar = 10;
while(numeroPar <= 40){
    console.log(numeroPar);
    numeroPar+=2;
}


var impares = 300;

while(impares <= 333){
    if (impares % 2 !== 0){
        console.log(impares);
    }
    impares++;
}
var numero = 5;

while(numero <=50){
    if((numero % 5 === 0) && (numero % 3 === 0)){
    console.log(numero);
    }
    numero++;
}

var resposta = prompt("Voce ainda esta ai?");

while(resposta.indexOf("sim") === -1) {
    var resposta = prompt("Voce ainda esta ai?");
} 
 alert("yeah bitches");

var str = "hello";

for(var i = 0; i<str.length; i++){
  console.log(str[i]);
}

for (var i=-10; i<=19; i++){
    console.log(i);
}

for(var i=10; i<=40; i+=2){
    console.log(i);
}

for(var i=300; i<=333; i++){
    if(i%2!==0){
        console.log(i);
    }
}


for(i=5; i<=50; i++){
    if((i%5===0) && (i%3===0)){
        console.log(i);
    }
}

function ehPar(num)
{
    if(num%2===0){
        return true;
    } else {
        return false;
    }
}

var numero = prompt("Digite um numero");
alert(ehPar(numero));

function fatorial(num) {
    var result =1;
    for (var i=1; i<=num; i++){
        result = result * i;
    }
    return result;
}

*/

function kebabToSnake(entrada){ 
    var saida = entrada.replace(/-/g, "_");
    console.log(saida);
}

/*
function kebabToSnake(entrada) {
    var saida = entrada.split("-").join("_")
    console.log(saida);
}
*/