const idade = 25

function podeVotar(idade){
    if(idade >= 18 && idade <= 65){
        console.log('Voto obrigatório')
    }else if(idade >= 16 && idade <= 17 || idade > 65){
        console.log('Pode votar, mas não é obrigatório.')
    }else{
        console.log('Não pode votar!')
    }
}

podeVotar(idade)