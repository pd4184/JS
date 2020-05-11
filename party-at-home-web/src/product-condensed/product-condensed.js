import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service.js';

let ds = new DataService();

class ProductCondensed extends Component {
    constructor(props){
        super(props);
        
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    removeProduct = () =>{
        ds.removeWishlistItem(this.props.product);
    }
    render() {
        return(
            <li classname="list-group-item ">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;