import React, { Component } from 'react';
import './App.css';
import BookList from './BookList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(books => {
        this.setState({
          books: books
        })
      })
  }

  render() {
    return <div>
      <BookList books={this.state.books} />
    </div>
  }
}

export default App;
