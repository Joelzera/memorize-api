require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('./config/db.config')

const app = express()
const port = process.env.SERVER_PORT || 5000

app.use(bodyParser.urlencoded({ extended: true })) // permite aceitar requisições do tipo x-www-form-urlencoded
app.use(bodyParser.json())



app.post('/user', async (req, res) => {
    try {
        const query = `
            INSERT INTO users
                        (active, email, phone, name, last_name, picture, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?);`
        const resultado = await mysql.execute(
            query,
            [
                true,
                req.body.email,  
                req.body.phone,  
                req.body.name,  
                req.body.last_name,  
                req.body.picture,  
                new Date().toISOString().slice(0, 19).replace('T', ' ')
            ]
        )
        res.send(resultado)
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port} `)
})

