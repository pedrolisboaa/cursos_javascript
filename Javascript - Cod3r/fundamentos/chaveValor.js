// par nome/valor
const saudacao = 'Ola' //contexto léxico

function executa(){
    const saudacao = 'Oi oi' //contexto léxico
    return saudacao
}


//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 28,
    endereco:{
        condominio: 'Ouro Vermelho 2',
        rua: 3,
        quadra: 18
    },
    sexo: 'masculino'
}

console.log(saudacao)
console.log(executa())
console.log(cliente)