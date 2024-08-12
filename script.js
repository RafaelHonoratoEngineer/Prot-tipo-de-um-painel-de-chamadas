document.getElementById('dadosPaciente').addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const ambulatorio = document.getElementById('ambulatorio').value;
    const especialidade = document.getElementById('especialidade').value;
    const urgencia = document.getElementById('urgencia').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);
    localStorage.setItem('ambulatorio', ambulatorio);
    localStorage.setItem('especialidade', especialidade);
    localStorage.setItem('urgencia', urgencia);

    window.open('painelChamada.html', '_blank');
});