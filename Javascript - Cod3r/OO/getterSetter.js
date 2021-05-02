const sequencia = {
    _valor: 1, //convenção

    //Getter and Setter
    get valor(){
        return this.valor
    },

    set valor(valor){
        this._valor = valor * 50
    }
}

console.log(sequencia.valor)