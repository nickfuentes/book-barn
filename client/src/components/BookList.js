import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../App.css'

function BookList() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    });

    const fetchBooks = () => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(books => {
                setBooks(books)
            })
    }

    const handleDelete = (e) => {

        // value is in the state 
        fetch('http://localhost:3001/delete-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.dataset.id
            })
        })
    }

    const handleChangeToUpdate = () => {
        console.log("Should take you to update page.")
    }

    return <div>{books.map(book => {
        return <div>
            <Card>
                <CardImg src={book.imageURL} alt="Card image cap" />
                <CardBody>
                    <CardTitle><h2>{book.title}</h2></CardTitle>
                    <CardSubtitle><h4>Genre: {book.genre}</h4></CardSubtitle>
                    <CardSubtitle><h4>Author: {book.author}</h4></CardSubtitle>
                    <CardSubtitle><h4>Year: {book.year}</h4></CardSubtitle>
                    <Button color="primary" data-id={book.id} onClick={handleDelete}>Delete</Button>
                    <Button color="primary" data-id={book.id} onClick={handleChangeToUpdate}>Update</Button>
                    <input type="hidden" name="id" value={book.id} />
                </CardBody>
            </Card>
        </div>
    })}</div>
}


export default BookList