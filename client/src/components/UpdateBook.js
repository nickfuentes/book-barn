import React, { Component } from 'react';
import '../App.css';

class UpdateBook extends Component {



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

            <button onClick={this.handleSave}>Update Book</button>
        </div>
    }
}

export default UpdateBook