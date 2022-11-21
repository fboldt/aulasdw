const observerCallback = function (mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            fetchQuote()
            displayCreatePost()
        }
    }
}

const changeObserver = new MutationObserver(observerCallback)
changeObserver.observe(sectionlogin, { childList: true })
