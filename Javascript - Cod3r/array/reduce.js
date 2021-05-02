const alunos = [
    {nome: 'Pedro', nota: 10, bolsista: true},
    {nome: 'Luiza', nota: 8.5, bolsista: false},
    {nome: 'Luiz', nota: 5.5, bolsista: false},
    {nome: 'Ana', nota: 6.6, bolsista: true}
]

const resultado = alunos.map(function(e){
    return e.nota > 7
})

console.log(resultado)