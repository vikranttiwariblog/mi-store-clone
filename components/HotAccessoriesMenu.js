import React from 'react';
import {Link} from 'react-router-dom';
import '../style/HotAccessoriesMenu.css';

const HotAccessoriesMenu = () => {
    return (
        <div className="HotAccessoriesMenu">
            <Link className="HotAccessoriesLinks" to="/music">Music Store</Link>
            <Link className="HotAccessoriesLinks" to="/smartDevice">smart Devices</Link>
            <Link className="HotAccessoriesLinks" to="/home">home</Link>
            <Link className="HotAccessoriesLinks" to="/lifeStyle">lifeStyle</Link>
            <Link className="HotAccessoriesLinks" to="/mobileAccessories">mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu