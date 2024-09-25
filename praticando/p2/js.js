function calcular(){
    var a = window.document.getElementById('numa')
    var b = window.document.getElementById('numb')
    var c = window.document.getElementById('numc')

    var resposta = document.getElementById('resultado')

    var calculo = document.getElementById('calculo')

    var na = Number(a.value)
    var nb = Number(b.value)
    var nc = Number(c.value)

   
    var delta =(nb**2) - (4*na*nc)
    
    var bhas_alto_mais = -nb +  Math.sqrt(delta)  //conta de cima com +
    var bhas_alto_menos = -nb - Math.sqrt(delta)   //conta de cima com -


    var bhas_baixo = 2*na  // conta de baixo

    var res_bhas_mais = bhas_alto_mais / bhas_baixo

    var res_bhas_menos = bhas_alto_menos / bhas_baixo


    resposta.innerHTML=(`<p> O valor de x¹ é ${res_bhas_mais}</p> <p> O valor de x² é ${res_bhas_menos}` )

    

    if (resultado.style.display == "block" ) {
        resultado.style.display = "none";
      } else {
        resultado.style.display = "block";
      }

}

function limpar(){
    window.location.reload(true);

    if (resultado.style.display == "block" ) {
        resultado.style.display = "none";
      } 

}