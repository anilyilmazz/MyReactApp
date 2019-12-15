import React from 'react';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row ,Col} from 'reactstrap'

function App() {
  let categoryModel ={title :"CategoryTitle" } ;
  let productModel ={title : "ProductTitle"}   ;
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi className="Navi"></Navi>
        </Row>
        <Row>
          <Col xs = "3">
          <CategoryList info = {categoryModel}></CategoryList>
          </Col>
         <Col xs = "9">
         <ProductList info = {productModel}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
