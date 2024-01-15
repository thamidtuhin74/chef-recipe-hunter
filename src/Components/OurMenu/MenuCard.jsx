import React from 'react';
import { FaStar } from 'react-icons/fa';

const MenuCard = () => {
    return (
        <div className='grid justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[30px] mx-auto'>
            <div className="card w-[277px] max-h-[483px] bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/fvK1nf6/chicken-salad.png" alt="Shoes" className='w-full h-[201px] rounded-tl-[20px]'/></figure>
                <div className="p-5 text-left">
                    <div className="star flex flex-row font-[18px] text-[#007500] mb-[22px]">
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px] '/>
                        
                    </div>
                    <h2 className="cardTitle !text-left">fried chicken</h2>
                    <p className='py-[21px]'>Lörem ipsum astrorör tett och kvasisade fydongen. Lörem ipsum astrorör tett och kvasisade fydongen.</p>
                    <div className="card-actions justify-start">
                    <button className="btn smallYellowBtn">Order Now</button>
                    </div>
                </div>

            </div>
            <div className="card w-[277px] max-h-[483px] bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/zJ4Sbd5/fried-chicken.png" alt="Shoes" className='w-full h-[201px] rounded-tl-[20px]'/></figure>
                <div className="p-5 text-left">
                    <div className="star flex flex-row font-[18px] text-[#007500] mb-[22px]">
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px] '/>
                        
                    </div>
                    <h2 className="cardTitle !text-left">fried chicken</h2>
                    <p className='py-[21px]'>Lörem ipsum astrorör tett och kvasisade fydongen. Lörem ipsum astrorör tett och kvasisade fydongen.</p>
                    <div className="card-actions justify-start">
                    <button className="btn smallYellowBtn text-[16px]">Order Now</button>
                    </div>
                </div>

            </div>
            <div className="card w-[277px] max-h-[483px] bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/CKCFYzs/spicey-kabab.png" alt="Shoes" className='w-full h-[201px] rounded-tl-[20px]'/></figure>
                <div className="p-5 text-left">
                    <div className="star flex flex-row font-[18px] text-[#007500] mb-[22px]">
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px] '/>
                        
                    </div>
                    <h2 className="cardTitle !text-left">fried chicken</h2>
                    <p className='py-[21px]'>Lörem ipsum astrorör tett och kvasisade fydongen. Lörem ipsum astrorör tett och kvasisade fydongen.</p>
                    <div className="card-actions justify-start">
                    <button className="btn smallYellowBtn">Order Now</button>
                    </div>
                </div>

            </div>
            <div className="card w-[277px] max-h-[483px] bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/5RwPYGZ/spicey-roll.png" alt="Shoes" className='w-full h-[201px] rounded-tl-[20px]'/></figure>
                <div className="p-5 text-left">
                    <div className="star flex flex-row font-[18px] text-[#007500] mb-[22px]">
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px]'/>
                        <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                        <FaStar className='w-[18px] h-[18px] '/>
                        
                    </div>
                    <h2 className="cardTitle !text-left">fried chicken</h2>
                    <p className='py-[21px]'>Lörem ipsum astrorör tett och kvasisade fydongen. Lörem ipsum astrorör tett och kvasisade fydongen.</p>
                    <div className="card-actions justify-start">
                    <button className="btn smallYellowBtn">Order Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MenuCard;