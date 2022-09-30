import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
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
            <div>
                <h3>Exercise Details</h3>
            </div>
            <div className='exercise-time'>
                <h4>Exercise time: {cart.length}</h4>
            </div>
            <div className='break-time'>
                <h4>Break time</h4>
            </div>
            <button className='btn-activity'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;