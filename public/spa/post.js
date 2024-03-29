document.addEventListener("DOMContentLoaded", insertPostFormBehavior)

function insertPostFormBehavior() {
    const insertSection = document.querySelector("#insertsection")
    const insertPostForm = insertSection.querySelector('form')
    insertPostForm.addEventListener('submit', function (ev) {
        ev.preventDefault()
        const token = localStorage.getItem("token")
        const payload = new URLSearchParams(new FormData(this))
        fetch("/api/post", {
            method: "POST",
            headers: { authorization: `Bearer ${token}` },
            body: payload,
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    displayPost(data)
                    insertPostForm.querySelector("textarea").value = ""
                }
                if (data.error == "Authetication Failure") {
                    logout()
                }
            })
    })
}

function displayPosts() {
    fetch("/api")
        .then(data => data.json())
        .then(posts => {
            const postssection = document.querySelector("#postssection")
            postssection.innerHTML = ""
            posts.reverse().forEach(post => {
                displayPost(post)
            });
        })
}

setInterval(() => {
    displayPosts()
}, 1000 * 60);

function displayPost(post) {
    const postssection = document.querySelector("#postssection")
    const postelem = document.createElement("div")
    postelem.classList.add("card")
    postelem.classList.add("mb-3")
    postelem.classList.add("rounded")
    postelem.innerHTML = `<div class="card-body">
                <span style="font-size: small">${post.email}</span>
                <span style="font-size: x-small">(${post.created_at})</span>
                <p class="card-text">${post.text}</p>
                </div>`
    const deleteForm = document.createElement("form")
    deleteForm.classList.add("deletePostForm")
    deleteForm.innerHTML = `
                <input type="hidden" name="email" value="${post.email}">
                <input type="hidden" name="postid" value="${post.id}">
                <div class="container">
                    <input type="submit" value="excluir" class="btn btn-danger mb-3">
                </div>`
    deleteForm.addEventListener("submit", sendDeletePost)
    postelem.appendChild(deleteForm)
    displayHideDeletePostForm(deleteForm)
    postssection.prepend(postelem)
}

function sendDeletePost(ev) {
    ev.preventDefault()
    const postId = ev.target.querySelector('input[name="postid"]').value
    const token = localStorage.getItem("token")
    fetch(`/api/post?id=${postId}`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` }
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                ev.target.parentElement.remove()
            } 
            if (data.error == "Authetication Failure") {
                logout()
            }
        })
}

function displayHideDeletePostForm(deleteForm) {
    const username = localStorage.getItem("username")
    const email = deleteForm.querySelector('input[name="email"]').value
    if (username != email) {
        deleteForm.style.display = "none"
    } else {
        deleteForm.style.display = "inline"
    }
}
