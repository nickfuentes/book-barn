import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap'

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
        fetch('http://localhost:3001/add-books', {
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
            this.props.history.push("/")
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
            <input type="text" name="title" onChange={this.handleTextBoxChange} />

            <h3>Genre:</h3>
            <input type="text" name="genre" onChange={this.handleTextBoxChange}></input>

            <h3>Author:</h3>
            <input type="text" name="author" onChange={this.handleTextBoxChange}></input>

            <h3>Year:</h3>
            <input type="text" name="year" onChange={this.handleTextBoxChange}></input>

            <h3>Image URL:</h3>
            <input type="text" name="imageURL" onChange={this.handleTextBoxChange}></input>

            <Button color="primary" onClick={this.handleSave}>Add Book</Button>
        </div>
    }
}

export default AddBook