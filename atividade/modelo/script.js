function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var niver = document.getElementById("ano")
    var res = document.querySelector('div#res')

    if(niver.value.length == 0 || Number(niver.value) > ano){
        alert("Invalid Age...")
    }else{
        var sex = document.getElementsByName("sex")
        var age = ano - Number(niver.value)
        var gen = '' 
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(sex[0].checked){
            gen = 'Homem'
            img.setAttribute('src', "fotomanha.png")
        }else if(sex[1].checked){
            gen = 'Mulher'
            img.setAttribute('src', "fotonoite.png")
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gen} com idade de: ${age} anos.<br>`
        res.appendChild(img)
    }
    
    
}