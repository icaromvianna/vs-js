function search() {

    var link = document.getElementById('link')
    var link = link.value

    
    if (link === '') {
        var link = 'http://127.0.0.1:5501/' + link 
        window.open(link,'_self')
    }else{
    var link = 'http://127.0.0.1:5501/' + link 
    window.open(link,'_blank')
    }

}


function searchShow() {
    var link = document.querySelector('.link')

    if(link.type == "hidden"){
        link.type = "text"
    }else{
        link.type = "hidden"
    }
    
    
}

function selectFile(event){
    const button = event.currentTarget
    
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach(removeActiveClass)

    //remover a classe active
    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //adicionar a classe active
    button.classList.add('active')

    var link = 'http://127.0.0.1:5501/' + (button.value) 
    
        
        if (button.value === '') {
            window.open(link,'_self')
        }else{
        window.open(link,'_blank')
        }
    

}

