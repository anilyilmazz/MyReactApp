import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar className="mr-auto" light>
                    <NavbarBrand href="/" >Anil App </NavbarBrand>
                    <Nav navbar>
                    <NavItem >
                            <NavLink href="/">Cart - {this.props.cart.length}</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
