const frutas = ['maça', 'banana', 'pêra', 'uva', 'laranja']

/* for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
} */


for(let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome:'Pedro',
    sobrenome:'Lisboa',
    idade: 28,
    endereco:{
        rua:3,
        casa:18
    }
}

for(let i in pessoa){
    console.log(`${i} - ${pessoa[i]}`)
}

console.log(pessoa[idade])