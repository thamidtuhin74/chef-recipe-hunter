import React from 'react';

const Recipe = ({recipe}) => {
    const procedere = recipe.cookingMethod;
    console.log(typeof(procedere));

    
    
    return (
            <tr className=''>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24 md:w-48 md:h-48">
                        <img src={recipe.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="text-2xl md:text-3xl font-bold">{recipe.name}</div>
                    <div className="opacity-75 text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Rating : {recipe.rating}
                    
                    </div>
                    </div>
                </div>
                </td>
                <td className='flex flex-col justify-center'>
                {
                recipe.ingredients.map(ingredient => <p className="badge badge-ghost badge-lg my-1">{ingredient}<br/></p>)
                }
                </td>
                <td className='w-4'>
                    <p>{recipe.cookingMethod.length}</p>
                </td>
                <th>
                    <label htmlFor="my-modal-6" className="btn btn-primary">View Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-96">
                        <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={recipe.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{recipe.name}</h2>
                                    {/* <p className='w-full overflow-x-clip'>{procedere}</p> */}
                                    <p>{recipe.cookingMethod}</p>

                                    {/* <p className='w-full overflow-x-clip'>{recipe.cookingMethod}</p> */}
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn btn-primary">OK!</label>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </th>
            </tr>
    );
};

export default Recipe;