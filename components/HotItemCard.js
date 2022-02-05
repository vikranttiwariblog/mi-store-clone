import React from 'react'
import '../style/HotItemCard.css'

const HotItemCard = ({name,price,image,index}) => {
    return (
        <div className="HotItemCard">
            <img src={image} alt={`${index} product`}/>
            <p className="cls-1">{name}</p>
            <p className="cls-2">{price}</p>
        </div>
    )
}

export default HotItemCard
