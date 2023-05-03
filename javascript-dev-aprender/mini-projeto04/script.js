// (Mini-projeto 4) - Medidor de Velocidade
// Velocidade máxima de até 70
// A cada 5km acima do limite, você leva 1 ponto
// Math.Floor()
// Caso os pontos maior que 12 -> "Carteira Suspensa"
verificarVelocidade(65);

function verificarVelocidade(velocidade){
    const velocidadeMax = 70;
    const kmPorPonto = 5;
    console.log(`Sua velocidade é de ${velocidade} km.`)
    if(velocidade <= velocidadeMax)
        return console.log('Ok');
    else{
        pontos = (velocidade - velocidadeMax)/kmPorPonto;
        Math.floor(pontos);
        if(pontos<12){
            return console.log(`Pontos: ${pontos}`);
        }else{
            return console.log('Carteira suspensa, por possuir mais de 12 pontos na carteira')
        }
    }
}
