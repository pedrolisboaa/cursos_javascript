const numero = Number(prompt('Digite um número:'))
const nome = prompt('Digite seu nome:')

/*Com número*/
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = ' '
numeroTitulo.innerHTML += numero

texto.innerHTML = ' '
texto.innerHTML += `<p>Raiz quadrada ${Math.sqrt(numero)} .</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} .</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`
texto.innerHTML += `<p>Arredondado para baixo ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}.</p>`

/*Teste com String*/

/*Pegar o local que sera inserido*/
const nomeTitulo = document.getElementById('titulo-nome')
const nomeTexto = document.getElementById('texto-nome')

nomeTitulo.innerHTML = ' '
nomeTitulo.innerHTML += `<p>Olá, ${nome}!</p>`

nomeTexto.innerHTML = ' '
nomeTexto.innerHTML += `<p>${nome}, seu nome todo maiúsculo é ${nome.toUpperCase()}</p>`
nomeTexto.innerHTML += `<p>${nome}, seu nome todo minúsculo é ${nome.toLowerCase()}</p>`

