const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}


function minhaFuncao2(){
    const valor = 'local'
    minhaFuncao()
}

minhaFuncao2()