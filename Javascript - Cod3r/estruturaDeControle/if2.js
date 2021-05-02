function parOuImpar(numero){
    if(numero % 2 === 0){
        console.log('Par')
    }else{
        console.log('Ímpar')
    }
}

function jogarDado(){
    console.log((Math.random() * (6 - 1) + 1).toFixed(0))
}

jogarDado()
jogarDado()
jogarDado()
jogarDado()
jogarDado()
jogarDado()
jogarDado()