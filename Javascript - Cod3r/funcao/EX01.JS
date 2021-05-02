function teste(){
    console.log('teste')
}

teste()

function tabuada(x,y){
    const som = x + y
    const sub = x - y
    const mul = x * y
    const div = x / y

    console.log(`${x} + ${y} = ${som} n${x} - ${y} = ${sub} ${x} * ${y} = ${mul}\n ${x} / ${y} = ${div}`)
}

tabuada(5, 5)