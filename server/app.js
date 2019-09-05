const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let books = [
    { title: "Where The Red Ferns Grows", genre: "Children's novel", author: "Wilson Rawls", year: "1961", imageURL: "https://www.gobmg.com/wp-content/uploads/2019/03/Where-the-Red-Fern-Grows-3x4-1920x2560.jpg" },
    { title: "The Giver", genre: "Soft science fiction", author: " Lois Lowry", year: "1933", imageURL: "https://images-na.ssl-images-amazon.com/images/I/51R8AA8QEVL._SX322_BO1,204,203,200_.jpg" },
    { title: "The System: The Glory and Scandal of Big-Time College Football", genre: "Biography", author: "Jeff Benedict & Armen Keteyian", year: "2013", imageURL: "https://images-na.ssl-images-amazon.com/images/I/51FT6C1DuhL._SX328_BO1,204,203,200_.jpg" },
    { title: "Odd Man Out: A Year on the Mound with a Minor League Misfit", genre: "Biography", author: "Matt McCarthy", year: "2009", imageURL: "https://images-na.ssl-images-amazon.com/images/I/51ckIUkppyL._SX329_BO1,204,203,200_.jpg" }
]

// Displays all the books
app.get('/books', (req, res) => {
    res.json(books)
})

// Add new books
app.post('/books', (req, res) => {

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