function observerCallback(mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type == 'childList') {
            displayHideInsertPostForm()
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

function displayHideInsertPostForm() {
    const insertSection = document.querySelector("#insertsection")
    const username = localStorage.getItem("username")
    if (username) {
        const insertPostForm = insertSection.querySelector('form')
        const emailField = document.createElement('input')
        emailField.setAttribute('type', 'hidden')
        emailField.setAttribute('name', 'email')
        emailField.value = username
        insertPostForm.appendChild(emailField)
        insertSection.style.display = "block"
    } else {
        insertSection.style.display = "none"
    }
}

const changeObserver = new MutationObserver(observerCallback)
changeObserver.observe(document.querySelector('#login-space'), { childList: true })
