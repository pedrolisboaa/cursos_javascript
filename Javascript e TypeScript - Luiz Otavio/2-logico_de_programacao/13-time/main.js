function mostraHoraAtual(){
    let data = new Date()

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    })
}


const time = setInterval(function(){
    console.log(mostraHoraAtual())
}, 1000)

setTimeout(function(){
    clearInterval(time)
},10000)