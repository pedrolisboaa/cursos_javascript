// criar de forma literal

function fun1(){
    return 'oi'
}

// armazenar em uma variável 
const fun2 = function(nome){
    return nome
}

// armazenar em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2,5))
console.log(array[1]())
console.log(array[2]('Juliana'))

//Armazenar em um objeto
const obj = {}
obj.falar = function(){return 'opa!'}

console.log(obj.falar())

//