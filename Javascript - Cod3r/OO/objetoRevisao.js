//Coleção dinâmica de chave/valor
const produto = new Object

produto.nome = 'cadeira'
produto['marca'] = 'generica'
produto.preco = 202

console.log(produto)
delete produto['marca']
delete produto.nome

console.log(produto)


const carro = {
    modelo: 'a4',
    valor: 90000,
    proprietario: {
        nome:'Pedro',
        idade: 28,
        endereco: {
            bairro: 'jardim botânico',
            rua: 19
        }
    },
    condutores: [{
        nome:'Juliana',
        idade: 24
    }],
    calcularValorSeguro: function(){
        // continue
    }

}

carro.proprietario.endereco.bairro = 'Guará'
console.log(carro)