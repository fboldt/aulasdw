function observerCallback(mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type == 'childList') {
            displayHideDeletePostForms()
        }
    }
}

function displayHideDeletePostForms() {
    const deletePostForms = document.querySelectorAll(".deletePostForm")
    deletePostForms.forEach(deletePostForm => {
        displayHideDeletePostForm(deletePostForm)
    })
}

const changeObserver = new MutationObserver(observerCallback)
changeObserver.observe(document.querySelector('#login-space'), { childList: true })
