import React, { useState } from "react"
import "../App.css"

function AddBook(props) {
  const [bookTitle, setTitle] = useState("")
  const [bookGenre, setGenre] = useState("")
  const [bookAuthor, setAuthor] = useState("")
  const [bookYear, setYear] = useState("")
  const [bookImageURL, setImageURL] = useState("")

  const titleHandleTextBoxChange = e => {
    setTitle(e.target.value)
  }

  const genreHandleTextBoxChange = e => {
    setGenre(e.target.value)
  }
  const authorHandleTextBoxChange = e => {
    setAuthor(e.target.value)
  }
  const yearHandleTextBoxChange = e => {
    setYear(e.target.value)
  }
  const ImageURLHandleTextBoxChange = e => {
    setImageURL(e.target.value)
  }

  const handleSave = () => {
    // value is in the state
    fetch("http://localhost:3001/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: bookTitle,
        genre: bookGenre,
        author: bookAuthor,
        year: bookYear,
        imageURL: bookImageURL
      })
    }).then(() => {
      props.history.push("/")
      console.log(props)
    })
  }

  return (
    <div>
      <h1>Title</h1>
      <input type="text" name="title" onChange={titleHandleTextBoxChange} />

      <h1>Genre</h1>
      <input type="text" name="genre" onChange={genreHandleTextBoxChange} />

      <h1>Author</h1>
      <input type="text" name="author" onChange={authorHandleTextBoxChange} />

      <h1>Year</h1>
      <input type="text" name="year" onChange={yearHandleTextBoxChange} />

      <h1>Image URL</h1>
      <input
        type="text"
        name="imageURL"
        onChange={ImageURLHandleTextBoxChange}
      />

      <button color="primary" onClick={handleSave}>
        Add Book
      </button>
    </div>
  )
}

export default AddBook
