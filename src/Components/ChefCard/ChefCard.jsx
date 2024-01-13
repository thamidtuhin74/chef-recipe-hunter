import React from 'react';
import './ChefCard.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
// import {} from "react-icons/fe"

const ChefCard = ({chef}) => {
    
    return (
        <div>
            <div className="card md:w-full w-[300px] !py-5 flex align-middle items-center bg-base-200 shadow-lg ">
                <div className=''>
                    <figure className="w-[200px] h-[250px] pt-12 mask mask-decagon">
                        <img src={chef.img}  alt="Shoes" className="w-full h-full" />
                    </figure>
                </div>
                <p id='likes' className='flex flex-row-reverse text-[#E6E600]'>
                    <span  className='text-primary font-extrabold text-bold align-middle text-transparent !text-[#E6E600]'> {chef.likes}</span>
                    <FaHeart className='w-6 h-6 text-red-600 mr-2'></FaHeart>
                </p>
                <div className="flex flex-col items-center align-middle line-h">
                    <h2 className="card-title cardTitle">{chef.name}!</h2>
                    <p><span className='font-bold'>Number Of Recipes :</span> {chef.numberOfRecipes}</p>
                    <p className=''><span className='font-bold '>Years Of Experience :</span> {chef.yearsOfExperience}</p>

                    <div className="card-actions mt-2">
                    <Link to={`/card-details/${chef.id}`}>
                        <button className="btn smallYellowBtn">View Recipes</button></Link>
                    </div>
                </div>
            </div>
            

            
        </div>
    );
};

export default ChefCard;



