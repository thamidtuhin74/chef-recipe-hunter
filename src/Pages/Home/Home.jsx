import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../Components/ChefCard/ChefCard';
import AboutUs from '../../Components/AboutUs/AboutUs';
import AboutUss from '../../Components/AboutUs/AboutUss';
// import AboutUs from '../../Components/AboutUs/AboutUs';

const Home = () => {

    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <div className='relative'>
            <div className="hero w-full h-[90vh] mt-[-70px] absolute z-0 " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content pt-[150px]">
                    <div className="max-w-[740px]">
                        <h1 className="mb-5 heroTitle">World Authentic & Popular Chefs Are There</h1>
                        <p className="mb-5 text-xl">Savoring Culinary Bliss: A Gastronomic Journey Through Time, Where Flavors Collide and Memories Unfurl, Igniting the Palate with Irresistible Delights and Indulging in the Artistry of Unforgettable Feasts</p>
                        <button className="btn yellowBtn">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="div">
                {/* <AboutUs></AboutUs> */}
                {/* <AboutUs></AboutUs> */}
                <AboutUss></AboutUss>
            </div>

            <div className='container mx-auto py-10'>
                <div className='mt-[90vh] w-4/5 mx-auto text-center'>
                
                    <h2 className="md:text-5xl text-3xl font-bold pb-10 title ">Popular Chefs</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8  ">
                        

                        {
                            chefs.map(chef => <ChefCard 
                                key={chef.id}
                                chef = {chef}
                            ></ChefCard>)
                        }
                            
                    </div>
                </div>
            </div>

            
                
        </div>
    );
};

export default Home;