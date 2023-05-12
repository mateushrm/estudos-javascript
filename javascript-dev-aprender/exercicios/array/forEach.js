//exercício utilando forEach para iterar um array
const vogais = ['a','e','i','o','u'];
/* 
vogais.forEach(function(letras){
    console.log(letras);
})
*/
//Utilizando arrow function
vogais.forEach((letras,indice)=>console.log(letras,indice));