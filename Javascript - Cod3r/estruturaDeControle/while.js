function geraInteiroAleatorio(min, max){
    const numero = Math.floor((Math.random() * (min + max) + min))
    return numero
}


let numero = 0
while(numero != 1){
    numero = geraInteiroAleatorio(1, 20)
    console.log(numero)
}
console.log('Fim!')