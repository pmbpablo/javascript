var num = document.getElementById('num')
var res = document.getElementById('res')

function gerar(){
    resv = Number(num.value)

    var conta1 = resv * 1
    var conta2 = resv * 2 
    var conta3 = resv * 3
    var conta4 = resv * 4 
    var conta5 = resv * 5 
    var conta6 = resv * 6 
    var conta7 = resv * 7 
    var conta8 = resv * 8 
    var conta9 = resv * 9
    var conta10 = resv * 10
    
    res.innerHTML=(`
        ${resv} x 1 = ${conta1} <br>
        ${resv} x 2 = ${conta2} <br>
        ${resv} x 3 = ${conta3} <br>
        ${resv} x 4 = ${conta4} <br>
        ${resv} x 5 = ${conta5} <br>
        ${resv} x 6 = ${conta6} <br>
        ${resv} x 7 = ${conta7} <br>
        ${resv} x 8 = ${conta8} <br>
        ${resv} x 9 = ${conta9} <br>
        ${resv} x 10 = ${conta10} <br>
        `)
}