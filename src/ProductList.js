import React, { Component } from 'react'
import { Table } from 'reactstrap'
export default class ProductList extends Component {
    getProduct = () => {
        fetch('http://localhost:3000/products?categoryid=2')
            .then(res => res.json())
            .then(data => this.setState({ products: data }))
    }
    componentDidMount() {
        this.getProduct();
    }
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
        <td>{this.state.products[0].productName}</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
