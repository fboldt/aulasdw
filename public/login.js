const sectionlogin = document.querySelector('#sectionlogin')

const checklogin = async () => {
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    if (!username) {
        displayFormLogin()
    } else {
        displayLinkLogout(username)
    }
}

const displayFormLogin = () => {
    sectionlogin.innerHTML = `
        <form>
            <input type="text" name="username" placeholder="username" size="6">
            <input type="password" name="password" placeholder="password" size="6">
            <button type="submit">login</button>
        </form>`
    const formlogin = sectionlogin.querySelector('form')
    formlogin.addEventListener('submit', function (evento) {
        evento.preventDefault()
        const payload = new URLSearchParams(new FormData(this))
        sendLogin(payload)
    })
}

const sendLogin = (payload) => {
    fetch('login', {
        method: 'POST',
        body: payload,
    })
        .then(res => res.json())
        .then(data => {
            const { username, token } = data
            if (username && token) {
                localStorage.setItem('username', username)
                localStorage.setItem('token', token)
            }
            checklogin()
        })
}

const displayLinkLogout = (username) => {
    sectionlogin.innerHTML = `${username} <a href="#">logout</a>`
    const linklogout = sectionlogin.querySelector('a')
    linklogout.addEventListener('click', function (evento) {
        evento.preventDefault()
        sendLogout()
    })
}

const sendLogout = () => {
    fetch('login', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            const { username, token } = data
            if (!username || !token) {
                localStorage.removeItem('username')
                localStorage.removeItem('token')
            }
            checklogin()
        })
}

checklogin()
