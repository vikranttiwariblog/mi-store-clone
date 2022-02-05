// here use router
import React from 'react'
import NavCard from './NavCard.js';
import '../style/NavOption.css'

const NavOption = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    return (
        <div className="NavOption">
            {miPhones && miPhones.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {redmiPhones && redmiPhones.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {tv && tv.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {laptop && laptop.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {fitnessAndLifeStyle && fitnessAndLifeStyle.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {home &&home.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {audio && audio.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
            {accessories && accessories.map((item,index)=>
                < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
            )}
        </div>
    )
}

export default NavOption

// here not use router
// import React,{useState, useEffect} from 'react'
// import NavCard from './NavCard.js'
// import '../style/NavOption.css'

// const NavOption = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

//     const [miPhoneToggle, setMiPhoneToggle] = useState(false);
//     const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
//     const [tvToggle, setTvToggle] = useState(false);
//     const [laptopToggle, setLaptopToggle] = useState(false);
//     const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false);
//     const [homeToggle, setHomeToggle] = useState(false);
//     const [audioToggle, setAudioToggle] = useState(false);
//     const [accessoriesToggle, setAccessoriesToggle] = useState(false);

//     useEffect(()=>{

//         if(window.location.pathname === "/miphones"){
//             return setMiPhoneToggle(true)
//         }

//         if(window.location.pathname === "/redmiphones"){
//             return setRedmiPhoneToggle(true)
//         }

//         if(window.location.pathname === "/tv"){
//             return setTvToggle(true)
//         }

//         if(window.location.pathname === "/laptops"){
//             return setLaptopToggle(true)
//         }

//         if(window.location.pathname === "/lifestyle"){
//             return setFitnessAndLifeStyleToggle(true)
//         }

//         if(window.location.pathname === "/home"){
//             return setHomeToggle(true)
//         }

//         if(window.location.pathname === "/audio"){
//             return setAudioToggle(true)
//         }

//         if(window.location.pathname === "/accessories"){
//             return setAccessoriesToggle(true)
//         }

//     },[])
 
//     return (
//         <div className="NavOption">

//             {miPhoneToggle ? miPhones.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//             {redmiPhoneToggle ? redmiPhones.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//             {tvToggle ? tv.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//             {laptopToggle ? laptop.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//             {fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }
//             {homeToggle ? home.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//             {audioToggle ? audio.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//             {accessoriesToggle ? accessories.map((item,index)=>
//                 < NavCard image={item.image} price={item.price} name={item.name} index={index}/>
//             ) : null }

//         </div>
//     )
// }

// export default NavOption