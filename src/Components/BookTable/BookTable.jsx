import React from 'react';
import ContactForm from './ContactForm';

const BookTable = () => {
    return (
        <div className='bg-[#E3F988] h-[auto]'>
            <div className='mycontainer pt-[70px]'>
            {/* md:px-[100px] xsm:px[50px] */}
                <div className='max-w-[995px] px-[30px] lg:px[100px] mx-auto !text-center'>
                    <h2 className='title'>book your table</h2>
                    <p className='paragraph'>chicken is one of the wholesome foods that man can eat in fact people have been eating chicken throughout human.</p>
                    <hr className='bg-[#E6E600] pb-[2px] w-[221px] h-[2px] mt-[30px] mb-[74.99px] mx-auto'/>
                </div>

                <div className=''>
                    {/* <MenuCard></MenuCard> */}
                    <ContactForm></ContactForm>
                    
                </div>
                {/* <div className='flex justify-center mt-5 pb-[26px]'>
                    <button className='btn greenBtn !text-center'>explore menu</button>

                </div> */}
            </div>
            
        </div>
    );
};

export default BookTable;