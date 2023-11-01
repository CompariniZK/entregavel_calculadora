let numero1 = 0;
let numero2 = 0;
let operacao = 0;
let resultado = 0;
let loop = 0;
let resultado2 = 0;
let resultado3

function Calculadora (numero1, numero2, operacao, resultado, loop, resultado2, resultado3){
{
numero1 = Number(prompt("Insira um primeiro número"))
numero2 = Number(prompt("Insira um segundo número"))
operacao = Number(prompt("Qual operação deseja? Digite: (1)Soma; 2(Subtração); 3(Multiplicação); 4(potência); 5 (divisão)"))

if(operacao === 1){
    resultado = numero1 + numero2
}
if(operacao === 2){
   resultado = numero1 - numero2
}
if(operacao === 3){
   resultado = numero1 * numero2
}
if(operacao === 4){
   
resultado = numero1 ** numero2

   }
}

if(operacao === 5){
   resultado =  numero1 / numero2 
}

if(resultado === undefined || resultado > 1000000 )
console.log("ERROR")

return resultado;
}
 let visor = Calculadora (numero1, numero2, operacao, resultado, loop, resultado2);
console.log("O resultado da operação foi: " + visor)