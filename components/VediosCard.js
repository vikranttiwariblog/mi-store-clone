import React from 'react';
import '../style/VediosCard.css'

const VediosCard = ({ name, image, index }) => {
    return (
        <div className="VediosCard">
            <img src={image} alt={`${index} offer`} />
            <div className="content">
                <img src="https://fbutube.com/images/watermark/2.png" alt="" />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default VediosCard
