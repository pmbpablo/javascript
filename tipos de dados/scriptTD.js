var nome = 'Pablo'
var idade = 23

console.log(typeof idade) // typeof serve para identifica qual o tipo de uma variavel

//Você pode somar uma string e assim concatenar as palavras.

var nome = 'Pablo';
var sobrenome = 'Matos';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

// Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log( typeof frase)

// Aspas Duplas, Simples e Template String
/* 
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil"; (Ao colocar o \, estamos dizendo para que desconsidere a função das aspas)
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
*/


//Template String 

var gols1 = 1000;
var frase01 = 'Romário fez ' + gols1 + ' gols';
var frase02 = `Romário fez ${gols1} gols`; // Utilizando Template String

console.log(frase02)
// Você deve passar expressões / variáveis dentro de ${}