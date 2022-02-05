import React from 'react';
import HotItemCard from './HotItemCard.js';
import '../style/HotAccessories.css';

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
    return (
        <div className="HotAccessories">
            
            <div className="HotAccessoriesCover">
                <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="cover" />
            </div>

            <div className="HotAccessoriesItem">
                {music && music.map((item,index)=>
                    < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                )}
                {smartDevice && smartDevice.map((item,index)=>
                    < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                )}
                {home && home.map((item,index)=>
                    < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                )}
                {lifeStyle && lifeStyle.map((item,index)=>
                    < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                )}
                {mobileAccessories && mobileAccessories.map((item,index)=>
                    < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                )}

            </div>

        </div>
    )
}

export default HotAccessories