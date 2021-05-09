const elementos = [
    {tag:'p', texto:'Frase 1 - Paragráfo'},
    {tag:'div', texto:'Frase 2- DIV'},
    {tag:'section', texto:'Frase 3 - Section'},
    {tag: 'footer', texto:'Frase 4 - Footer'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')



for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)