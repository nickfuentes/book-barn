import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import App from './App'

export class Menu extends Component {
    render() {
        return <div>
            <Nav>
                <NavItem>
                    <h3>Book Barn</h3>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/add-book">Add Books</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/favorite-book">Favorites</NavLink>
                </NavItem>
            </Nav>
        </div>
    }
}

export class Footer extends Component {
    render() {
        return <div>Footer</div>
    }
}

export class BaseLayout extends Component {

    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }

}