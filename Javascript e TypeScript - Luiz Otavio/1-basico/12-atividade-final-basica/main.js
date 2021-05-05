/* Forma 1
 formulario.onsubmit = function(evento){
    evento.preventDefault()
    console.log('DEU CERTO')
} */
function criaPessoa(nome, sobrenome, peso, altura){
    return {nome, sobrenome, peso, altura}
}

function meuEscopo(){

   const formulario = document.querySelector('form') 
   const texto = document.querySelector("#mensagem")

   const pessoas = []

    function recebeEventoForm(evento){
        evento.preventDefault()
        const nome = formulario.querySelector('#nome')
        const sobrenome = formulario.querySelector('#sobrenome')
        const peso = formulario.querySelector('#peso')
        const altura = formulario.querySelector('#altura')

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value))  
        console.log(pessoas)

        texto.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<br>`
    }

   //Forma 2
   formulario.addEventListener('submit', recebeEventoForm)

}
meuEscopo()