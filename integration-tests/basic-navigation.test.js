import { expect, test, beforeAll, afterAll } from '@jest/globals'

import portfinder from 'portfinder'
import puppetter from 'puppeteer'
import app from '../app.js'

let server = null
let port = null

beforeAll(async () => {
    port = await portfinder.getPortPromise()
    server = app.listen(port)
})

afterAll(() => {
    server.close()
})

test("link da página inicial para a página sobre", async () => {
    const browser = await puppetter.launch()
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}`)
    await page.click('[href="/sobre"]')
    expect(page.url()).toBe(`http://localhost:${port}/sobre`)
    await browser.close()
})
