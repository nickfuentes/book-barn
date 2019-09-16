import React, { useState, useEffect } from 'react';
import '../App.css';

function UpdateBook() {

    const [bookTitle, setTitle] = useState("")
    const [bookGenre, setGenre] = useState("")
    const [bookAuthor, setAuthor] = useState("")
    const [bookYear, setYear] = useState("")
    const [bookImageURL, setImageURL] = useState("")


    useEffect(() => {
        console.log('useEffect')
        fetchBook()
    }, []);

    const fetchBook = () => {

        fetch('http://localhost:3001/update-book')
            .then(response => response.json())
            .then(book => {
                setTitle(book.title)
                setGenre(book.genre)
                setAuthor(book.author)
                setYear(book.year)
                setImageURL(book.imageURL)
            })
    }

    const updateBook = () => {

        // value is in the state 
        fetch('http://localhost:3001/update-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: bookTitle,
                genre: bookGenre,
                author: bookAuthor,
                year: bookYear,
                imageURL: bookImageURL
            })
        })
    }


    const titleHandleTextBoxChange = (e) => {

        setTitle(e.target.value)
        console.log(e.target.value)
    }

    const genreHandleTextBoxChange = (e) => {

        setGenre(e.target.value)

    }
    const authorHandleTextBoxChange = (e) => {

        setAuthor(e.target.value)

    }
    const yearHandleTextBoxChange = (value) => {

        setYear(value)

    }
    const ImageURLHandleTextBoxChange = (e) => {

        setImageURL(e.target.value)

    }

    return (
       <div>
    
        <h1>Title</h1>
        <input type="text" value={bookTitle} name="title" onChange={titleHandleTextBoxChange} />
    
        <h1>Genre</h1>
        <input type="text" value={bookGenre} name="genre" onChange={genreHandleTextBoxChange} />
    
        <h1>Author</h1>
        <input type="text" value={bookAuthor} name="author" onChange={authorHandleTextBoxChange} />
    
        <h1>Year</h1>
        <input type="text" value={bookYear} name="year" onChange={(e) => yearHandleTextBoxChange(e.target.value)} />
    
        <h1>Image URL</h1>
        <input type="text" value={bookImageURL} name="imageURL" onChange={ImageURLHandleTextBoxChange} />
            
        <button color="primary" onClick={() => updateBook()}>UpdateBook</button>
        </div>
    );
}

export default UpdateBook