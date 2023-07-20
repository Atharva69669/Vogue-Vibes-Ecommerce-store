import React from 'react'
import './styles/Product.css'

const Product = (props) => {
    const { productName, id, price, productImage } = props.data;
    return (
        <div className="container">
            <div className="card">
                <div className="product-image">
                    <img src={productImage} alt="iphone" />
                </div>
                <div className="product-info">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ea? Lorem ipsum dolor sit.</p>
                    <h4>Price: {price}</h4>
                </div>
                <div className="btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product