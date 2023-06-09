require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.SERVER_PORT || 5000

app.use(bodyParser.urlencoded({ extended: true })) // permite aceitar requisições do tipo x-www-form-urlencoded
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello, world')
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port} `)
})

