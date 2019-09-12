import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

function NewUpdateBook() {

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
        <Form>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" value={bookTitle} name="title" onChange={titleHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Genre</Label>
                <Input type="text" value={bookGenre} name="genre" onChange={genreHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Author</Label>
                <Input type="text" value={bookAuthor} name="author" onChange={authorHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Year</Label>
                <Input type="text" value={bookYear} name="year" onChange={(e) => yearHandleTextBoxChange(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label>Image URL</Label>
                <Input type="text" value={bookImageURL} name="imageURL" onChange={ImageURLHandleTextBoxChange} />
            </FormGroup>
            <Button color="primary" onClick={() => updateBook()}>UpdateBook</Button>
        </Form>
    );
}

export default NewUpdateBook