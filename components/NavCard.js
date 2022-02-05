import React from 'react'
import '../style/NavCard.css'

const NavCard = ({ name, image, price, index }) => {
    return (
        <div className="NavCard">
            <img src={image} alt={`${index} phone`} />
            <div>
                <p>{name}</p>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default NavCard