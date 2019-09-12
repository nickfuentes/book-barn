const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

app.use(cors())
app.use(express.json())

// Displays all the books from the postgres database
app.get('/', (req, res) => {

    models.Book.findAll({
    }).then(books => {
        res.json(books)
    })
})

// Add new books to the postgres database
app.post('/add-books', (req, res) => {

    let title = req.body.title
    let genre = req.body.genre
    let author = req.body.author
    let year = req.body.year
    let imageURL = req.body.imageURL

    let book = models.Book.build({
        title: title,
        genre: genre,
        author: author,
        year: year,
        imageURL: imageURL
    }).save()

    res.json({ Sucess: true })
})

// Delete a book from the postgres database
app.post('/delete-book', (req, res) => {

    let id = req.body.id

    models.Book.destroy({
        where: {
            id: id
        }
    })

    res.json({ Sucess: true })
})

// Get a book from the postgres database
app.get('/update-book', (req, res) => {

    models.Book.findOne({
        where: {
            id: 22
        }
    }).then(book => {
        res.json(book)
    })

})

// Update a book from the postgres database
app.post('/update-book', (req, res) => {

    let title = req.body.title
    let genre = req.body.genre
    let author = req.body.author
    let year = req.body.year
    let imageURL = req.body.imageURL


    models.Book.update({
        title: title,
        genre: genre,
        author: author,
        year: year,
        imageURL: imageURL
    },
        {
            where: {
                id: 22
            }
        })

    res.json({ Sucess: true })
})

app.listen(3001, () => {
    console.log('Server is running...')
})