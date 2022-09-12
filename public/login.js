const section_login = document.querySelector('#section_login')
const formloginhtml = `
<form id="formloginhtml">
    <input type="text" name="username" placeholder="username" size="6">
    <input type="text" name="password" placeholder="password" size="6">
    <button type="submit">login</button>
</form>`
section_login.innerHTML = formloginhtml

const checklogin = async (data) => {
    if (data.username != "") {
        section_login.innerHTML = `${data.username} <a href="logout">logout</a>`
    } else {
        section_login.innerHTML = formloginhtml        
    }
}

const formlogin = section_login.querySelector('#formloginhtml')
formlogin.addEventListener('submit', function (evento) {
    evento.preventDefault()
    const payload = new URLSearchParams(new FormData(this))
    fetch('login', {
        method: 'POST',
        body: payload,
    })
    .then(res => res.json())
    .then(data => checklogin(data))
})
