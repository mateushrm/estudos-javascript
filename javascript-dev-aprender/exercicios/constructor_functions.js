function Cliente(nome,idade,sexo,endereco){
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo,
        this.endereco = endereco;
}

const cliente1 = new Cliente('Maria',21,'F', 'Avenida Joaquim Ferraz, Centro, N120');
console.log(cliente1);