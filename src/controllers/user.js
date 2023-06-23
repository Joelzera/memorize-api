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

exports.create = async (req, res) => {
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
}

exports.update = async (req, res) =>{
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