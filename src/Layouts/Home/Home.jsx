import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefs = useLoaderData();
    console.log(chefs);

    return (
        <div>
            This is home
            {
                // chefs.map(chef => <h2>{chef.name}</h2>)
            }
        </div>
    );
};

export default Home;