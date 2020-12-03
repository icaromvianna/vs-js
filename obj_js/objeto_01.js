var amigo = {
    nome:'Icaro',
    sexo:'M',
    peso: 75,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(10)
console.log(`${amigo.nome}, tem o peso de ${amigo.peso}KG`)