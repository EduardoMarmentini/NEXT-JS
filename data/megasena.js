export function GerarMega(qnt = 6, numeros = []){
    qnt = +qnt
    // forma moderna de incluir itens uma lista e verificar se os numeros sao repetidos
    if(qnt < 6 && qnt > 60){
        throw "Quantidade invalida"
    }

    if(numeros.length === qnt){
        return numeros.sort((n1,n2) => n1 - n2)
    }
    
    const numeroAleatorio = parseInt(Math.random() * 60 ) + 1

    if(!numeros.includes(numeroAleatorio)){
        return GerarMega(qnt, [...numeros, numeroAleatorio])
    }
    else {
        return GerarMega(qnt, numeros)
    }

    /* Aqui uma forma mais antiga de preencher uma lista numeros
    const qnt = 6
    const lista = []

    for (var i = 0 ; i < 6 ; i++){
        lista.push(Math.floor(Math.random() * 99 + 1))
    }
    return lista
    */
}


