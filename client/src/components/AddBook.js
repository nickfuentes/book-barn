import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

function AddBook() {

    const [bookTitle, setTitle] = useState("")
    const [bookGenre, setGenre] = useState("")
    const [bookAuthor, setAuthor] = useState("")
    const [bookYear, setYear] = useState("")
    const [bookImageURL, setImageURL] = useState("")


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
    const yearHandleTextBoxChange = (e) => {

        setYear(e.target.value)

    }
    const ImageURLHandleTextBoxChange = (e) => {

        setImageURL(e.target.value)

    }

    const handleSave = () => {

        // value is in the state 
        fetch('http://localhost:3001/add-books', {
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
            }).then(() => {
                this.props.history.push('/');
            })
        })
    }


    return (
        <Form>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" name="title" onChange={titleHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Genre</Label>
                <Input type="text" name="genre" onChange={genreHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Author</Label>
                <Input type="text" name="author" onChange={authorHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Year</Label>
                <Input type="text" name="year" onChange={yearHandleTextBoxChange} />
            </FormGroup>
            <FormGroup>
                <Label>Image URL</Label>
                <Input type="text" name="imageURL" onChange={ImageURLHandleTextBoxChange} />
            </FormGroup>
            <Button color="primary" onClick={handleSave}>Add Book</Button>
        </Form>
    );
}

export default AddBook