const aprovados = ['Juliana', 'Pedro', 'Amanda', 'Olívia', 'Marcelo']

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1} - ${nome}`)
})


// Então eu passei o evento, que são os nomes dentro do array, no outro caso o segundo atributo será o indice.
const comidas = ['lasanha', 'miojo', 'sushi', 'macarrão']
comidas.forEach(function(e){
    console.log(e)
})


//teste 
const animais = ['macaco', 'cachorro', 'gato']
animais.forEach(e => console.log(e))