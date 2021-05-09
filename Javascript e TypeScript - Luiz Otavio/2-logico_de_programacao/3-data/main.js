/* const data = new Date()
const data2 = new Date('1992-09-20 15:24:30')

console.log(data)
console.log(data.toString())
console.log(data2.toString())

console.log('Dia', data.getDate()) // dia
console.log('Mes', data.getMonth() + 1) // dia // Mês começa da semana
console.log('Ano', data.getFullYear()) // dia
console.log('Hora', data.getHours()) // dia
console.log('Minuto', data.getMinutes()) // dia
console.log('Segundo', data.getSeconds()) // dia
console.log('Mili segundos', data.getMilliseconds()) // dia
console.log('Dia semana', data.getDay()) // dia // 0 è domingo
console.log(Date.now()) */

function zeroAEsquerda(numero){
    if (numero < 10){
        return `0${numero}`
    }else{
        return numero
    }
}

function retornaData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())

    return `Hoje é ${dia}/${mes}/${ano}`
}

const data = new Date()
const dataBrasil = retornaData(data)
console.log(dataBrasil)
