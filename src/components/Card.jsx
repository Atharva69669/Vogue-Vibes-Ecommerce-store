import React from 'react'
import './styles/Card.css'
import { ShopContext } from './Context'
import { useContext } from 'react'

const Card = ({ props }) => {
    const {addToCart}=useContext(ShopContext);
    return (

        <div className="product-card">
            <div className="product-tumb">
                <img src={props.productUrl} alt=""/>
            </div>
            <div className="product-details">
                <span className="product-catagory">{props.Category}</span>
                <h4><a href="">{props.Brand}</a></h4>
                <p>{props.ProductDesc}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><s>{props.PriceBefore}</s>   ${props.productPrice}</div>
                    <div className="product-links">
                        <a href=""><i className="fa fa-heart"></i></a>
                        <button className='addcart' onClick={()=>{addToCart(props.productId)}}><i className="fa fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;