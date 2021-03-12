const express = require('express')
const app = express()
const port = 8080

app.use(express.static('../client/'))
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))