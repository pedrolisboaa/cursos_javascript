const numeros = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]
for (i in numeros){
    if(numeros[i] === 5){
        continue
    }
    console.log(numeros[i])
}

for(i in numeros){
    if(numeros[i] === 6){
        break
    }
    console.log(numeros[i])
}