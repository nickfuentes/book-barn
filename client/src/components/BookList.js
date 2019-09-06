import React, { Component } from 'react';
import '../App.css';

class BookList extends Component {

    constructor() {
        super()
        this.state = {
            books: []
        }

        this.fetchBooks()
    }


    fetchBooks = () => {
        fetch('http://localhost:3001/all-books')
            .then(response => response.json())
            .then(books => {
                console.log(books)
                this.setState({
                    books: books
                })
            })
    }

    handleDelete = () => {

        // value is in the state 
        fetch('http://localhost:3001/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                author: this.state.author,
                year: this.state.year,
                imageURL: this.state.imageURL
            })
        }).then(() => {
            this.props.history.push("/all-books")
        })
    }

    render() {
        let bookItems = this.state.books.map(book => {
            return <div className="book-div">
                <img src={book.imageURL}></img>
                <h2>{book.title}</h2>
                <h4>Genre: {book.genre}</h4>
                <h4>Author: {book.author}</h4>
                <h4>Year: {book.year}</h4>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        })

        return <div>
            <h1>List of Books</h1>
            {bookItems}
        </div>
    }
}

export default BookList