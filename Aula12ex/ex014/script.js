function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora < 12 ){
        img.innerHTML = `<img class="imagem" src="manha.jpg" alt="manha">`
        window.document.body.style.background = '#D3A756'
    } else if (hora => 12 && hora < 18){
        img.innerHTML = `<img class="imagem" src="tarde.jpg" alt="tarde">`
        window.document.body.style.background = '#C38860'
        
    } else {
        img.innerHTML = `<img class="imagem" src="noite.jpg" alt="noite">`
        window.document.body.style.background = '#D9530A'
    }
}


