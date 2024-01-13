import React from 'react';
import MenuCard from './MenuCard';

const OurMenu = () => {
    return (
        <div className='bg-[#E3F988] h-[990px]'>
            <div className='mycontainer'>
                <h2 className='title'>Our Menu</h2>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus quasi est quisquam maxime cumque nostrum provident qui perferendis voluptas iste id, molestiae odio et dicta fugit saepe.</p>
                <hr className='bg-[#E6E600] w-[221px] h-[2px]'/>

                <div className=''>
                    <MenuCard></MenuCard>
                </div>
            </div>
            
        </div>
    );
};

export default OurMenu;