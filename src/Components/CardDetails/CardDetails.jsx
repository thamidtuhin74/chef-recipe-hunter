import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CardDetails.css'
import Recipe from '../Recipe/Recipe';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const CardDetails = () => {
    const [favourite, setFavourite] = useState(false);

    const chefDetails = useLoaderData();
    console.log(chefDetails);

    const {recipes}  = chefDetails;

    console.log(recipes);

    const toastHandler = () =>{
        setFavourite(true);
        Toastify({

            text: "You are Added this Chef in Your Favourite List",
            className: "info",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            duration: 3000,
            onClick: function(){}      
            }).showToast();
    }

    return (
        <div className="Container mx-auto bg-base-100">


            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefDetails.img} alt="Shoes" className="mask mask-decagon h-116" />
                    <div>
                        {/* Gradient Text */}
                    <h1 className="text-5xl font-bold heroTitle">{chefDetails.name}!</h1>
                    <h3 className="text-2xl font-bold my-5 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{chefDetails.likes} Peopele Likes His/her Recipes!</h3>

                    <p className="py-6">
                        <p><span className='font-bold'>{chefDetails.name} </span> {chefDetails.bio}</p>
                        <p><span className='font-bold'>Number Of Recipes :</span> {chefDetails.numberOfRecipes}</p>
                        <p><span className='font-bold'>Years Of Experience :</span> {chefDetails.yearsOfExperience}</p>
                        

                    </p>
                    <Link>
                        <button onClick={()=>toastHandler()} className={`btn yellowBtn`} disabled={favourite} >Add To Fabourite</button>
                    </Link>
                    </div>
                </div>
                
            </div>
        <div className='container mx-auto'>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Recipe</th>
                        <th>Ingredients</th>
                        <th>Procedure<br/>no of word</th>
                        <th>Details Modal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        recipes.map(recipe=><Recipe
                            key={recipe.id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                    
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Recipe</th>
                        <th>Ingredients</th>
                        <th>Procedure<br/>no of word</th>
                        <th>Details Modal</th>
                    </tr>
                    </tfoot>
                    
                </table>
                </div>
                </div>

            
            <p></p>
        </div>
    );
};

export default CardDetails;