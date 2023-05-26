document.addEventListener("DOMContentLoaded", () => {
    checkLogin()
})

function checkLogin(){
    username = localStorage.getItem("username")
    if (username) {
        displayLinkLogout(username)
    } else {
        displayFormLogin()
    }
}

function displayFormLogin() {
    const loginSpace = document.querySelector('#login-space')
    loginSpace.innerHTML = `
    <form style="text-align: right;">
        <input type="email" name="email" id="email" placeholder="e-mail" style="margin: 1px;"><br>
        <input type="password" name="senha" id="senha" placeholder="senha" style="margin: 1px;"><br>
        <input type="submit" value="entrar" class="btn btn-primary" style="margin: 1px;">
    </form>`
    const formLogin = loginSpace.querySelector('form')
    formLogin.addEventListener("submit", function (ev) {
        ev.preventDefault()
        // console.log("login")
        const payload = new URLSearchParams(new FormData(this))
        sendLogin(payload)
    })
}

function sendLogin(payload) {
    fetch("/api/login", {
        method: "POST",
        body: payload,
    })
        .then(res => res.json())
        .then(data => {
            const { success, email, token } = data
            if (success) {
                localStorage.setItem("username", email)
                localStorage.setItem("token", token)
                displayLinkLogout(email)
            }
        })
}

function displayLinkLogout(email) {
    const loginSpace = document.querySelector('#login-space')
    loginSpace.innerHTML = `
    <span id="username">${email}</span>
    <a href="">logout</a>`
    const linkLogout = loginSpace.querySelector("a")
    linkLogout.addEventListener("click", function (ev) {
        ev.preventDefault()
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        displayFormLogin()
    })
}
