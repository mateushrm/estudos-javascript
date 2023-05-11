//Combinando e cortando arrays
const primeiro = ['a','b','c'];
const segundo = ['d','e','f'];

//Combinando
const combinado = primeiro.concat(segundo);
console.log(combinado);

//Divindo
//Por indice inicial e final como parâmetros
const cortado1 = combinado.slice(3,5);
console.log(cortado1);
//Um índice como parâmetro
const cortado2 = combinado.slice(3);
console.log(cortado2);
//Sem parâmetro
const cortado3 = combinado.slice();
console.log(cortado3);