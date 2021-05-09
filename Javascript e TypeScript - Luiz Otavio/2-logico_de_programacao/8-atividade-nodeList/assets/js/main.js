const paragrafos = document.querySelector('.paragrafos')
const todosPargrafos = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backGroundColorBody = estiloBody.backgroundColor


for(let i of todosPargrafos){
    i.style.backgroundColor = backGroundColorBody
    i.style.color = 'white'
}

