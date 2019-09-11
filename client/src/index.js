import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BaseLayout } from './components/BaseLayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import UpdateBook from './components/UpdateBook'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

ReactDOM.render(
    <BrowserRouter>
        <Container>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact component={BookList} />
                    <Route path="/add-book" component={AddBook} />
                    <Route path="/update-book" component={UpdateBook} />
                </Switch>
            </BaseLayout>
        </Container>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
