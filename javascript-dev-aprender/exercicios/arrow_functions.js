//forma mais curta de declarar métodos utilizando '=>'
const alunos = [
    {nome:'Ana Luiza',idade:15},
    {nome:'Bruno',idade:17},
    {nome:'Caio',idade:16}
];

const aluno = alunos.find((aluno) => aluno.idade === 17);
//Ou
const aluno2 = alunos.find((aluno)=>{
    return aluno.nome === 'Bruno' && aluno.idade === 17;
})

console.log(aluno);
console.log(aluno2);