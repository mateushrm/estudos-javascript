//(Mini-projeto 2) - Máximo entre dois valores
let num1 = 2;
let num2 = 3;

function max(n1, n2){
    let maior;
    if(n1 >= n2){
        maior = n1;
    } else {
        maior = n2; 
    }
    //n1>n2 ? maior = n1 : maior = n2
    console.log(maior)
}

max(num1,num2);
