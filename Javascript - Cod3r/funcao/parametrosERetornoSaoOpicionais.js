function calculaArea(altura, largura){
    const area = altura * largura
    if(area > 20){
        console.log(`Sua área é maior que o permitido. Área total = ${area}m²`)
    }else{
        return area
    }
}

console.log(calculaArea(1, 2))
console.log(calculaArea())
console.log(calculaArea(1, 2, 4))
console.log(calculaArea(5,5))