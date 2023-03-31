import handlers from "../basic.js"
import { expect, jest, test } from "@jest/globals"

test('renderizador da página inicial', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.home(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('renderizador da página sobre', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.sobre(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('sobre')
})

test('renderizador de página não encontrada', () => {
    const req = {}
    const res = { render: jest.fn() }
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('renderizador erro no servidor', () => {
    const err = new Error('algum erro')
    const req = {}
    const res = { render: jest.fn() }
    const next = jest.fn()
    handlers.serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})

