//encontrando elementos na array(por referência)
const alunos = [
    {nome:'Ana Luiza',idade:15},
    {nome:'Bruno',idade:17},
    {nome:'Caio',idade:16}
];

const aluno = alunos.find(function(aluno){
    return aluno.idade === 17;
});

console.log(aluno);