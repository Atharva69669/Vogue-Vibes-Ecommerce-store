import React from 'react'
import './styles/Home.css'
import SimpleImageSlider from "react-simple-image-slider";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import pic2 from './pic2.png'
const Home = () => {

    const images = [
        { url: "https://cache.tradeinn.com/images/brand-page-premium/video-3673_12.jpg" },
        { url: "https://www.harrisscarfe.com.au/medias/us-polo-1.jpg?context=bWFzdGVyfHJvb3R8MTEzNjk1MXxpbWFnZS9qcGVnfHJvb3QvaGRiL2g4MS8xMjgwNzczNTI0Njg3OC91cy1wb2xvLTEuanBnfDhjZWQ2NDQwY2ZkMzAxZDY1OGVkODE3NTRiNzg4MmQ1MDYwY2E2YThkMzExMTQwMjRjMzJiN2E4MDhjMmQ3ZWM" },
        { url:pic2 }
    ];
    return (

        <div className='parent'>
            <section id="home">
                <div className="home_page ">
                    <div className="home_img ">
                        <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img " />
                    </div>
                    <div className="home_txt ">
                        <h2>FLAT<br />40% OFF</h2>
                        <div className="home_label ">
                            <p>Embrace Your Unique Style: Discover the Fashion Oasis.</p>
                        </div>
                        <button><Link to='/shop'>SHOP NOW</Link><i className='bx bx-right-arrow-alt'></i></button>
                        <div className="home_social_icons">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-pinterest'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Gallery">
                <SimpleImageSlider
                    width={1517}
                    height={450}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </section>

            <div className="info">

                <div className="info-section">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" />

                    <h3>Express Delivery</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                </div>
                <div className="info-section">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" />

                    <h3>Best Quality</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                </div>
                <div className="info-section">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" />

                    <h3>Best Offers</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                </div>
                <div className="info-section">
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" />

                    <h3>Secure Payments</h3>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                </div>

            </div>
            <section>
                <div className="limited-Offer">
                    <div className="offer-content">
                        <div className="content-box">
                            <p className="offer">
                                Limited Time Offer
                            </p>
                            <h3>
                                Special Edition
                            </h3>
                            <p className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <p className="offer">
                                Buy This T-shirt At 20% Discount, Use Code OFF20
                            </p>
                            <button>shop now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-by-category">
                <div className="category">
                    <h2>Men</h2>
                        <p>Explore our collection for men</p>
                </div>
                <div className="category">
                    <h2>Women</h2>
                        <p>Discover our collection for women</p>
                </div>
                <div className="category">
                    <h2>Kids</h2>
                        <p>Shop our collection for kids</p>
                </div>
            </section>
            <hr />
            <Footer />
        </div>
    )
}

export default Home;