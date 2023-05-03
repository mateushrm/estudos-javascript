function criarCliente(nome,idade,sexo,endereco){
    return {
        nome,
        idade,
        sexo,
        endereco
    }
}

const cliente1 = criarCliente('Maria',21,'F', 'Avenida Joaquim Ferraz, Centro, N120');
console.log(cliente1);