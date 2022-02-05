import React from 'react';
import PreNavbar from './components/PreNavbar';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './components/Slider.js';
import data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews.js';
import Vedios from './components/Vedios.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js'
import NavOption from './components/NavOption.js'

const App = () => {
    return (
        <Router>
            < PreNavbar />

            {/* here use router in navbar */}
            < Navbar />
            <Route exact path="/miphones">
                < NavOption miPhones={data.miPhones} />
            </Route>
            <Route exact path="/redmiphones">
                < NavOption redmiPhones={data.redmiPhones} />
            </Route>
            <Route exact path="/tv">
                < NavOption tv={data.tv} />
            </Route>
            <Route exact path="/laptops">
                < NavOption laptop={data.laptop} />
            </Route>
            <Route exact path="/lifestyle">
                < NavOption fitnessAndLifeStyle={data.fitnessAndLifeStyle} />
            </Route>
            <Route exact path="/NavbarHome">
                < NavOption home={data.home} />
            </Route>
            <Route exact path="/audio">
                < NavOption audio={data.audio} />
            </Route>
            <Route exact path="/accessories">
                < NavOption accessories={data.accessories} />
            </Route>

            {/* here use useState and useEffect with anchor tag */}
            {/* < NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} /> */}

            < Slider start={data.banner.start} />
            < Offers offer={data.offer} />
            < Heading text="STAR PRODUCTS" />
            < StarProduct starProduct={data.starProduct} />
            < Heading text="HOT ACCESSORIES" />

            < HotAccessoriesMenu />
            <Route exact path="/music">
                < HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
            </Route>
            <Route exact path="/smartDevice">
                < HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
            </Route>
            <Route exact path="/home">
                < HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
            </Route>
            <Route exact path="/lifeStyle">
                < HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
            </Route>
            <Route exact path="/mobileAccessories">
                < HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
            </Route>

            < Heading text="PRODUCT REVIEWS" />
            < ProductReviews productReviews={data.productReviews} />
            < Heading text="VEDIOS" />
            < Vedios vedios={data.videos} />
            < Heading text="IN THE PRESS" />

            < Banner banner={data.banner.end} />

            < Footer footer={data.footer} />
        </Router>
    )
}

export default App