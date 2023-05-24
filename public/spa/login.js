document.addEventListener("DOMContentLoaded", () => {
    setFormLoginBehavior()
})

function setFormLoginBehavior() {
    const loginSpace = document.querySelector('#login-space')
    loginSpace.innerHTML = `
    <form style="text-align: right;">
        <input type="email" name="email" id="email" placeholder="e-mail" style="margin: 1px;"><br>
        <input type="password" name="senha" id="senha" placeholder="senha" style="margin: 1px;"><br>
        <input type="submit" value="entrar" class="btn btn-primary" style="margin: 1px;">
    </form>`
    const formLogin = loginSpace.querySelector('form')
    formLogin.addEventListener("submit", (ev) => {
        ev.preventDefault()
        console.log("login")
    })
}
