// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.


function divisivelPorTres(numero){
    if (numero % 3 === 0){
        return true
    }else{
        return false
    }
}

console.log(divisivelPorTres(9))
console.log(divisivelPorTres(12))
console.log(divisivelPorTres(15))
console.log(divisivelPorTres(22))