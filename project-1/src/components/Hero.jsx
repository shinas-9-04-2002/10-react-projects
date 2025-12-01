import React from "react";

const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button className="shop-now">Shop Now</button>
                    <button className="category">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img
                            src="/images/flipkart.png"
                            alt="amazon-logo"
                            width="70px"
                        />
                        <img
                            src="/images/amazon.png"
                            alt="amazon-logo"
                            width="70px"
                        />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/hero.png" alt="amazon-logo" width="800px" />
            </div>
        </main>
    );
};

export default Hero;
