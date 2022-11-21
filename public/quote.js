const sectionquote = document.querySelector("#sectionquote")
sectionquote.innerHTML = `<p></p>`
const quote = sectionquote.querySelector('p')

const fetchQuote = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        quote.innerHTML = ""
    } else {
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
    }
}

