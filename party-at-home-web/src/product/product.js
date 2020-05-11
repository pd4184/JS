import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service.js';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service.js'

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {onWishlist: ds.itemOnWishList()};
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishlistChanged = this.onWishlistChanged.bind(this);
    }
    
     componentDidMount (){
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged );
    }
    
    componentWillUnmount (){
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);   
    }
    onWishlistChanged(newWishlist){
        this.setState({onWishlist: ds.itemOnWishList(this.props.product)});
    }
    
    onButtonClicked = () =>{
        if(this.state.onWishlist){
            ds.removeWishlistItem(this.props.product);
        }else{
        ds.addWishlistItem(this.props.product);
        }
    }
    render() {
        var btnClass;
        
        if(this.state.onWishlist){
            btnClass = "btn btn-danger";
        }
        else{
            btnClass = "btn btn-primary";
        }
        return(
            <div className="card">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product" ></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">price:${this.props.product.price}</p>
                    <a href="#" onClick={() => this.onButtonClicked()} className={btnClass}>{this.state.onWishlist ?
                        "Remove from wishlist":"Add to wishlist"}</a>
                </div>
            </div>
        );
    }
}

export default Product;