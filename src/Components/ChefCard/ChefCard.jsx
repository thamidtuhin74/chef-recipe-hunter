import React from 'react';
import './ChefCard.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
// import {} from "react-icons/fe"
const ChefCard = ({chef}) => {
    return (
        <div>
            <div className="card w-full h-[400px] flex align-middle items-center bg-base-200 shadow-lg">
                <div className=''>
                    <figure className="w-[200px] h-[250px] pt-12 mask mask-decagon">
                        <img src={chef.img}  alt="Shoes" className="w-full h-full" />
                    </figure>
                </div>
                <p id='likes' className='flex flex-row-reverse'>
                    <span  className='text-primary font-extrabold text-bold align-middle text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> {chef.likes}</span>
                    <FaHeart className='w-6 h-6 text-red-600 mr-2'></FaHeart>
                </p>
                <div className="flex flex-col items-center align-middle">
                    <h2 className="card-title md:text-3xl text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{chef.name}!</h2>
                    <p><span className='font-bold'>Number Of Recipes :</span> {chef.numberOfRecipes}</p>
                    <p className=''><span className='font-bold '>Years Of Experience :</span> {chef.yearsOfExperience}</p>

                    <div className="card-actions mt-2">
                    <Link to={`/card-details/${chef.id}`}>
                        <button className="btn btn-primary btn-sm ">View Recipes</button></Link>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default ChefCard;



