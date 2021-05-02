class Pessoa {
    constructor(nome, idade = 0){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
    falarIdade(){
        console.log(`Minha idade é ${this.idade}`)
    }
}

const p1 = new Pessoa('Pedro', 28)
p1.falar()
p1.falarIdade()

const pessoa =(nome) => {
    return{
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = pessoa('Juliana')
p2.falar()