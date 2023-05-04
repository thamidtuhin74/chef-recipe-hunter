import React from 'react';
import './ChefCard.css';
import { Link } from 'react-router-dom';
const ChefCard = ({chef}) => {
    return (
        <div>
            <div className="card flex align-middle items-center bg-base-100 shadow-xl">
                <figure className="card-img px-10 pt-10">
                    <img src={chef.img} alt="Shoes" className="mask mask-decagon" />
                </figure>
                <p id='likes'><span  className='text-primary font-extrabold text-xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{chef.likes} </span>peoples likes him/her!</p>
                <div className="card-body items-center">
                    <h2 className="card-title text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{chef.name}!</h2>
                    <p><span className='font-bold'>Number Of Recipes :</span> {chef.numberOfRecipes}</p>
                    <p><span className='font-bold'>Years Of Experience :</span> {chef.yearsOfExperience}</p>

                    <div className="card-actions">
                    <Link to={`/card-details/${chef.id}`}>
                        <button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default ChefCard;