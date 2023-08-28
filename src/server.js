require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const folderRoutes = require('./routes/folder')
const annotationRoutes = require('./routes/annotation')
const cors = require('cors')
const app = express()
const port = process.env.SERVER_PORT || 5000


app.use(bodyParser.urlencoded({ extended: true })) // permite aceitar requisições do tipo x-www-form-urlencoded
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))
app.use('/', userRoutes)
app.use('/', folderRoutes)
app.use('/', annotationRoutes)


app.listen(port, () => {
    console.log(`servidor rodando na porta ${port} `)
})

