//valor ganhos 7 ou 11

function jogarDados(){
    const resultadoDado = Math.random() * (6 - 1) + 1
    return resultadoDado.toFixed(0)
}


function jogar(){
    const dado1 = Number(jogarDados())
    const dado2 = Number(jogarDados())
    const somaDados = dado1 + dado2

    if (somaDados === 7 || somaDados == 11){
        console.log(`Resultado 1º dado: ${dado1}.\nResultado 2º dado: ${dado2}.\n Você é o ganhador!`)
    }else{
        console.log(`Resultado 1º dado: ${dado1}.\nResultado 2º dado: ${dado2}.\n Você perdeu!`)
    }
}

jogar()
