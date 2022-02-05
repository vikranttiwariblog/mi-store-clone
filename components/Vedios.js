import React from 'react';
import VediosCard from './VediosCard.js'
import '../style/Vedios.css';

const Vedios = ({ vedios }) => {
    return (
        <div className="vedios">
            {vedios.map((item, index) =>
                < VediosCard key={item.image} name={item.name} image={item.image} index={index} />
            )}
        </div>
    )
}

export default Vedios