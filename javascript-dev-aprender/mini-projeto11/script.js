//(Mini-projeto 11) - Montador de endereços
// Criar um objeto endereco que contem:
// Rua, Cidade, CEP, exibirEndereco(endereco)

let endereco = {
    rua: 'R. Inácio Nogueira Portela, 849 - Lions Club',
    cidade: 'Tianguá',
    cep:'62320-000'
};

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave,endereco[chave])
    }
}
exibirEndereco(endereco);