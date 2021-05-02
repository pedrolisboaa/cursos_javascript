console.log(Math.ceil(6.1))
console.log(Math.floor(5.9))

const carro = {}
carro.marca = 'Fiat'
carro.modelo = 'Uno'
console.log(carro)

function Carro (nome){
    this.nome = nome
}

function Falar(saudacao){
    this.saudacao = saudacao
}

const carro2 = new Carro('corsa')
const carro3 = new Carro('Palio')
console.log(`O carro2 tem nome ${carro2.nome}`)
console.log(`O carro3 tem nome ${carro3.nome}`)
const pessoa = new Falar('oi')
console.log(pessoa.Falar())