import React from 'react'
import Offer from './Offer'
import '../style/Offers.css'

const Offers = ({offer}) => {
    return (
        <div className="offerSection">
            { offer.map((item,index)=>
                < Offer  index={index} src={item.image} link={item.url} />
            )}
        </div>
    )
}

export default Offers