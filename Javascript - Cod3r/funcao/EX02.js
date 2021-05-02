// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function classificaTriangulo(ladoUm, ladoDois, ladoTres){
    if(ladoUm === ladoDois && ladoDois === ladoTres){
        console.log('Equilátero')
    }else if(ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres){
        console.log('Isósceles')
    }else{
        console.log('Escaleno')
    }
}

classificaTriangulo(5, 5 ,5)
classificaTriangulo(8, 9, 10)
classificaTriangulo(5, 5, 9)
classificaTriangulo(4, 5, 4)