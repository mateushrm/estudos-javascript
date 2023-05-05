const num = ['a','b','c'];
//adicionando valores no array
//inicio
num.unshift('z');
console.log(num);
//meio
num.splice(1,0,1);
console.log(num);
//final
num.push('d');
console.log(num);