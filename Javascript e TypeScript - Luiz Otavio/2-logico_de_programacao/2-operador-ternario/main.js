// ? :

const pontuacao = 999
const nivelUsuario = pontuacao >= 1000 ? `Usuario VIP`: 'Usuário Padrão'

const corUsuario = null
const corPadrao = corUsuario || 'Petro'

console.log(nivelUsuario)

/* if(pontuacao >= 1000){
    console.log('Usuário VIP')
}else{
    console.log('Usuário Padrão')
} */