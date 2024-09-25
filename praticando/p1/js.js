function pform(){
    var nome = window.document.getElementById('nome')
    var idade = window.document.getElementById('idade')
    var resultado = window.document.getElementById('resultado')
    var data = new Date()
    var agora = data.getFullYear()
    var ano = agora - Number(idade.value)

    var sex = document.getElementsByName('sex')
    var genero = ``
    
    if (sex[0].checked){
        genero = 'Homem'
    }else if (sex[1].checked) {
        genero = 'Mulher'
    }
    resultado.innerHTML=(`Olá ${nome.value}, você é ${genero} e nasceu em ${ano}`)

}


 