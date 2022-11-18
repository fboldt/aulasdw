const sectionposts = document.querySelector('#sectionposts')

const formatPost = (post) => {
    const fpost = document.createElement('p')
    fpost.innerHTML = `
        <b>${post.author}</b><br>
        <i>(${post.createdAt})</i><br>
        ${post.textContent}`
    return fpost
}

const displayPosts = (posts) => {
    console.log(posts)
    const divPosts = document.createElement('div')
    sectionposts.appendChild(divPosts)
    for (const post of posts) {
        divPosts.appendChild(formatPost(post))
    }
}

const fetchPosts = () => {
    fetch('post')
        .then(res => res.json())
        .then(data => displayPosts(data.posts))
}

const displayNewPost = (data) => {
    const {post} = data
    if (post) {
        const divPosts = sectionposts.querySelector('div')
        divPosts.prepend(formatPost(post))
    }
}

const sendPost = (payload, token) => {
    fetch('post', {
        method: 'POST',
        body: payload,
        headers: { authorization: `Bearer ${token}` },
    })
        .then(res => res.json())
        .then(data => displayNewPost(data))
}

const displayCreatePost = () => {
    const token = localStorage.getItem('token')
    if (token) {
        const insertPost = document.createElement('form')
        sectionposts.prepend(insertPost)
        insertPost.innerHTML = `
            <textarea rows="6" cols="32" name="textContent"></textarea>
            <br> <input type="submit" value="send">`
        insertPost.addEventListener('submit', function (e) {
            e.preventDefault()
            const payload = new URLSearchParams(new FormData(this))
            sendPost(payload, token)
        })
    }
}

const observerPostsCallback = function (mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            displayCreatePost()
        }
    }
}

const changePostObserver = new MutationObserver(observerPostsCallback)
changePostObserver.observe(sectionlogin, { childList: true })

fetchPosts()
