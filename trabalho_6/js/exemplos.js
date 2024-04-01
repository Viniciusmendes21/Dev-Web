// Exemplo com var
// Com a declaração utilizando var, é possível reatribuir um novo valor para a mesma variável.
var nome = "Maria";
console.log(nome);
nome = "João";
console.log(nome);

// Exemplo com let
// Com a declaração utilizando let, também é possível reatribuir um novo valor para a mesma variável, e o escopo é limitado ao bloco onde foi declarado.
let idade = 30;
console.log(idade);
idade = 35;
console.log(idade);

// Exemplo com const
// Com a declaração utilizando const, a variável não pode ser reatribuída, ou seja, seu valor é fixo e não pode ser alterado.
const PI = 3.1415;
console.log(PI);

// Tamanho do Array
// A propriedade length de um Array retorna o número de elementos presentes no array.
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length);

// Recuperação de elemento
// É possível acessar um elemento específico de um array utilizando a notação de colchetes [] com o índice desejado.
console.log(numeros[2]);

// Inclusão de elemento
// Para adicionar um elemento a uma posição específica do array, basta utilizar a notação de colchetes [] com o índice desejado.
numeros[5] = 6;
console.log(numeros);

// Método push - Inserir no final
// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
numeros.push(7);
console.log(numeros);

// Método pop - Retirar o final
// O método pop() remove o último elemento de um array e retorna esse elemento.
numeros.pop();
console.log(numeros);

// Método unshift - Inserir no inicio
// O método unshift() adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.
numeros.unshift(1);
console.log(numeros);

// Método shift - Remover no inicio
// O método shift() remove o primeiro elemento de um array e retorna esse elemento.
numeros.shift();
console.log(numeros);
