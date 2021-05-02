// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130


const idade = 45
const taxaInicial = 100

if(idade < 10){
    console.log(`R$ ${(taxaInicial+80)}`)
}else if(idade < 31){
    console.log(`R$ ${(taxaInicial+50)}`)
}else if(idade < 61){
    console.log(`R$ ${(taxaInicial+95)}`)
}else{
    console.log(`R$ ${(taxaInicial+130)}`)
}