const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        
        // Checando se é uma tela final
        if (proximoPasso === 'passo-9') {
            document.getElementById('passo-final-heroico').classList.add('ativo');
        } else if (proximoPasso === 'passo-10') {
            document.getElementById('passo-final-tragico').classList.add('ativo');
        } else {
            document.getElementById(proximoPasso).classList.add('ativo');
        }
    });
});

function reiniciarJogo() {
    const passos = document.querySelectorAll('.passo');
    passos.forEach(passo => passo.classList.remove('ativo'));

    // Voltar para o primeiro passo
    document.getElementById('passo-0').classList.add('ativo');
}