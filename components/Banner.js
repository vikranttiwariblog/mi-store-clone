import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Banner.css'

const Banner = ({ banner }) => {
    return (
        <Carousel fade className="banner">

            {banner.map((item) =>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}

        </Carousel >
    )
}

export default Banner