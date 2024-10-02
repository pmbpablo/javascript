
var num = document.querySelector('input#fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l ){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }

    num.value='' //serve para apagar o número do input
    num.focus() //serve para manter o input ativo 

}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
    
    media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</P>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p> A média de todos os valores é ${media}.</p>`
    }
}

