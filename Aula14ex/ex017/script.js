var num = document.getElementById('num')
var res = document.getElementById('res')

function gerar(){
    if(num.value.length == 0){
        window.alert('Valor incalculavel')
    } else{
        var n = Number(num.value)
        var c = 1
        res.innerHTML=''
        while(c <= 10){
            res.innerHTML+=(`${n} x ${c} = ${n*c} <br>`)
            c++
        }
    }
    
}