//(Mini-projeto 14) - Faixa de Preço
//Crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

let faixas = [
    {tooltip:'Até R$700', minimo:0, maximo:700},
    {tooltip:'De R$700 a R$1000', minimo:700, maximo:1000},
    {tooltip:'R$1000 ou mais', minimo:1000, maximo:1000000}
]

//Outra forma de fazer

function criarFaixas(tooltip, minimo, maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixas('Até R$700', 0, 700),
    criarFaixas('De R$700 a R$1000', 700, 1000),
    criarFaixas('R$1000 ou mais', 1000, 1000000)
]

console.log(faixas,faixas2);

//É possível fazer com o constructor function também
function Faixas(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new Faixas('Até R$700', 0, 700),
    new Faixas('De R$700 a R$1000', 700, 1000),
    new Faixas('R$1000 ou mais', 1000, 1000000)
]

console.log(faixas3);