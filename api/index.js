const express = require('express')
const cors = require('cors')
const router = require('./router')

const PORT = 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(router)

app.listen(PORT, () => console.log(`express server is running on http://localhost:${PORT}`))
