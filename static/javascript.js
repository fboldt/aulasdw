document.addEventListener("DOMContentLoaded", mudaCorTitulo)
document.addEventListener("DOMContentLoaded", exclamacaoTitulo)
document.addEventListener("DOMContentLoaded", adicionaSumario)

function adicionaSumario() {
    const sumario = document.createElement('ol')
    document.body.prepend(sumario)
    const secoes = document.querySelectorAll('h2')
    for (let i = 0; i < secoes.length; i++) {
        const item = document.createElement('li')
        item.innerHTML = `<a href="#sec${i+1}">${secoes[i].textContent}</a>`
        sumario.appendChild(item)
        secoes[i].textContent = `${i+1}. ${secoes[i].textContent}`
        secoes[i].id = `sec${i+1}`
        const voltar = document.createElement('a')
        voltar.setAttribute('href', '#')
        voltar.textContent = 'voltar'
        secoes[i].after(voltar)
    }
}

function mudaCorTitulo() {
    const titulo = document.querySelector('h1')
    titulo.style.color = 'blue'
}

function exclamacaoTitulo() {
    const titulo = document.querySelector('h1')
    titulo.textContent += "!"
}
