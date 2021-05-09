/* let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3]; // aqui tem que ter o ponto e vírgulas
 
[a, b, c] = numeros

console.log(a, b, c)
 */
 
 // ... rest (pega o resto) ou  spread(desempacota)
const numeros = [10000, 234234, 3542342, 452342, 552342, 61848, 72626, 423428, 52342, 9]
const [primeiroNumero, segundoNumero, ...restoDoArray] = numeros

console.log(primeiroNumero)
console.log(segundoNumero)
console.log()
console.log(...restoDoArray)

