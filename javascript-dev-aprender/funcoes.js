//Verbo ++ Substantivo
let corSite = 'azul';
function resetaCor(cor, tonalidade/*parametros*/){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor('vermelho','vinho');
console.log(corSite);

// Exercício
let tamanho = 2;

function aumentarTamanho(num){
    tamanho = tamanho + num;
};

console.log(tamanho);
aumentarTamanho(5);
console.log(tamanho);