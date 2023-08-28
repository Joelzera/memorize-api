const mysql = require('../config/mysql.config')


exports.getUsers = async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE id = ?;`
        const result = await mysql.execute(query, [req.params.id])
        res.send(result)
    } catch(error) {
        res.send(error)
    }   
}

exports.login = async (req, res) => {
    try {
        const query = `SELECT * FROM users WHERE email = ? && password = ?;`
        const result = await mysql.execute(query, [req.body.email, req.body.password])
        console.log(result)
        if (result[0].password === req.body.password) {
            res.status(200).json('autorizado')
        } else {
            res.status(401).json('nao autorizado')
        }
    } catch (error) {
        res.send(error)
    }
}

exports.create = async (req, res) => {
    try {
        const query = `
            INSERT INTO users
                        (active, email, name, password, last_name, picture, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?);`
        const result = await mysql.execute(query, [
                true,
                req.body.email,    
                req.body.name,
                req.body.password,  
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