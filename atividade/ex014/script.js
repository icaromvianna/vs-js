function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('photo')
    var data = new Date()
    var hours = data.getHours()
    var minutes = data.getMinutes()

    msg.innerHTML = `Agora são ${hours}:${minutes} horas.`

    if (hours >= 0 && hours < 12) {
        img.src = "img/fotomanha.png"
        document.body.style.background = "#dcebf2"
    } else if(hours >=  12 && hours < 18) {
        img.src = "img/fototarde.png"
        document.body.style.background = "#e8974a"
    }else{ 
        img.src = "img/fotonoite.png"
        document.body.style.background = "#152930"
    }
}
