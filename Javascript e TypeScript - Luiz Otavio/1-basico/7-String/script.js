// Escrevendo na tag selecionada da HTML

let nome = prompt('Qual seu nome?')

document.body.innerHTML += `Olá , ${nome}.<br>`
document.body.innerHTML += `Seu nome tem ${nome.length} letras.<br>`
document.body.innerHTML += `A segunda letra do seu nome è ${nome[1]}.<br>`
document.body.innerHTML += `Seu nome com letra maiúscula ${nome.toUpperCase()}.<br>`
document.body.innerHTML += `Seu nome com letra minuscula ${nome.toLowerCase()}.<br>`