function calcular(){
    let nota1=parseInt(document.getElementById("nota1").value)
    let nota2=parseInt(document.getElementById("nota2").value)
    let peso1=parseInt(document.getElementById("peso1").value)
    let peso2=parseInt(document.getElementById("peso2").value)

    console.log(nota1)
    console.log(nota2)
    console.log(peso1)
    console.log(peso2)
}
let resultado =  (nota1*peso1 + nota2*peso2)/(peso1+peso2)

    console.log(resultado)

