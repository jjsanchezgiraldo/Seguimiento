let tipoLavadora
let horasLavadora

function capturarValores(){
    tipoLavadora = 1
    horasLavadora = 6
}

function seleccionarValorTipo (){
    if (tipoLavadora ==1){
        return 4000
    }else{
        return 3000
    }
}
function mostrarposibleDescuento(){
    if(horasLavadora > 10){
        return 0.90
    }else{
        return 1
    }
}

function calcularValorTotal(){
    return (seleccionarValorTipo() * horasLavadora) *mostrarposibleDescuento(seleccionarValorTipo)()
}
capturarValores()
console.log(calcularValorTotal())