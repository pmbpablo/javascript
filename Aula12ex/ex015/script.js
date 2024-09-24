function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //esse full year é pra pegar a data completa
    var anoform = document.querySelector(`input#ano`)
    var resultado = document.getElementById(`res`)

    if (anoform.value == 0 || anoform.value > ano ){
        window.alert(`Verifique os dados e tente novamente`)
    } else {
        var sex = document.getElementsByName(`sex`)
        var idade = ano - Number(anoform.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked){
            genero = `Homem`
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','fotos/bbh.jpg')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src','fotos/jovemh.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','fotos/adultoh.jpg')
            }else{
                //velho
                img.setAttribute('src','fotos/velhoh.jpg')
            }
        } else if (sex[1].checked){
            genero = `Mulher`
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','fotos/bbm.jpg')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src','fotos/jovemm.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','fotos/adultom.jpg')
            }else{
                //velho
                img.setAttribute('src','fotos/velhom.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos </br>`
        res.appendChild(img)
    }
}