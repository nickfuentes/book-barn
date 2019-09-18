import React, { useState, useEffect } from "react"
import "../App.css"
import { Nav } from "react-bootstrap"

function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  })

  const fetchBooks = () => {
    fetch("http://localhost:3001/")
      .then(response => response.json())
      .then(books => {
        setBooks(books)
      })
  }

  const handleDelete = e => {
    // value is in the state
    fetch("http://localhost:3001/delete-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: e.target.dataset.id
      })
    })
  }

  // const handleChangeToUpdate = () => {
  //     <Link to="/update-book">About</Link>
  // }

  return (
    <div>
      {books.map(book => {
        return (
          <div>
            <img src={book.imageURL} alt="Book Title" />

            <h2>{book.title}</h2>
            <h4>Genre: {book.genre}</h4>
            <h4>Author: {book.author}</h4>
            <h4>Year: {book.year}</h4>
            <button color="primary" data-id={book.id} onClick={handleDelete}>
              Delete
            </button>
            <Nav.Link href="/update-book">
              <button color="primary" data-id={book.id}>
                Update
              </button>
            </Nav.Link>
            <input type="hidden" name="id" value={book.id} />
          </div>
        )
      })}
    </div>
  )
}

export default BookList
