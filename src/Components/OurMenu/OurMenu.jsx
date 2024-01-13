import React from 'react';
import MenuCard from './MenuCard';

const OurMenu = () => {
    return (
        <div className='bg-[#E3F988] h-[990px]'>
            <div className='mycontainer pt-[70px]'>
                <div className='w-[995px] px-[100px] mx-auto !text-center'>
                    <h2 className='title'>Our Menu</h2>
                    <p className='paragraph'>Lörem ipsum obäs tönutiktiga synade, ödleplåster, var. Tejåvis krofåsm fev, sped trafficking. Fronta pren beling, myktigt.</p>
                    <hr className='bg-[#E6E600] w-[221px] h-[2px] mt-[30px] mb-[74.99px] mx-auto'/>
                </div>

                <div className=''>
                    <MenuCard></MenuCard>
                    
                </div>
                <div className='flex justify-center'>
                    <button className='btn greenBtn !text-center'>explore menu</button>

                </div>
            </div>
            
        </div>
    );
};

export default OurMenu;