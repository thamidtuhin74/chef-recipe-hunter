import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../ChefCard/ChefCard.css'

const CardDetails = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="card-img px-10 pt-10">
                    <img src={chefDetails.img} alt="Shoes" className="mask mask-decagon" />
                </figure>
                <p id='likes' className='text-primary font-extrabold text-3xl'>{chefDetails.likes}</p>
                <div className="card-body items-center">
                    <h2 className="card-title">{chefDetails.name}!</h2>
                    <p><span className='font-bold'>Number Of Recipes :</span> {chefDetails.numberOfRecipes}</p>
                    <p><span className='font-bold'>Years Of Experience :</span> {chefDetails.yearsOfExperience}</p>

                    <div className="card-actions">
                    <Link to={`/card-details/${chefDetails.id}`}>
                        <button className="btn btn-primary">Add To Fabourite</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;