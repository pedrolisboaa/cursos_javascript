const pessoa = {
    saudacao: 'Bom dia!',
    numeros: '1, 2, 3, 4',
    falar(){
        console.log(this.saudacao)
    },
    contar(){
        console.log(this.numeros)
    } 
}

pessoa.falar()
pessoa.contar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const carro = {
    modelo: 'uno',
    marca: 'fiat',
    informarModelo(){
        console.log(this.modelo)
    },
    informarMarcar(){
        console.log(this.marca)
    }
}

carro.informarModelo()
carro.informarMarcar()

const informaModeloDoCarro = carro.informarModelo.bind(carro)
const informarMarcaDoCarro = carro.informarMarcar.bind(carro)

informaModeloDoCarro()
informarMarcaDoCarro()