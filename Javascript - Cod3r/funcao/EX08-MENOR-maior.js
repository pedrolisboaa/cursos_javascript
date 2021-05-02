// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).


function jogosBasquete(){
    let resultadoJogos = []
    for(i in arguments){
        resultadoJogos.push(arguments[i])
    }
    let min = Math.min(...resultadoJogos)
    let max = Math.max(...resultadoJogos)

    return `${min} ${max}`
}

console.log(jogosBasquete(1, 2, 3, 4, 5))
console.log(jogosBasquete(1, 2, 3, 4, 5,0, -5, 5, 11, 13, 50))
