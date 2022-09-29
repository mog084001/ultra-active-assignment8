import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, nameTitle, timeRequried } = props.club;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{nameTitle}</p>
                <p>Time requried: {timeRequried}</p>
            </div>
            <button onClick={() => props.handleToAddCart(props.club)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;