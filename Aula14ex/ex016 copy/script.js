function contar(){
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')

var v_inicio = Number(inicio.value)
var v_fim = Number(fim.value)
var v_passo = Number(passo.value)

var res = document.getElementById('res')

if(v_passo == '' ){
    res.innerHTML=('Falta preencher o campo passo')
} else{
    while(v_inicio <= 6){
        res.innerHTML=(`oi ${v_inicio}`)
        v_inicio++
    }
} // validador para o passo



 //window.alert('fim')

 
 
}