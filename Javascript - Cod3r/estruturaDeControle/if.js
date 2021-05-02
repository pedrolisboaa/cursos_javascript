function soBoaNoticia(nome, nota){
    if(nota >= 7){
        console.log(`Parabéns ${nome} você foi aprovado com nota ${nota}.`)
    }else{
        console.log(`${nome}, desculpe você está reprovado com nota ${nota}`)
    }
}


soBoaNoticia('pedro', 9)
soBoaNoticia('juliana', 6)