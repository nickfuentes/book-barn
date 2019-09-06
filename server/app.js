const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

app.use(cors())
app.use(express.json())

// Displays all the books from the postgres database
app.get('/all-books', (req, res) => {

    models.Book.findAll({
    }).then(books => {
        res.json(books)
    })
})

// Add new books
app.post('/add-books', (req, res) => {

    let title = req.body.title
    let genre = req.body.genre
    let author = req.body.author
    let year = req.body.year
    let imageURL = req.body.imageURL

    books.push({
        title: title,
        genre: genre,
        author: author,
        year: year,
        imageURL: imageURL
    })

    res.json({ success: true })

})

app.listen(3001, () => {
    console.log('Server is running...')
})