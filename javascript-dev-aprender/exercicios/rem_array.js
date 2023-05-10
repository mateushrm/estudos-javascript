const num = ['a','b','c','d','e'];
//removendo valores no array
//inicio
const primeiro = num.shift();
console.log(primeiro);
console.log(num);
//meio
const meio = num.splice(1,1);
console.log(meio);
console.log(num);
//final
const ultimo= num.pop();
console.log(ultimo);
console.log(num);