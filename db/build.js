import { executeQuery } from './connect.js'

async function createTableUsers() {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email varchar(64) NOT NULL UNIQUE,
            senha VARCHAR(256) NOT NULL
        )
    `
    const rows = await executeQuery(sql)
    return rows
}

async function createTablePosts() {
    const sql = `
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            author INTEGER REFERENCES users(id),
            text VARCHAR(256),
            created_at TIMESTAMPTZ DEFAULT NOW()
        )
    `
    const rows = await executeQuery(sql)
    return rows
}

async function init() {
    console.log(await executeQuery("SELECT NOW()"))
    console.log(await createTableUsers())
    console.log(await createTablePosts())
}

await init()
