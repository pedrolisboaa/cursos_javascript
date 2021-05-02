let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function elevaAoCubo(e){
    console.log(e * e)
}

numeros.forEach(elevaAoCubo)
numeros.forEach(function(e){
    if(e % 2 == 0){
        console.log(e)
    }
})