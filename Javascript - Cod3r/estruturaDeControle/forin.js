const letras = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
for(i in letras){
    console.log(letras[i])
}


const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lisboa',
    idade: 28,
    endereço: {
        Bairro: 'Jardim Botânico',
        Casa: 18,
        Quadra:3
    }
}

for (i in pessoa){
    console.log(pessoa[i])
}