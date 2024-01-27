import React from 'react';

const ContactForm = () => {

    const handleContactForm = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const noOfPerson = from.noOfPerson.value;
        const date = from.date.value;
        const time = from.time.value;
        const sms = from.sms.value;

        const fromData = {name, email, phone ,noOfPerson, date, time, sms}



        // console.log(name, email, phone ,noOfPerson, date, time, sms);

        console.log(fromData);

        

    }

    return (
            <form className="form-control max-w-[995px] mx-auto grid grid-cols-1 gap-10" onSubmit={handleContactForm}>
                
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-full" />

                <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-full" />

                <div className='grid grid-cols-2 gap-[15px]'>
                    <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered" />
                    
                    <input type="text" name="noOfPerson" placeholder="Numbers Of Person" className="input input-bordered" />
                </div>

                <div className='grid grid-cols-2 gap-[15px]'>
                    <input type="text" name="date" placeholder="Date" className="input input-bordered" />
                    
                    <input type="text" name="time" placeholder="Time" className="input input-bordered" />
                </div>

                {/* <input type="text"  /> */}
                <textarea placeholder="Your Message" name="sms" className="input input-bordered w-full max-w-full"></textarea>
                {/* <button>Sunmit</button> */}

                {/* <div className='flex justify-center pb-[26px]'>
                    <input type="submit" placeholder="Time" className="input input-bordered btn greenBtn !text-center" />

                </div> */}
                <input type="submit" className="input input-bordered btn greenBtn !text-center" />


                

            </form>
    );
};

export default ContactForm;