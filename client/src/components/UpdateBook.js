import React, { Component } from 'react';
import '../App.css';

class UpdateBook extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            genre: '',
            author: '',
            year: '',
            imageURL: ''
        }

        this.fetchBook()
    }

    fetchBook = () => {

        fetch('http://localhost:3001/update-book')
            .then(response => response.json())
            .then(book => {

                this.setState({
                    title: book.title,
                    genre: book.genre,
                    author: book.author,
                    year: book.year,
                    imageURL: book.imageURL
                })
            })
    }


    updateBook = () => {

        // value is in the state 
        fetch('http://localhost:3001/update-book', {
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

    handleTextBoxChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <div className="add-book-form">
            <h3>Title:</h3>
            <input type="text" value={this.state.title} name="title" onChange={this.handleTextBoxChange} />

            <h3>Genre:</h3>
            <input type="text" value={this.state.genre} name="genre" onChange={this.handleTextBoxChange}></input>

            <h3>Author:</h3>
            <input type="text" value={this.state.author} name="author" onChange={this.handleTextBoxChange}></input>

            <h3>Year:</h3>
            <input type="text" value={this.state.year} name="year" onChange={this.handleTextBoxChange}></input>

            <h3>Image URL:</h3>
            <input type="text" value={this.state.imageURL} name="imageURL" onChange={this.handleTextBoxChange}></input>

            <button onClick={this.updateBook}>Update Book</button>
        </div>
    }
}

export default UpdateBook