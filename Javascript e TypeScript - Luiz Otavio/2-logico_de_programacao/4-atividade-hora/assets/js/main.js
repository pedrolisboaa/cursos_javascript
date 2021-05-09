/* function diaDaSemana(data) {
    const dia = data.getDay()

    if (dia === 0) {
        return `Domingo`
    } else if (dia === 1) {
        return `Segunda-feira`
    } else if (dia === 2) {
        return `Terça-feira`
    } else if (dia === 3) {
        return `Quarta-feira`
    } else if (dia === 4) {
        return 'Quinta-feira'
    } else if (dia === 5) {
        return `Sexta-Feira`
    } else {
        return `Sábado`
    }
}

function diaMesAno(data) {
    const dia = data.getDate()
    let mes = data.getMonth()
    const ano = data.getFullYear()

    if (mes === 0) {
        mes = 'Janeiro'
    } else if (mes === 1) {
        mes = 'Fevereiro'
    } else if (mes === 2) {
        mes = 'Março'
    } else if (mes === 3) {
        mes = 'Abril'
    } else if (mes === 4) {
        mes = 'Maio'
    } else if (mes === 5) {
        mes = 'Junho'
    } else if (mes === 6) {
        mes = 'Julho'
    } else if (mes === 7) {
        mes = 'Agosto'
    } else if (mes === 8) {
        mes = 'Setembro'
    } else if (mes === 9) {
        mes = 'Outubro'
    } else if (mes === 10) {
        mes = 'Novembro'
    } else {
        mes = 'Dezembro'
    }

    return `${dia} de ${mes} de ${ano}`
}

function hora(data) {
    let hora = data.getHours()
    let minuto = data.getMinutes()

    return `${hora}:${minuto}`
}

const texto = document.querySelector('h1')
const dataAtual = new Date()

texto.innerHTML = `${diaDaSemana(dataAtual)}, ${diaMesAno(dataAtual)} </br> ${hora(dataAtual)}`
console.log(dataAtual, diaDaSemana(dataAtual), diaMesAno(dataAtual), hora(dataAtual)) */


