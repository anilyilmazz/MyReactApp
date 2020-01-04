import React, { Component } from 'react'
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'

export default class App extends Component {
  state = { currentCategory: "", products: [] }
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }
  getProducts = (categoryId) => {
    let url = 'http://localhost:3000/products';
    if (categoryId) {
      url += '?categoryId=' + categoryId
    }
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  };

  render() {
    let categoryModel = { title: "CategoryTitle" };
    let productModel = { title: "ProductTitle" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi className="Navi"></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                info={categoryModel}
                changeCategory={this.changeCategory} >
              </CategoryList>
            </Col>
            <Col xs="9">
              <ProductList info={productModel}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>);
  }
}


