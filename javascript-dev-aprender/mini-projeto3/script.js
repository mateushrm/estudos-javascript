//(Mini-projeto 3) - FizzBuzz
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e por 5 => FizzBuzz
// Não divisivel por 3 ou 5 => entrada
// Não é um número => 'Não é um número'
const resultado = fizzBuzz(2);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada != 'number')
        return 'Não é um número';
    else if(entrada % 3 == 0 && entrada % 5 == 0)
        return 'FizzBuzz';
    else if(entrada % 3 == 0)
        return 'Fizz';
    else if(entrada % 5 == 0)
        return 'Buzz';

    return entrada;
}