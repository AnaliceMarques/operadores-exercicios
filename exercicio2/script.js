//Exercício 2

const primeiroNum = Number(prompt("Informe um número:"))
const segundoNum = Number(prompt(`Informe outro número: \nPode ser igual ao que foi informado anteriormente.`))

console.log("O primeiro número é maior que o segundo?:",primeiroNum>segundoNum)

console.log("O primeiro número é igual ao segundo?:",primeiroNum==segundoNum)

console.log("O primeiro número é divisível pelo segundo?:",(primeiroNum % segundoNum) == 0)

console.log("O segundo número é divisível pelo primeiro?:", (segundoNum % primeiroNum) == 0)

