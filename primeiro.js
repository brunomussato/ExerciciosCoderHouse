/*primeira aula*/

var hello = "Hello World"

alert(hello);

var meunome = "Bruno M Mussato"
var primeironumero = "2"
var segundonumero = "3"

var soma = parseInt(primeironumero) + parseInt(segundonumero)
var multiplicacao = (primeironumero * segundonumero)

alert(soma)
console.log(multiplicacao)

function multiplica (num1, num2) {
   let result = num1*num2;
   return result;
}

multiplica (2,4)
multiplica (5,4)
multiplica (9,10)


function subtrai (num1, num2) {
   if(num1<num2) {
      return "nao foi possivel subtrair"
   }else{
      return num1-num2
   }
}

function divisao (num1, num2) {
   if(num1<num2) {
      return "nao foi possivel dividir"
   }else{
      return num1/num2
   }
}
console.log(subtrai (3,5))
console.log(subtrai (5,2))
console.log(subtrai (6,8))
console.log(divisao(8,4))
console.log(divisao(25,5))
console.log(divisao(10,40))

let caneca = {
   cabo: "longo",
   comprimento: "média",
   tamanho: 5,
   peso: 320

}

console.log(caneca)
console.log(caneca.comprimento)


let abacate = {
   cor: "verde",
   tamanho:"pequeno",
   caroco: "sim",
   valor: "baixo"

}

let manga = {
   cor: "amarela",
   tamanho:"pequeno",
   caroco: "sim",
   valor: "baixo"

}

let laranja = {
   cor: "laranja",
   tamanho:"pequeno",
   caroco: "nao",
   valor: "baixo"

}

let pera = {
   cor: "verde",
   tamanho:"pequeno",
   caroco: "nao",
   valor: "baixo"

}

let maca = {
   cor: "vermelha",
   tamanho:"pequeno",
   caroco: "nao",
   valor: "baixo"

}



let frutas = [abacate, manga, laranja, pera, maca]

console.log(frutas)
console.log(frutas[3])
console.log(frutas[3].cor)

/* terceira aula*/
let campoNumero1 = document.getElementById("texto")
let inputBotao = document.getElementById("botao")
let inputBotao2 = document.getElementById("botao2")

let campotextoo = document.getElementById("elemento")
let botao = document.getElementById("botao22")

let listadeelementos = []

function enviar(){
   listadeelementos.push (campotextoo.value)
   console.log(listadeelementos)
}

let lista = []
function adicionar(){
   lista.push(campoNumero1.value)
   localStorage.setItem("lista", JSON.stringify(lista))
}

function visualizar(){
   alert(localStorage.getItem("lista"))
}