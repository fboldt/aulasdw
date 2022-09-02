const tamanhoCelula = 40;
let pecaId = 0;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
            celula.addEventListener('drop', drop)
            linha.append(celula);

            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
            if (i % 2 == j % 2) {
                celula.addEventListener('dragover', allowDrop)
                celula.style.backgroundColor = 'black';
                if (i * 8 + j <= 24) {
                    const peca = criaPeca('black')
                    peca.id = `b-i${i}-j${j}`
                    celula.append(peca)
                    celula.removeEventListener('dragover', allowDrop)
                } else if (i * 8 + j >= 40) {
                    const peca = criaPeca('red')
                    peca.id = `r-i${i}-j${j}`
                    peca.draggable = true
                    celula.append(peca)
                    celula.removeEventListener('dragover', allowDrop)
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}

function jogadorDaVez() {
    const pecas = document.querySelectorAll('.peca')
    pecas.forEach(peca => {
        peca.draggable = !peca.draggable
    });
}

function criaPeca(cor) {
    let imagem = document.createElement('img');
    imagem.classList.add('peca')
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanhoCelula-4}px`);
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
    imagem.setAttribute('draggable', 'false')
    imagem.addEventListener('dragstart', drag)
    return imagem;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("imgid", ev.target.id);
}

function drop(ev) {
    const imgid= ev.dataTransfer.getData("imgid");
    const imagem = document.querySelector(`#${imgid}`)
    imagem.parentElement.addEventListener('dragover', allowDrop)
    ev.target.appendChild(imagem);
    ev.target.removeEventListener('dragover', allowDrop)
    jogadorDaVez()

}
