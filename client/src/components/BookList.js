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

    render() {
        let bookItems = this.state.books.map(book => {
            return <div className="book-div">
                <img src={book.imageURL}></img>
                <h2>{book.title}</h2>
                <h4>Genre: {book.genre}</h4>
                <h4>Author: {book.author}</h4>
                <h4>Year: {book.year}</h4>
            </div>
        })

        return <div>
            <h1>List of Books</h1>
            {bookItems}
        </div>
    }
}

export default BookList