const nome = 'Pedro'
const sobrenome = 'Lisboa'
const idade = 28
const peso = 130
const altura = 1.90

const imc = (peso / (altura * altura)).toFixed(2)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.`)
console.log(`Tem ${altura} e seu IMC é de ${imc}`)

