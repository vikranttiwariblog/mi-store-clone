import React from 'react'
import '../style/Footer.css'

const Footer = ({ footer }) => {
    return (
        <div className="marg">
            <div className="preFooter">
                <div className="preFooter-1">
                    <div className="content-1">
                        <i class="fa fa-repeat fa-2x preFooter-1-icon" aria-hidden="true"></i>
                        <p><b>Haasle-free replacement</b> <br></br> 10-day easy replacement policy on mi.com</p>
                    </div>
                    <div className="content-2">
                        <i class="fas fa-user-shield fa-2x preFooter-1-icon"></i>
                        <p><b>100 secure payments</b> <br></br> We support Card,Wallets,EMI and COD</p>
                    </div>
                    <div className="content-3">
                        <i class="fa fa-map-marker fa-2x preFooter-1-icon" aria-hidden="true"></i>
                        <p><b>Vast service network</b> <br></br> 100 Mi service-centers across 600 cities </p>
                    </div>
                </div>

                <div className="preFooter-2">
                    <div className="content-4">
                        <h5>Let's Stay in Touch</h5>
                        <p>Get updates on sales special and more</p>
                    </div>
                    <div className="content-5">
                        <input type="email" name="" id="" placeholder="Enter Email Address" />
                        <p>Thanks you are on our email last for special Offers</p>
                    </div>
                    <div className="content-6">
                        <h5>Follow Mi</h5>
                        <p>We want to hear from you!</p>
                    </div>
                    <div className="content-7">
                        <i class="fab fa-facebook-f fa-2x preFooter-2-icon"></i>
                        <i class="fab fa-instagram fa-2x preFooter-2-icon"></i>
                        <i class="fab fa-youtube fa-2x preFooter-2-icon"></i>
                        <i class="fab fa-twitter fa-2x preFooter-2-icon"></i>
                    </div>
                </div>
            </div>

            <div className="footerContainer">
                <div className="footer">
                    <div>
                        <p>support</p>
                        {footer.support.map((item) =>
                            <a href={item.url}>{item.name}</a>
                        )}
                    </div>

                    <div>
                        <p>shopAndLearn</p>
                        {footer.shopAndLearn.map((item) =>
                            <a href={item.url}>{item.name}</a>
                        )}
                    </div>

                    <div>
                        <p>retailStore</p>
                        {footer.retailStore.map((item) =>
                            <a href={item.url}>{item.name}</a>
                        )}
                    </div>

                    <div>
                        <p>aboutUS</p>
                        {footer.aboutUS.map((item) =>
                            <a href={item.url}>{item.name}</a>
                        )}
                    </div>

                    <div>
                        <p>contactUs</p>
                        {footer.contactUs.map((item) =>
                            <a href={item.url}>{item.name}</a>
                        )}
                    </div>

                    <div>
                        <h6>Chat with our Virtual AI Bot <br></br> (24/7 Live Agent Support)</h6>
                        <button className="btn btn-outline-light">Chat Now</button>
                    </div>

                </div>
                <div className="footerBorder">
                    <p>Copyright &copy; 2010 - 2021 Xiaomi. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
