import React, { Component } from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class BookList extends Component {

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

    handleDelete = (e) => {

        // value is in the state 
        fetch('http://localhost:3001/delete-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.dataset.id
            })
        }).then(() => {
            this.props.history.push("/all-books")
        })
    }

    handleChangeToUpdate = () => {

        this.props.history.push("/update-book")
    }

    render() {
        let bookItems = this.state.books.map(book => {
            return <div className="book-div">
                <div>
                    <Card>
                        <CardImg top width="100%" src={book.imageURL} alt="Card image cap" />
                        <CardBody>
                            <CardTitle><h2>{book.title}</h2></CardTitle>
                            <CardSubtitle><h4>Genre: {book.genre}</h4></CardSubtitle>
                            <CardSubtitle><h4>Author: {book.author}</h4></CardSubtitle>
                            <CardSubtitle><h4>Year: {book.year}</h4></CardSubtitle>
                            <Button color="primary" data-id={book.id} onClick={this.handleDelete}>Delete</Button>
                            <Button color="primary" data-id={book.id} onClick={this.handleChangeToUpdate}>Update</Button>
                        </CardBody>
                    </Card>
                </div>
                <img s></img>




                <input type="hidden" name="id" value={book.id} />
                <div>

                </div>
            </div>
        })

        return <div>
            <h1>List of Books</h1>
            {bookItems}
        </div>
    }
}

export default BookList