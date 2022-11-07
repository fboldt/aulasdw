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

const observerCallback = function (mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            fetchQuote()
        }
    }
}

const changeObserver = new MutationObserver(observerCallback)
changeObserver.observe(sectionlogin, { childList: true })
