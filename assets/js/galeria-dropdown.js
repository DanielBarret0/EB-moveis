function toggleSection(secao) {
    const secoes = document.querySelectorAll('.galeria');

    if (secao === 'todas') {
        // Se a opção "Todas as Seções" for selecionada, mostrar todas as seções
        secoes.forEach(secao => {
            secao.style.display = 'block';
        });
    } else {
        // Caso contrário, esconder todas as seções
        secoes.forEach(secao => {
            secao.style.display = 'none';
        });

        // Mostrar apenas a seção selecionada
        const secaoSelecionada = document.getElementById(secao);
        if (secaoSelecionada) {
            secaoSelecionada.style.display = 'block';
        }
    }
}
