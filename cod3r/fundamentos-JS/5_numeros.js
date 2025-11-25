
const peso1 = 1.0;

// Declara a constante peso2 convertendo a string "2.0" para número usando o construtor Number
const peso2 = Number("2.0");

console.log(peso1, peso2);

// Verifica se peso1 é um número inteiro (sem casas decimais)
// Retorna true porque 1.0 é considerado inteiro
console.log(Number.isInteger(peso1));

// Verifica se peso2 é um número inteiro
// Retorna true porque 2.0 também é inteiro
console.log(Number.isInteger(peso2));


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

// Calcula o total ponderado multiplicando cada avaliação pelo seu peso
const total = avaliacao1 * peso1 + avaliacao2 * peso2;

// Calcula a média ponderada dividindo o total pela soma dos pesos
const media = total / (peso1 + peso2);

// Exibe a média com 2 casas decimais (arredondando se necessário)
// O resultado é uma string, por exemplo: "7.87"
console.log(media.toFixed(2));

// Converte o valor da média para representação binária (base 2)
console.log(media.toString(2));

// Exibe o tipo da variável 'media'
// Em JavaScript, todos os números (inteiros e decimais) têm tipo 'number'
console.log(typeof media);
