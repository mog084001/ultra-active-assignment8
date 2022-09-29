import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Club.css';

const Club = () => {
    const [clubs, setClubs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClubs(data))
    },)
    return (
        <div>
            <div className='gym-club'>
                <h1>World-Sport-Club</h1>
            </div>
            <div className='club-container'>
                <div className='products-container'>
                    {
                        clubs.map(club => <Product key={club.id} club={club}></Product>)
                    }
                </div>
                <div>
                    <h3>Information Summary</h3>
                </div>
            </div>
        </div>

    );
};

export default Club;