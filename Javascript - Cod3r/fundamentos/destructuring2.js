const [a] = [10]
console.log(a)

const [n1, n3, n5, n6 = 0] = [10, 8, 6]
console.log(n1, n3, n5, n6)

const [, [,,nota]] = [[1, 2, 3],[4 ,5 ,6]]
console.log(nota)