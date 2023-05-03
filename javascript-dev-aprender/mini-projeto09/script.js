//(Mini-projeto 9) - Contador de asteriscos
exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    /* outra forma de resolver
    let padrao = '';
    for(let i=1; i<=linhas;i++){
        padrao += '*';
        console.log(padrao);
    }*/
    
    // Loop nested/interior
    for(let i=1; i<=linhas; i++){
        let padrao = '';
        for(let l = 0; l<i; l++){
            padrao += '*';
        }
        console.log(padrao);
    }
}