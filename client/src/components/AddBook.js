import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

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
        return (
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" name="title" onChange={this.handleTextBoxChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Genre</Label>
                    <Input type="text" name="genre" onChange={this.handleTextBoxChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Author</Label>
                    <Input type="text" name="author" onChange={this.handleTextBoxChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Year</Label>
                    <Input type="text" name="year" onChange={this.handleTextBoxChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Image URL</Label>
                    <Input type="text" name="imageURL" onChange={this.handleTextBoxChange} />
                </FormGroup>
                <Button color="primary" onClick={this.handleSave}>Add Book</Button>
            </Form>
        );
    }
}

export default AddBook