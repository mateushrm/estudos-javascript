//(Mini-projeto 10) - Número primos
// Criar função para mostrar os números primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let num = 2; num<=limite; num++){
        if(descobrindoPrimo(num)) 
        console.log(num);
    }
}

function descobrindoPrimo(num){
    for(let div=2; div<num; div++){
        if(num%div==0)
            return false;    
    }
    return true;
}