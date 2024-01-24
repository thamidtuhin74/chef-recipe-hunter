import React from 'react';

const ContactForm = () => {

    const handleContactForm = (e) =>{
        console.log("Submit");

    }

    return (
            <form className="form-control max-w-[995px] mx-auto grid grid-cols-1 gap-10" onSubmit={handleContactForm}>
                
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-full" />

                <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-full" />

                <div className='grid grid-cols-2 gap-[15px]'>
                    <input type="text" placeholder="Your Phone Number" className="input input-bordered" />
                    
                    <input type="text" placeholder="Numbers Of Person" className="input input-bordered" />
                </div>

                <div className='grid grid-cols-2 gap-[15px]'>
                    <input type="text" placeholder="Date" className="input input-bordered" />
                    
                    <input type="text" placeholder="Time" className="input input-bordered" />
                </div>

                {/* <input type="text"  /> */}
                <textarea placeholder="Your Message" className="input input-bordered w-full max-w-full"></textarea>
                {/* <button>Sunmit</button> */}

                <div className='flex justify-center pb-[26px]'>
                    <input type="submit" placeholder="Time" className="input input-bordered btn greenBtn !text-center" />

                </div>


                

            </form>
    );
};

export default ContactForm;