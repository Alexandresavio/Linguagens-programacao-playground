const escola = "Cod3r";

console.log(escola.charAt(4)); // vai retornar a letra que está no indice 4 da string 
console.log(escola.charAt(5));// vai retornar a letra que está no indice 5 da string, como este indice não existe retornará vazio
console.log(escola.charCodeAt(3));// vai retornar o valor unicode da tabela asc
console.log(escola.indexOf('3'));//indexOf() retorna o índice onde o caractere aparece pela primeira vez.
console.log(escola.substring(1));//substring(1) retorna a string começando do índice 1 até o final
console.log(escola.substring(0, 3));// substring(0, 3) pega do índice 0 até o 2 (o 3 é excluído).
console.log('escola '.concat(escola).concat("!"));// concat() junta strings
console.log(escola.replace(/\d/, 'e'));//replace() substitui parte da string.
console.log('Ana, Maria, Pedro'.split(','));// split(',') divide a string em um array, usando a vírgula como separador.