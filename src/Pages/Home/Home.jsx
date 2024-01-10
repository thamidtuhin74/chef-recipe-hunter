import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../Components/ChefCard/ChefCard';
import Hero from './Hero/Hero';
// import AboutUss from '../../Components/AboutUs/AboutUss';
import AboutUs from '../../Components/AboutUs/AboutUs';
// import AboutUs from '../../Components/AboutUs/AboutUs';
// let count = 0;

const Home = () => {

    const chefs = useLoaderData();
    // console.log(chefs);
    return (
        <div className=''>
            <Hero></Hero>

            <div className="div">
                {/* <AboutUs></AboutUs> */}
                {/* <AboutUs></AboutUs> */}
                {/* <AboutUss> */}
            </div>

            <div className='mycontainer mx-auto py-10'>
                <div className=' w-4/5 mx-auto text-center'>
                {/* mt-[90vh] */}
                    <h2 className="md:text-5xl text-3xl font-bold mb-10 title ">Popular Chefs</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8  ">
                        

                        {
                            chefs.map(chef => <ChefCard 
                                key={chef.id}
                                chef = {chef}
                            ></ChefCard>)
                        }
                            
                    </div>
                </div>
            </div>

            <AboutUs></AboutUs>

            
                
        </div>
    );
};

export default Home;