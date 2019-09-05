import React, { Component } from 'react';
import './App.css';

class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            genre: '',
            author: '',
            year: '',
            imageURL: ''
        }
    }

    handleSave = () => {

        // value is in the state 
        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title
            })
        })

    }


    render() {

        let bookItems = this.props.books.map(book => {
            return <div className="book-div">
                <img src={book.imageURL}></img>
                <h2>{book.title}</h2>
                <h4>Genre: {book.genre}</h4>
                <h4>Author:{book.author}</h4>
                <h4>Year:{book.year}</h4>
            </div>
        })

        return <div>
            <h1>List of Books</h1>
            {bookItems}
        </div>
    }
}

export default AddBook