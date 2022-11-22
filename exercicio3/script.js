//Exercício 3

//Parte 1


//a) 5 é maior que 20 e também é menor que 2;

const operacao1 = 5 > 20 && 5 < 2

console.log("A afirmação que 5 é maior que 20 e também é menor que 2 é:", operacao1)

/*false, porque 5 não é maior que 20 e 5 não é menor que 2, na conjunção quando temos dois itens falsos a afirmção também é falsa, consequentemente temos false && false,
que devolve false*/


//b) 5 é igual a 5 ou é igual a “5”;

const operacao2 = 5 == 5 || 5 == "5"

console.log("A afirmação que 5 é igual a 5 ou é igual a “5” é:", operacao2)

/*true, porque 5 é igual a 5, e o valor da segunda relação iria depender do igual que eu usaria, se == ou ===, mas na disjunção basta que um item seja verdadeiro para que a afirmação seja verdadeira, consequentemente temos true || (true/false),
que devolve true*/

//c) negação de (vinte é maior que cinquenta)

const operacao3 = !(20 > 50)

console.log("A negação de (vinte é maior que cinquenta) é:", operacao3)

/*true, porque é falso que 20 é maior que 50, como eu quero a negação de falso, então o resultado é verdadeiro, consequentemente temos !false,
que devolve true*/


//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

const operacao4 = !(20 > 50 || 50 > 60)

console.log("A negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) é:", operacao4)

/*true, porque é falso que 20 é maior que 50 e também é falso que 50 é maior que 60, as duas relações dentro do valor lógico OU são falsas, logo o resultado é falso, como eu quero a negação de falso, então o resultado é verdadeiro, consequentemente temos !(false || false),
que devolve true*/


//Parte 2

/* **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**
*/
const filho = 2
const salario = 2000

//a) Auxílio creche por filho:  R$45,50

const auxCreche = 45.50 * filho

//b) Comissão de 10% sobre o total de vendas mensal

const comissao = 0.10

//c) Total de vendas dos meses de janeiro a junho:

const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000.00
const vendasJunho = 9450.00

//d)  Desconto do INSS 5% do salário
const inss = 0.05


// 1) O salário fixo mais o auxílio creche
const salMaisCreche = salario + auxCreche
console.log(salMaisCreche.toFixed(2))


// 2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
const comJaneiro = comissao*vendasJaneiro
console.log(comJaneiro.toFixed(2))

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
const descJaneiro = (salMaisCreche + comJaneiro) * inss
console.log(descJaneiro.toFixed(2))

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log(`Cálculo do salário = salário + auxílio creche + comissão - desconto do INSS \n
Comissão = 10% do valor das vendas do mês \n
Desconto do INSS = 5% * (salário + auxílio creche + 10% das vendas do mês)`)

const salJan = (salMaisCreche + comissao * vendasJaneiro) * (1-inss) 
console.log("O salário do mês de janeiro foi de: R$",salJan.toFixed(2))

const salFev = (salMaisCreche + comissao * vendasFevereiro) * (1-inss) 
console.log("O salário do mês de fevereiro foi de: R$",salFev.toFixed(2))

const salMar = (salMaisCreche + comissao * vendasMarco) * (1-inss) 
console.log("O salário do mês de março foi de: R$",salMar.toFixed(2))

const salAbr = (salMaisCreche + comissao * vendasAbril) * (1-inss) 
console.log("O salário do mês de abril foi de: R$",salAbr.toFixed(2))

const salMai = (salMaisCreche + comissao * vendasMaio) * (1-inss) 
console.log("O salário do mês de maio foi de: R$",salMai.toFixed(2))

const salJun = (salMaisCreche + comissao * vendasJunho) * (1-inss)  
console.log("O salário do mês de junho foi de: R$",salJun.toFixed(2))

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 

const mediaSal = (salJan + salFev + salMar + salAbr + salMai + salJun)/6
console.log("A média salarial em seis meses (de janeiro a junho) foi de:", mediaSal.toFixed(2))