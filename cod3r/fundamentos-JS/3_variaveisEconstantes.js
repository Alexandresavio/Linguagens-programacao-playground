//Variaveis são espaços reservados na memória ram do dispositivo para armazenar dados.

/**
 * formas de declarar variaveis em JS 
 *  tipo (var/let/const) < identificador > = < valor >
 */
var a = 3;
var nome = "fulano";

/**
 * var: As variáveis declaradas com var têm escopo de função ou escopo global, 
 * o que significa que são visíveis em toda a função em que são declaradas.
 */
function exemploVar() {
    var x = 10;
        if (true) {
            var x = 20; // Redeclaração permitida
            console.log(x); // 20
        }
    console.log(x); // 20 (valor reatribuído)
}
exemploVar()// chamada da funcao

// com VAR Reatribuição e redeclaração permitidas
var a = 25;

/**
 * et: Escopo de bloco: As variáveis declaradas com let têm escopo de bloco,
 * o que significa que são visíveis apenas dentro do bloco em que são declaradas,
 * incluindo blocos if, loops for, while, etc.
 */
function exemploLet() {
    let x = 15;
    if (true) {
        let x = 30; // Redefine a variável dentro do bloco
        console.log(x); // 20
    }
    console.log(x); // 10 (valor original)
}

exemploLet(); // Chamando a função


/**
 * Reatribuição permitida, mas não redeclaração: Você pode reatribuir valores a
 * uma variável let, mas não pode redeclarar a mesma variável dentro do mesmo bloco.
 */
let idade = 30;
//let idade = 40; gera erro

const cpf = 123456789;
