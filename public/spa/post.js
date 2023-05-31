function displayPosts() {
    fetch("/api")
        .then(data => data.json())
        .then(posts => {
            const postssection = document.querySelector("#postssection")
            postssection.innerHTML = ""
            posts.forEach(post => {
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
                <div class="container">
                    <input type="submit" value="excluir" class="btn btn-danger mb-3">
                </div>
                `
                postelem.appendChild(deleteForm)
                displayHideDeletePostForm(deleteForm)
                postssection.appendChild(postelem)
            });
        })
}

function displayHideDeletePostForm(deleteForm) {
    username = localStorage.getItem("username")
    const email = deleteForm.querySelector('input[name="email"]').value;
    if (username != email) {
        deleteForm.style.display = "none"
    } else {
        deleteForm.style.display = "inline"
    }
}
