import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    Badge
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(x => (
                        <DropdownItem key={x.product.id} >
                            <Badge color="danger" size="sm" onClick = {() => this.props.removeFromCart(x.product)}>Delete</Badge> {x.product.productName} - {x.quantity}
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmptyCart() {
        return (
            <div>
                <NavItem>
                    Empty Card
                </NavItem>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}
