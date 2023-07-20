import React from 'react'
import './styles/Footer.css'
const Footer = () => {
    return (
        <div>
             <section id="contact">
        <div className="contact container">
        <form action="#" method="POST">
            <div className="form">
                <div className="form-txt">
                    <h1>Contact Us</h1>
                    <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                        attention.</span>
                    <h3>USA</h3>
                    <p>65,Princess Street,Los Angeles<br/>+43 982-314-0958</p>
                    <h3>India</h3>
                    <p>Ballad Pier,Coloba.<br/>411014</p>
                </div>
                <div className="form-details">
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                    <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </form>
    </div>
    </section>
            <footer>
                <div className="footer-container container">
                    <div className="content_1">
                        <h1>Logo</h1>
                            <p>The customer is at the heart of our<br/>unique business model, which includes<br/>design.</p>
                                <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards"/>
                                </div>
                                <div className="content_2">
                                    <h4>SHOPPING</h4>
                                    <a href="#">Clothing Store</a>
                                    <a href="#">Trending Shoes</a>
                                    <a href="#">Accessories</a>
                                    <a href="#">Sale</a>
                                </div>
                                <div className="content_3">
                                    <h4>SHOPPING</h4>
                                    <a href="#">Contact Us</a>
                                    <a href="#" target="_blank">Payment Method</a>
                                    <a href="#" target="_blank">Delivery</a>
                                    <a href="#" target="_blank">Return and Exchange</a>
                                </div>
                                <div className="content_4">
                                    <h4>NEWSLETTER</h4>
                                    <p>Be the first to know about new<br/>arrivals, look books,sales& promos!</p>
                                    <div className="f-mail">
                                        <input type="email" placeholder="Your Email"/>
                                            <i className='bx bx-envelope'></i>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                                <hr />
                            </footer>
                    </div>
                    )
}

                    export default Footer