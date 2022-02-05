import React, { useEffect } from 'react';
import '../style/PreNavbar.css';

const PreNavbar = () => {


    useEffect(() => {

        const hamburger = document.querySelector(".hemburger-menu");
        const back = document.querySelector('.back');

        hamburger.addEventListener('click', () => {
            back.classList.toggle("res-height");
        })

    })

    return (
        <div className="back">
            <div className="burger-container">
                <div className="hemburger-menu">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
            <div className="preNav container">
                <div className="box-1">
                    <a href="https://www.mi.com/in/">MI INDIA</a>
                    <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a>
                    <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a>
                    <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE </a>
                </div>
                <div className="box-2">
                    <a href="https://store.mi.com/in/site/login">SIGN IN</a>
                    <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a>
                    <a href="https://store.mi.com/in/site/login"> {<i class="fas fa-cart-plus"></i>} CART (0)</a>
                </div>
            </div>
        </div>
    )
}

export default PreNavbar;