function displayPosts() {
    fetch("/api")
        .then(data => data.json())
        .then(posts => {
            const postssection = document.querySelector("#postssection")
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
                postssection.appendChild(postelem)
            });
        })
}