function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv36 = trabalho1 !== trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv36, manterSaudavel}
}

console.log(compras(false, false))