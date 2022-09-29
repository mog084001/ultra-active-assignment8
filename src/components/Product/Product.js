import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, nameTitle, timeRequired } = props.club;
    return (
        <div className='product'>
            <img src={img} alt="" />

        </div>
    );
};

export default Product;