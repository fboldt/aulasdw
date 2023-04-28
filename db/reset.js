import { executeQuery  } from "./connect.js";

async function dropTableUsers() {
    const query = `DROP TABLE users`
    const rows = await executeQuery(query)
    return rows
}

console.log(await dropTableUsers())
