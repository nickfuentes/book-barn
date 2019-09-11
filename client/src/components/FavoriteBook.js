import React, { Component } from 'react';
import '../App.css';
import { Button } from 'reactstrap'

class FavoriteBook extends Component {

    constructor() {
        super()
        this.state = {
            books: []
        }

        this.fetchBooks()
    }

    fetchBooks = () => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(books => {

                this.setState({
                    books: books
                })
            })
    }

    render() {

        return <div>
            <h1>Your Favorite Books Here</h1>
            {/* {bookItems} */}
        </div>
    }
}

export default FavoriteBook