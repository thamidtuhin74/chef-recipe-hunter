import React from 'react';

const AboutUs = () => {
    return (
        <div className='mycontainer flex md:flex-row xsm:flex-col-reverse xsm:p-4 md:gap-[134px] py-[85px]'>
            {/* md:w-1/2 sm:w-full */}
            <div className='md:w-1/2'>
                <img className='w-full' src="/src/assets/images.png" alt="about us image" />
            </div>
            {/* md:w-1/2 sm:w-full */}
            <div className='md:w-1/2 align-middle'>
                <h2 className='title'>About Us</h2>
                <hr className='w-[117px] h-[2px] bg-[#E6E600] mb-[25px]'/>
                <p className='paragraph'>Epicurean Haven: Our restaurant beckons with a symphony of flavors, where each dish is a masterpiece. Immerse yourself in culinary excellence, as our chefs craft delectable wonders that transcend the ordinary, elevating your dining experience to an unforgettable crescendo of taste.</p>
                <p className='paragraph py-[10px]'>Immerse yourself in culinary excellence, as our chefs craft delectable wonders that transcend the ordinary, elevating your dining experience to an unforgettable crescendo of taste.</p>
                <button className='yellowBtn'>Read More</button>

            </div>
        </div>
    );
};

export default AboutUs;