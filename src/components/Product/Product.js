import { faSprout } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <p className='btn-text'>Add to list</p>
                <FontAwesomeIcon className='icon' icon={faSprout}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;