import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../Components/ChefCard/ChefCard';
import Hero from './Hero/Hero';
// import AboutUss from '../../Components/AboutUs/AboutUss';
import AboutUs from '../../Components/AboutUs/AboutUs';
import OurMenu from '../../Components/OurMenu/OurMenu';
// import AboutUs from '../../Components/AboutUs/AboutUs';
// let count = 0;

const Home = () => {

    const chefs = useLoaderData();
    // console.log(chefs);
    return (
        <div className=''>
            <div>
                <Hero></Hero>
            </div>


            <div className='mycontainer h-auto mx-auto py-10'>
                <div className='mx-auto text-center'>
                {/* mt-[90vh] */}
                    <div className='mb-10'>
                        <h2 className="md:text-5xl text-3xl font-bold title ">Popular Chefs</h2>
                        <hr className='bg-[#E6E600] pb-[2px] w-[221px] h-[2px] mt-[10px] mb-[74.99px] mx-auto'/>
                    </div>


                    <div className="grid items-center grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8  ">
                        

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
            <OurMenu></OurMenu>

            
                
        </div>
    );
};

export default Home;