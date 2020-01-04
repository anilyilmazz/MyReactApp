import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    state = {
        categories: [],
        currentCategory: ""
    };
    changeCategory = (catName) => {
        this.setState({ currentCategory: catName })
    };
    getCategories = () => {
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => this.setState({categories : data}))
    };
    componentDidMount(){
        this.getCategories();
    } 
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem key = {category.id} onClick={() => this.props.changeCategory(category)} >{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>
        )
    }
}
