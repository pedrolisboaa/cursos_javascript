const alunos = ['Pedro', 'Juliana', 'Marcela', 'Maicon']
alunos.pop()
alunos.push('Saraiva')

console.log(alunos)

alunos.shift() //remove o primeiro elemento da lista
console.log(alunos)

alunos.unshift('Marcelo')
console.log(alunos)


// splice pode adicionar e remover elementos

//adicionar
alunos.splice(2, 0, 'Jundiai',  'Pascal')
console.log(alunos)

// remover
alunos.splice(3, 1)
console.log(alunos)

const novosAlunos = alunos.slice(2)

console.log(alunos)
console.log(novosAlunos)