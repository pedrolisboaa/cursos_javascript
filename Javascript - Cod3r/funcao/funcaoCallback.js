const sabores = ['calabresa', 'chocolate', 'portuguesa', 'banana', 'napolitana']
const times = ['flamengo', 'botafogo', 'palmeiras', 'são paulo', 'gama', 'ponte preta']

function imprimirTimes(nome, indice){
    console.log(`Time ${indice + 1}: ${nome}`)
}

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}

sabores.forEach(imprimir)
times.forEach(imprimirTimes)