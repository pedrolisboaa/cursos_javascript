function aplicacao(){
    
    const formulario = document.querySelector('form')
    
    //Recebendo evento do formulário
    function recebendoEvento(evento){
        evento.preventDefault()

        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')
        const resposta = formulario.querySelector('p')

        const imc = (Number(peso.value) / Number(altura.value * altura.value)).toFixed(2)

        resposta.innerHTML = `Seu imc é ${imc}`
    }

    //Parando o submit
    formulario.addEventListener('submit',recebendoEvento)

    

}
aplicacao()