// (Mini-projeto 7) - Soma dos múltiplos de 3 e 5
// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite){
    let soma=0;
    for(let i = 0; i<=limite; i++){
        if(i%3 == 0 || i%5 == 0){
            soma+=i;
        }
    }
    return console.log(soma);
}