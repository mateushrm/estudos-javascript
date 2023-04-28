let cliente = {
    nome:'Gustavo',
    idade: 19,
    sexo: 'M',
    endereco: 'Rua são Raimundo, N10, João Marques'        
};
cliente.altura = 180;
cliente.profissão = 'estudante';
console.log(cliente);

const cliente2 = {...cliente};