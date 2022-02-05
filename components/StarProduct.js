import React from 'react';
import '../style/StarProduct.css';

const StarProduct = (props) => {
    return (
        <div className="starproduct">
            <div>
                <a href={props.starProduct[0].url}><img src={props.starProduct[0].image} alt="star product" /></a>
            </div>
            <div>
                <a href={props.starProduct[1].url}><img src={props.starProduct[1].image} alt="star product" /></a>
                <a href={props.starProduct[2].url}><img src={props.starProduct[2].image} alt="star product" /></a>
                <a href={props.starProduct[3].url}><img src={props.starProduct[3].image} alt="star product" /></a>
            </div>
        </div>
    )
}

export default StarProduct;
