// Exemplo com var
var nome = "Maria";
console.log(nome);
nome = "João";
console.log(nome);

// Exemplo com let
let idade = 30;
console.log(idade);
idade = 35;
console.log(idade);

// Exemplo com const
const PI = 3.1415;
console.log(PI);

// Tamanho do Array
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length);

// Recuperação de elemento
console.log(numeros[2]);

// Inclusão de elemento
numeros[5] = 6;
console.log(numeros);

// Método push - Inserir no final
numeros.push(7);
console.log(numeros);

// Método pop - Retirar o final
numeros.pop();
console.log(numeros);

// Método unshift - Inserir no inicio
numeros.unshift(1);
console.log(numeros);

// Método shift - Remover no inicio
numeros.shift();
console.log(numeros);
