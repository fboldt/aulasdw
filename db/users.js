import { readFileSync } from "fs"

function getUsers(){
    return JSON.parse(readFileSync("./db/users.json"))
}

function getUser(email) {
    const users = getUsers()
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            return users[i]
        }
    }
}

export { getUsers, getUser }