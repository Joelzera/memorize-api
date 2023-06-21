require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('./config/db.config')

const app = express()
const port = process.env.SERVER_PORT || 5000

app.use(bodyParser.urlencoded({ extended: true })) // permite aceitar requisições do tipo x-www-form-urlencoded
app.use(bodyParser.json())


app.get('/user/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE id = ?;`
        const result = await mysql.execute(query, [req.params.id])
        res.send(result)
    } catch(error) {
        res.send(error)
    }   
})


app.post('/user', async (req, res) => {
    try {
        const query = `
            INSERT INTO users
                        (active, email, phone, name, last_name, picture, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?);`
        const result = await mysql.execute(query, [
                true,
                req.body.email,  
                req.body.phone,  
                req.body.name,  
                req.body.last_name,  
                req.body.picture,  
                new Date().toISOString().slice(0, 19).replace('T', ' ')
            ]
        )
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

app.put('/user/atualizar/:id' , async (req, res) =>{
    try{
        const query = `
                       UPDATE users
                          SET active = ?,
                              email = ?,
                              phone = ?,
                              name = ?,
                              last_name = ?,
                              picture = ?,
                              updated_at = ?
                        WHERE id = ?;`
        const result = await mysql.execute(query, [
               req.body.active,
               req.body.email,
               req.body.phone,
               req.body.name,
               req.body.last_name,
               req.body.picture,
               new Date().toISOString().slice(0, 19).replace('T', ' '),
               req.params.id
            ]
        )
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port} `)
})

