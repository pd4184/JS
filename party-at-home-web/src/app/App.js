import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service.js';
import Product from '../product/product.js';
import Wishlist from '../wishlist/wishlist';

//var express = require('express');
//var cors = require('cors');
//var app = express();
//
//app.use(cors());

const http = new HttpService();

//function App() {
class App extends Component{
    
    constructor(props){
        super(props);
       // http.getProducts();
        this.state = {products:[]};
        this.loadData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);
        this.loadData();
    }
    
    loadData = () =>{
        var self = this;
        http.getProducts().then(data => {
            //console.log(products);
            self.setState({products:data})
        },err =>{
            
        });
    }
    
    productList = () =>{
        const list = this.state.products.map((product) =>
        <div className = "col-sm-4" key={product._id}>
            <Product product = {product} />
        </div>
        );    
        return (list);
    }
    
    render(){
    
  return (
    <div className="App">
      <header className="App-header">
          <h2>Welcome to Party at Home</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className = "container-fluid App-main">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                {this.productList()}
                    </div>    
                </div>
            <div className="col-sm-4">
                <Wishlist />
                </div>    
          </div>
      </div>
    </div>
  );
    }
}
//}

export default App;
