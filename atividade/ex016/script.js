function calcular() {
    let num = document.getElementById("num")
    let tab = document.querySelector('select#res')
    let n = Number(num.value)
    let c = 0 
    tab.innerHTML = ''

    for(c; c <= 9; c++ ){

        let item = document.createElement('option')
        item.text = `${n}X${c}=${n*c}`
        tab.appendChild(item)
    }

}