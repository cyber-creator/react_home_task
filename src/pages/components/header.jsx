import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
    <div className="header__navigation_box">
        <div className="wrapper">
            <div className="header__navigation">
                <div className="menu__container">
                    <div className="menu__container-inner">
                        <Link className="header__logo-desk" to="/">
                            <div className="italic-header">Recipe Website</div>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </header>
);

export default Header;