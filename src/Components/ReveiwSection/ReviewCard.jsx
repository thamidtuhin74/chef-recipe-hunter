import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = () => {
    return (
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-[30px]'>
            
            <div className='bg-[#fff] rounded-[20px] p-[30px] flex flex-col items-center'>
                <img src="/src/assets/images.png" alt="" className='w-[120px] h-[120px] rounded-[50%]'/>
                <div className="star flex flex-row font-[18px] text-[#007500] my-[24px]">
                    <FaStar className='w-[18px] h-[18px]'/>
                    <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                    <FaStar className='w-[18px] h-[18px]'/>
                    <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                    <FaStar className='w-[18px] h-[18px] '/>
                </div>
                <p className='paragraph pb-[24px]'>it is a longestablished fact that a reader will be distracted by the readable content od the a page</p>
                <h2 className='title !text-black'>richel win</h2>
            </div>

            <div className='bg-[#fff] rounded-[20px] p-[30px] flex flex-col items-center'>
                <img src="/src/assets/images.png" alt="" className='w-[120px] h-[120px] rounded-[50%]'/>
                <div className="star flex flex-row font-[18px] text-[#007500] my-[24px]">
                    <FaStar className='w-[18px] h-[18px]'/>
                    <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                    <FaStar className='w-[18px] h-[18px]'/>
                    <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                    <FaStar className='w-[18px] h-[18px] '/>
                </div>
                <p className='paragraph pb-[24px]'>it is a longestablished fact that a reader will be distracted by the readable content od the a page</p>
                <h2 className='title !text-black'>richel win</h2>
            </div>

            <div className='bg-[#fff] rounded-[20px] p-[30px] flex flex-col items-center'>
                <img src="/src/assets/images.png" alt="" className='w-[120px] h-[120px] rounded-[50%]'/>
                <div className="star flex flex-row font-[18px] text-[#007500] my-[24px]">
                    <FaStar className='w-[18px] h-[18px]'/>
                    <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                    <FaStar className='w-[18px] h-[18px]'/>
                    <FaStar className='w-[18px] h-[18px] mx-[8px]'/>
                    <FaStar className='w-[18px] h-[18px] '/>
                </div>
                <p className='paragraph text-center pb-[24px]'>it is a longestablished fact that a reader will be distracted by the readable content od the a page</p>
                <h2 className='title !text-black'>richel win</h2>
            </div>
        </div>
    );
};

export default ReviewCard;
