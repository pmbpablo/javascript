var nome = 'Pablo';
var idade = 22;
var posuiFaculdade = true;

console.log(nome, idade, posuiFaculdade, nome);

var preco = 25;
var totalComprado = 5;
var totalPreco = preco * totalComprado;

console.log(totalPreco);

var sobrenome = 'Matos',
cidade = 'CG';
 // não precisa sempre por o nome var, basta dar o nome e separar por virgula, no fim é so colocar o ponto e virgula

console.log(sobrenome, cidade);

/*
Nomes para vars

Os nomes só podem iniciar com $ _ ou letra
(o nome pode conter numeros, parem não podem iniciar com eles)

Letra maiúsculas e minúsculas fazem diferença 

Existem palavras que nbão podem ser usadas 

uma variavel com dois nomes, geralmente as separam com a letra maiúscula na segunda palavra.
*/

/*
Hoisting
As Variaveis sempre são movidas para cima do código, porém o valor atribuido não é movido 

ex:
*/
var comida;


// ou seja, eu estou pedido para o comando me dar o valor de comida, antes de eu dizer a ele o que é a comida.
console.log(comida); 
/*var*/ comida = 'Pizza';


console.log(comida); // Aqui, como eu já definir o valor pra a var comida, ele vai me dar o resultado

//Alterando valor de uma variavel 

//var 
var time = 'Bahia';
var time = 'Italia';
console.log(time);

var cor = 'Amarelo';
cor = 'Azul';
console.log(cor)

//log
let pais = 'Brasil';
    pais = 'China'; // não é possivel por novamente o let
console.log(pais);




// Const

const serie = 'primeiro'
// const serie = 'porats' uma const não pode ser alterada 
console.log(serie)

