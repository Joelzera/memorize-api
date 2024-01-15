const mysql = require('../config/mysql.config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getUsers = async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE id = ?;`
        const result = await mysql.execute(query, [req.params.id])
        console.log(result)
        res.send(result)
    } catch(error) {
        res.send(error)
    }   
}

exports.login = async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE email = ?;`
        const result = await mysql.execute(query, [req.body.email])

        if (bcrypt.compareSync(req.body.password, result[0].password)) {
            const token = jwt.sign({
                 id: result.id,
                email: req.body.email
            }, process.env.SECRET, {expiresIn: '8d'})
            res.status(200).json({ msg:"autorizado", id: result[0].id, token })
        } else {
            res.status(400).json({ msg:"nao autorizado" })
        }
    } catch (error) {
        res.send(error)
    }
}

exports.create = async (req, res) => {
    try {
        const saltRounds = 10
        const hash = bcrypt.hashSync(req.body.password, saltRounds)
        const query = `
            INSERT INTO users
                        (active, email, name, password, last_name, picture, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?);`
        const result = await mysql.execute(query, [
                true,
                req.body.email,    
                req.body.name,
                hash,  
                req.body.last_name,  
                req.body.picture,  
                new Date().toISOString().slice(0, 19).replace('T', ' ')
            ]
        )
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

exports.update = async (req, res) =>{
    try{
        const query = `
                       UPDATE users
                          SET active = ?,
                              email = ?,
                              name = ?,
                              last_name = ?,
                              picture = ?,
                              updated_at = ?
                        WHERE id = ?;`
        const result = await mysql.execute(query, [
               req.body.active,
               req.body.email,
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
}

exports.deleteById = async (req, res) =>{
    try{
        const query = `DELETE FROM users WHERE id = ?;`
        const result = await mysql.execute(query, [req.params.id])
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}