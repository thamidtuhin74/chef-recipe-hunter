import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#000]">
            <footer className="mycontainer mx-auto footer footer-center p-10 text-primary-content grid grid-cols-1 md:grid-cols-3 gap-[35px]">

                <div className='!text-left'>
                    <h2 className='title !text-white'>Nipponshoku</h2>
                    <p className='paragraph'>Nipponshoku is a website centered around Javanese Food Recipes from different
                    chefs. Users can explore a variety of recipes from multiple chefs on the platform.
                    Chef details are restricted and can only be accessed by logged-in users.
                    </p>
                </div>
                
                <div className="">
                    <h2 className='title !text-white'>Important Link👇</h2>
                    <div className='grid grid-cols-1 gap-4 paragraph'>
                        <Link to={'/'} className="link link-hover">Home</Link> 
                        <Link to={"/login"} className="link link-hover">Login</Link> 
                        <Link to={'/register'} className="link link-hover">Register</Link> 
                        <Link className="link link-hover" to={'/blog'}>Blog</Link>
                    </div>
                </div> 

                <div className="">
                    <h2 className='title !text-white'>Contact</h2>
                    <div>
                        <p className='paragraph'>call = +880 1798905167</p>
                        <p className='paragraph'>timeing everyday 10-am to 11-pm</p>
                        <p className='paragraph'>address xyz , n sectore 230,  waste,mumbai  1234</p>
                    </div>
                </div> 

                

                
            </footer>
            <div className='bg-white paragraph !text-right pr-2 '>  
                <p>Copyright © 2023 - All right reserved</p>
                
            </div> 
        </div>
    );
};

export default Footer;