function encontraValor(numerosLista, valorNumerico){
    for(i = 0; i < numerosLista.length; i++){
        if(valorNumerico === numerosLista[i]){
            return "Valor encontrado"
        }
    }
    return "Valor não encontrado"
}

console.log (encontraValor([1,2,3,4,5,6], 1))