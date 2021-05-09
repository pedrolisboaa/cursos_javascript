function aplicacao() {

    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('submit', function (e) {
        /*pegando os valores e obtendo o IMC*/
        const peso = formulario.querySelector('#peso')
        const resposta = document.querySelector('#resultado')
        const altura = formulario.querySelector('#altura')
        const imc = Number(peso.value) / Number(altura.value ** 2)


        if (!Number(peso.value)) {
            resposta.innerHTML = `Digite um peso válido.`
        } else if (!Number(altura.value)) {
            resposta.innerHTML = `Digite uma altura válida.`
        } else {
            /*pegando o índice*/
            let indiceImc;
            if (imc < 18.5) {
                indiceImc = 'Abaixo do Peso'
            } else if (imc < 24.9) {
                indiceImc = 'Peso Normal'
            } else if (imc < 29.9) {
                indiceImc = 'Sobrepeso'
            } else if (imc < 34.9) {
                indiceImc = 'Obesidade Grau I'
            } else if (imc < 39.9) {
                indiceImc = 'Obesidade Grau II'
            } else {
                indiceImc = 'Obesidade Grau III'
            }
            resposta.innerHTML = `Seu ${imc.toFixed(2)} é você está ${indiceImc}`
        }
        e.preventDefault()
    })
}


aplicacao()