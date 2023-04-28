import dotenv from 'dotenv'
dotenv.config()
import pgpkg from 'pg'
const { Client } = pgpkg

async function executeQuery(query, values=null) {
    const client = new Client({ "connectionString": `${process.env.PG_CONNECTION_STRING}` })
    await client.connect()
    const res = await client.query(query, values)
    client.end()
    return res.rows
}

export { executeQuery }
