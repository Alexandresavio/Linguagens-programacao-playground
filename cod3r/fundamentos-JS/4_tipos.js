/**
 * O Javascript é uma linguagem fracamente típada, isso significa que  “ele” tentará
 * converter em tempo de execução os dados no valor. 
 */

//Number: Representa números, incluindo números inteiros e de ponto flutuante.

// Declaração de variáveis do tipo number
let num = 25; // Número inteiro
console.log(typeof num);

let altura = 1.75; // Número decimal(ponto flutuante)
console.log(typeof altura);

const peso1 = 1.0;
const peso2 = ("2.0");
console.log(peso1, peso2)

let qualquer = "Legal" //recebe um texto
console.log(qualquer);
console.log(typeof qualquer); // neste momento a variavel é do tipo string

qualquer = 3.1516; // é reatribuido um valor numerico a variavel qualquer
console.log(qualquer);
console.log(typeof qualquer);// agora a variavel passa a ser nunmber


//String: Sequências de caracteres, como texto.
var palavra = "Olá";

//Boolean: Representa um valor lógico verdadeiro (true) ou falso (false)
// Declaração de variáveis booleanas
let estaChovendo = true;
let temSol = false;