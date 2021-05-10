//Função que pega a hora, é multiplicado por 1000 porque data considera milisegundos, hourse 12 é o formato
// timeZone e para meio que zerar e não fica o time do brasil -3horas
//função inicial para pegar a hora
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-Br', {
        hour12:false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function(e){
    console.log(e.target)
})

iniciar.addEventListener('click', function(evento){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', function(evento){
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(evento){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
    relogio.classList.remove('pausado')
})


