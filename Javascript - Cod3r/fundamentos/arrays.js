const valores = [7.7, 8.9, 6.3, 4.5]
console.log(valores)
console.log(valores[1], valores[3])

valores[0] = 10.10
console.log(valores)
console.log(valores.length)

valores.push(5.6)
valores.push(12.12)

console.log(valores)

console.log(valores.pop())
console.log(valores)

delete valores[1]
console.log(valores)
