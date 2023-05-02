import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefs = useLoaderData();
    console.log(chefs);

    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {
                // chefs.map(chef => <h2>{chef.name}</h2>)
            }
        </div>
    );
};

export default Home;