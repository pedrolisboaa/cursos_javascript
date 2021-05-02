const notas = [5.5, 9.8, 10, 7, 5.7, 6.8, 9.9 , 7.5]


//sem callback
let notasBaixas = []
for(let i = 0; i < notas.length; i++){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
notasBaixar = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

const nomes = ['pedro', 'juliana', 'pedro', 'amanada', 'olívia', 'marcela', 'pedro', 'bispo']
let nomePedro = nomes.filter(function(nome){
    return nome !== 'pedro'
})


console.log(nomePedro)

const frutas = ['maca', 'banana', 'pera', 'banana', 'uva']
let nomesFrutas = frutas.filter(function(fruta){
    return fruta !== 'uva'
})

console.log(nomesFrutas)


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroMenores = numeros.filter(function(numero){
    return numero <= 5
})
console.log(numeroMenores)