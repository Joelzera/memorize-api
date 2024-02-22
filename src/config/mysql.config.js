const mysql = require('mysql2')


const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'memorize',
    port: 3306
})

const poolMulti = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'memorize',
    port: 3306,
    multipleStatements: true
})

exports.execute = (query, params=[], multi=false) => {
    return new Promise((resolve, reject) => {
        if (multi) {
            poolMulti.query(query, params, (error, result, fields) => {
                if (error) { reject(error) } else { resolve(result) }
            })
        } else {
            pool.query(query, params, (error, result, fields) => {
                if (error) { reject(error) } else { resolve(result) }
            })
        }
    })
}

exports.poolDeafult = pool
exports.multiDefault = poolMulti
