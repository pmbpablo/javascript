let num = [5,8,9,3]
num.push(7) // serve para colocar um valor no final de uma variavel composta
num.sort() // serve para colocar os elementos em ordem

console.log(`Nosso valor é o ${num}`)
console.log(`o primeiro valor do vetor é ${num[1]}`)
console.log(`o vetor tem ${num.length} posições`)

let pos = num.indexOf(2) // esse indexOf serve para procurar em que posição está o valor
if(pos == -1){
    console.log('Esse valor não foi encontrado')
}else{
    
    console.log(`${pos}`)
}

// o -1 significa que o valor não foi encontrado