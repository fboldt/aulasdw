const sectionquote = document.querySelector("#sectionquote")
sectionquote.innerHTML = `
    <p></p>
    <button>Get a quote</button>`
const quote = sectionquote.querySelector('p')
const button = sectionquote.querySelector('button')

button.addEventListener('click', function (e) {
    const token = localStorage.getItem('token')
    fetch('quote', {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            const { quoteText, quoteAuthor } = data
            if (quoteText && quoteAuthor) {
                quote.innerHTML = `${quoteText} <i>${quoteAuthor}</i>`
            }
        })
})
