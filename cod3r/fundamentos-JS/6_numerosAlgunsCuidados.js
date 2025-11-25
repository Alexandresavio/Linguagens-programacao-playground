// Em JavaScript, dividir um número por zero não gera erro.
// O resultado é o valor especial "Infinity" (infinito).
console.log(7 / 0); // Saída: Infinity

// Quando uma string contém apenas números, o JavaScript tenta convertê-la automaticamente para número.
// Aqui, "10" é convertido em 10 e a divisão ocorre normalmente.
console.log("10" / 2); // Saída: 5

// Quando a string não é numérica, o JavaScript não consegue converter para número.
// Multiplicar "Show! " por 2 resulta em NaN (Not a Number).
console.log("Show! " * 2); // Saída: NaN

// Devido a limitações da representação de números de ponto flutuante (IEEE 754),
// o resultado de 0.1 + 0.7 não é exatamente 0.8, mas algo muito próximo (como 0.7999999999999999).
console.log(0.1 + 0.7); // Saída: 0.7999999999999999

// O método toFixed(2) formata o número com 2 casas decimais, arredondando se necessário.
// Aqui, o valor 10.345 é arredondado para 10.35.
// Observação: toFixed retorna uma string, não um número.
console.log((10.345).toFixed(2)); // Saída: "10.35"
