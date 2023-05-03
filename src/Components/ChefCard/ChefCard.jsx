import React from 'react';
import './ChefCard.css';
const ChefCard = ({chef}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="card-img px-10 pt-10">
                    <img src={chef.img} alt="Shoes" className="mask mask-decagon" />
                </figure>
                <p id='likes' className='text-primary font-extrabold text-3xl'>{chef.likes}</p>
                <div className="card-body items-center">
                    <h2 className="card-title">{chef.name}!</h2>
                    <p><span className='font-bold'>Number Of Recipes :</span> {chef.numberOfRecipes}</p>
                    <p><span className='font-bold'>Years Of Experience :</span> {chef.yearsOfExperience}</p>

                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* <h2>{chef.name}</h2> */}
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chef.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{chef.name}!</h2>
                    <p><span className='font-bold'>Number Of Recipes :</span> {chef.numberOfRecipes}</p>
                    <p><span className='font-bold'>Years Of Experience :</span> {chef.yearsOfExperience}</p>

                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}

            
        </div>
    );
};

export default ChefCard;