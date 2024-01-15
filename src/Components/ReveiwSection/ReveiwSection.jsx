import React from 'react';
import ReviewCard from './ReviewCard';

const ReveiwSection = () => {
    return (
        <div className='bg-[url("/src/assets/reviewBG.png")] bg-cover h-[auto]'>
            <div className='mycontainer pt-[70px] pb-[162px]'>
            {/* md:px-[100px] xsm:px[50px] */}
                <div className='max-w-[995px] px-[30px] lg:px[100px] mx-auto !text-center'>
                    <h2 className='yellowTitle'>listen to our customers</h2>
                    <p className='paragraph !text-[#fff] mt-[26px] xsm:mt-[86px] text-center'>chicken is one of the wholesome foods that man can eat in fact people have been eating chicken throughout human</p>
                    <hr className='bg-[#E6E600] pb-[2px] w-[221px] h-[2px] mt-[30px] mb-[74.99px] mx-auto'/>
                </div>

                <div className=''>
                    {/* <MenuCard></MenuCard> */}
                    <ReviewCard></ReviewCard>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default ReveiwSection;