/* const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Lisboa',
    idade: 28
}
 */


function criaPessoa(nome, sobrenome, idade){
    return {
        nome, sobrenome, idade,

        falar(){
            return `Ola meu nome é ${this.nome} ${this.sobrenome}`
        },

        minhaIdade(){
            return `Eu tenho ${this.idade} anos.`
        }
    }
}

const pessoaPedro = criaPessoa('pedro', 'lisboa', 28)
const pessoaJuliana = criaPessoa('Juliana', 'Oliveira', 24)
console.log(pessoaPedro)
console.log(pessoaJuliana)

console.log(pessoaPedro.falar())
console.log(pessoaPedro.minhaIdade())
console.log(pessoaJuliana.falar())
