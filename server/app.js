const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let books = [
    { title: "Book1" },
    { title: "Book2" },
    { title: "Book3" }
]

app.get('/books', (req, res) => {
    res.send("Hello World!")
})

app.listen(3001, () => {
    console.log('Server is running...')
})