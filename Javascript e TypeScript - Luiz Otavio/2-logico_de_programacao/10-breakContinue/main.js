const numeros = [1, 2, 3, 4, 5, 6, 7, 8,9,]

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] === 2){
        continue
    }
    console.log(numeros[i])

    if (numeros[i] === 7){
        break
    }

    console.log(numeros[i])
}