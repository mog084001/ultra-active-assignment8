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
            <div>
                <h3>Choice Your Sport</h3>
            </div>
            <div className='club-container'>
                <div className='products-container'>
                    {
                        clubs.map(club => <Product key={club.id} club={club}></Product>)
                    }
                </div>
                <div className='total-info'>
                    <div>
                        <h4>Mongswiching Chowdhury</h4>
                        <h4>Rangamati, Bangladesh</h4>
                    </div>
                    <div className='information-details'>
                        <div className='information'>
                            <h3>80</h3>
                            <p><small>kg</small></p>
                            <h3>6.5</h3>
                            <h3>25</h3>
                            <p><small>yrs</small></p>
                        </div>
                        <div className='fitnes-info'>
                            <p>Weight</p>
                            <p>Height</p>
                            <p>Age</p>
                        </div>

                    </div>
                    <div>
                        <h3>Add A Break</h3>
                    </div>
                    <div className='circle'>
                        <p>10s</p>
                        <p>20s</p>
                        <p>30s</p>
                        <p>40s</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Club;