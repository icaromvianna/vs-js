
    var num = document.querySelector("input#num")
    var lista = document.querySelector("select#res")
    var res = document.querySelector('div#res')
    var valores = []

    function isNumero(n){
        if(Number(n)>=1 && Number(n) <= 100){
            return true
        }else{
            return false
        }
    }

    function inLista(n, l) {
        if(l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }

    function acrescentar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert("valor inválido ou ja encontrado na lista!")
    }
    num.value = ''
    num.focus()
    }

    function finalizar(){
        if(valores.length == 0){
            window.alert("Adicione valores antes de finalizar!")
        }else{
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0

            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior)
                    maior = valores[pos]
                if(valores[pos] < maior)
                    menor = valores[pos]
            }

            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
            res.innerHTML += `<p> Maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p> Menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p> Soma dos numeros é: ${soma}.</p>`
            res.innerHTML += `<p> A média dos numeros é: ${media}.</p>

        }
    }