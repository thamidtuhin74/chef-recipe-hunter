import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../Components/ChefCard/ChefCard';

const Home = () => {

    const chefs = useLoaderData();
    console.log(chefs);

    return (
        <div className=''>
            <div className="hero h-[70vh] bg-cover" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg")`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">World Best Chefs Are There</h1>
                    <p className="mb-5">We are there to serve you Best Experiance In Your Recipe</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='container mx-auto py-10'>
                <div className='w-4/5 mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-y-10  ">
                        

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