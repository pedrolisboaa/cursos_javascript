function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e Y precisam ser número')
    }

    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma(1, 'a'))
}catch(error){
    console.log(error)
}
