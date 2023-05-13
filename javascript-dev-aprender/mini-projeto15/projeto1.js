//mini-projeto 15 - Segurança Virtual
function verificar(){
    let nome = document.getElementById('nomeConvidado').value;
    convidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if(convidadosCristian.includes(nome)){
        document.getElementById('Permissao').innerText = 'Você pode entrar!';
    } else {
        document.getElementById('Permissao').innerText = 'Você não pode entrar!';
    }
}