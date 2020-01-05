import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {

    removeFromCart = (product) => {
        this.props.removeFromCart(product)
    }
    render() {
        return (
            <div>
                <Navbar className="mr-auto" light>
                    <NavbarBrand href="/" >Anil App </NavbarBrand>
                    <Nav navbar>
                    <CartSummary  removeFromCart = {this.removeFromCart} cart = {this.props.cart}/>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
