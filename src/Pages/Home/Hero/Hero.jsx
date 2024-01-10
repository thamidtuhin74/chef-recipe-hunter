import React from 'react';

const Hero = () => {
    return (
        <div className='h-[550px]'>
            <div className="hero w-full absolute z-0 " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content pt-[150px]">
                    <div className="max-w-[740px]">
                        <h1 className="mb-5 heroTitle">World Authentic & Popular Chefs Are There</h1>
                        <p className="mb-5 text-xl">Savoring Culinary Bliss: A Gastronomic Journey Through Time, Where Flavors Collide and Memories Unfurl, Igniting the Palate with Irresistible Delights and Indulging in the Artistry of Unforgettable Feasts</p>
                        <button className="btn yellowBtn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;