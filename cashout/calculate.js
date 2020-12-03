function calc(){
    var od1 = document.getElementById('odd')
    var aps = document.getElementById('ap')
    var n2 = document.getElementById('odd2')
    var ap2 = document.getElementById('ap2')
    var info = document.getElementById('info')

    var odd1 = Number(od1.value)
    var ap1 = Number(aps.value)

    //calc para saber o necessario para nao perder nada
    var calc_odd = 1/(odd1-1) + 1
    var calc_aps = ap1/(calc_odd - 1)

    n2.value = calc_odd
    n2.style.color = "green"
    
    ap2.value = calc_aps + ' valor minimo'
    ap2.style.color = "green"
    ap2.style.fontFamily = "bold"

    res.innerHTML = `<p> Aposta 1 : Ganho de R$${G_ap1}!</p>
                    <p> Aposta 2 : Ganho de R$${G_ap2}!</p>
                    <hr>`

  }

  function lucro(){
    //ganhos individuais
    var G_ap1 = ap1*(odd1-1)
    var G_ap2 = calc_aps*(calc_odd-1)

    //ganho total
    var total = G_ap1 - G_ap2
    
    if (total > 0) {
        info.style.color = "Green"
    } else if(total == 0){
        info.style.color = "rgb(230, 160, 9)"
    }else {
        info.style.color = "red"
    }

    info.innerHTML = `<P><div id='info'>Ganho total: ${total} </div></P>`

  }