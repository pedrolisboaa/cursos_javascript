// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores

function divisao(x, y){
    const resultado = x / y
    const resto = x % y
    console.log(`Resultado = ${resultado.toFixed(2)} | Resto = ${resto}`)
}

divisao(10, 2)
divisao(11,2)
divisao(11, 3)