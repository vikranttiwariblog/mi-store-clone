import React from 'react';
import '../style/ProductReviewsCard.css';

const ProductReviewsCard = ({review,name,price,index,image}) => {
    return (
        <div className="productReviewsCard">
            <img src={image} alt={`${index} offer`} />
            <h5>{review}</h5>
            <span className="cls-1">{name}</span>
            <span className="cls-2">{price}</span>
        </div>
    )
}

export default ProductReviewsCard