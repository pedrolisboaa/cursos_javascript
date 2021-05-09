const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lisboa',
    idade: 28,
    endereco: {
        condominio: 'Ouro Vermelho 2',
        quadra: 3,
        casa: 18
    }
}

//Atribuição via desestruturação 
const {nome, sobrenome, idade, endereco: {rua, numero}} = pessoa

console.log(nome, sobrenome, idade, rua, numero)