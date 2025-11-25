const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(typeof Math);

/**
 * O que é Math?
 * Math é um objeto embutido (nativo) do JavaScript que fornece funções matemáticas para cálculos comuns, como:
 * arredondar números, calcular potências e raízes, gerar números aleatórios, trabalhar com seno, cosseno, logaritmos etc.
 * Importante:
 * Ele não é um construtor, ou seja, você não usa new Math().
 * Você acessa diretamente seus métodos, como:
 */

Math.ceil(4.2)   // Arredonda para cima → 5
Math.floor(4.9)  // Arredonda para baixo → 4
Math.round(4.5)  // Arredonda para o mais próximo → 5
Math.trunc(4.7)  // Remove a parte decimal → 4

Math.pow(2, 3);   // 2³ = 8
Math.sqrt(9);     // √9 = 3
Math.cbrt(8);     // ∛8 = 2

Math.abs(-5);            // Valor absoluto → 5
Math.max(10, 2, 33);     // Maior número → 33
Math.min(10, 2, 33);     // Menor número → 2

Math.random(); // Retorna número entre 0 e 1 (ex: 0.5328)

Math.random() * 10; //gera um número entre 0 e 10
Math.floor(Math.random() * 100) + 1; //gera um numero entre 1 e 100, inteiro: 

