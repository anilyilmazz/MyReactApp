import React, { Component } from 'react'
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }
  componentDidMount() {
    this.getProducts();
  }
  addtoCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(x => x.product.id === product.id);
    addedItem ? addedItem.quantity += 1 : newCart.push({ product: product, quantity: 1 });
    alertify.success(product.productName + ' Added ');
    this.setState({ cart: newCart });
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(x => x.product.id !== product.id);
    this.setState({ cart: newCart });
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
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} className="Navi"></Navi>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                info={categoryModel}
                changeCategory={this.changeCategory} >
              </CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props =>
                  <ProductList 
                    {...props}
                    info={productModel}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    addtoCart={this.addtoCart}
                  ></ProductList>
                } />
                <Route exact path="/Cart" component={CartList} />
                <Route component={NotFound} />
              </Switch>

            </Col>
          </Row>
        </Container>
      </div>);
  }
}


