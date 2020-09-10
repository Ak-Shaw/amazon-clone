import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className = 'checkout'>
            
            <div className = 'checkout__left'>
                <img className = 'checkout__ad' src = 'images/hale.jpg' />
                <div>
                    <h2 className = 'checkout__title'>
                        Your Shopping Basket
                    </h2>

                    {/* basket item */}
                    {/* basket item */}
                    {/* basket item */}
                    {/* basket item */}
                </div>
            </div>

            <div className = 'checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout