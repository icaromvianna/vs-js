function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p == 0){
        alert("Passo invalido")
    }else if(f == 0){
        alert("Numero final inválido")
    }else if(i == ''){
        alert("Insira um numero de inicio")
    }

    for(i;i <= f;i += p){

        if(i == f){
            res.innerHTML += `${i}✌`
        }else{
            res.innerHTML += `${i} 👉`
        } 
    }
    
    
}