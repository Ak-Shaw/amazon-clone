import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className = 'header'>
            <img className = 'header__logo' src = 'images/amazon_logo.png'/>

            <div className = 'header__search'> 
            <input className = 'header__searchInput' type = 'text' />

            {/* logo */}
            </div>

            <div className = 'header__nav'>

                <div className = 'header__option'>
                    <span className = 'header__optionLineOne'>Hello Guest</span>
                    <span className = 'header__optionLineTwo'>Sign In</span>
                </div>

                <div className = 'header__option'>
                    <span className = 'header__optionLineOne'>Returns</span>
                    <span className = 'header__optionLineTwo'>&amp; Orders</span>
                </div>

                <div className = 'header__option'>
                    <span className = 'header__optionLineOne'>Try</span>
                    <span className = 'header__optionLineTwo'>Prime</span>
                </div>

            </div>
            
        </div>
    )
}

export default Header