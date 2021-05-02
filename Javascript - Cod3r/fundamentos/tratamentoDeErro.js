function tratarErroELancar(erro){
    // throw new Error('...')
    throw 10
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    }catch(e){
        tratarErroELancar(e)
    }
}

const obj = {
    name: 'pedro'
}

console.log(imprimirNomeGritando(obj))