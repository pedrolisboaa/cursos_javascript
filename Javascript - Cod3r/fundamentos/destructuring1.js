const pessoa = {
    nome: 'Pedro',
    idade: 28,
    sexo: 'masculino',
    endereco: {
        bairro: 'Jardim',
        rua: 4,
        casa: 8
    }
}

const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2010,
    km: 180000
}

const {nome, idade} = pessoa
console.log(nome, idade)


const {nome: n, endereco: end} = pessoa
console.log(n, end)

const {endereco: {bairro: b, rua: r, casa: cs}} = pessoa
console.log(b, cs, r)


const {modelo, km} = carro
console.log(modelo, km)

const {cor: c = true, km: quilometragem = true} = carro
console.log(c, quilometragem)