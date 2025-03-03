import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const sendMessage = (formData) => {
        const phoneNumber = '918103401549'; 
        const message = `From: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject}, Message: ${formData.message} `
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const formHandler = (e) => {
        e.preventDefault();
        console.log("FORM DATA : ", formData);  
        // send to whatsapp
        sendMessage(formData);

        if(!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill all fields!");
        }
        else
        toast.success("Message Sent!")
    }   


  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className=' text-headingColor font-[700] text-[2.5rem] mb-8 '>Get in Touch</h2>

            <div className='md:flex justify-between items-center'>
                
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
           <iframe 
    width="600" 
    height="450" 
    // style="border:0;" 
    loading="lazy" 
    allowfullscreen 
    src="https://www.bing.com/maps/embed?h=400&w=500&cp=22.956969~76.043757&lvl=13&typ=d&sty=r&src=SHELL&FORM=MBEDV8">
</iframe>
    </div>

                <div className='w-full md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            
                    <form onSubmit={formHandler} className='w-full'>
                        <div className='mb-5'>
                            <input 
                            type='text' 
                            placeholder='Enter your name' 
                            className='w-full p-3 focus:outline-none rounded-md'
                            onChange={e => formData.name = e.target.value}
                            />

                        </div>

                        <div className='mb-5'>
                            <input 
                            type='text' 
                            placeholder='Enter your email' 
                            className='w-full p-3 focus:outline-none rounded-md'   
                            onChange={e => formData.email = e.target.value}
                            />
                        </div>

                        <div className='mb-5'>
                            <input 
                            type='text' 
                            placeholder='Subject' 
                            className='w-full p-3 focus:outline-none rounded-md' 
                            onChange={e => formData.subject = e.target.value}  
                            />
                        </div>

                        <div className='mb-5'>
                            <textarea
                            type='text' 
                            placeholder='Message goes here....'
                            rows={4}
                            className='w-full p-3 focus:outline-none rounded-md' 
                            onChange={e => formData.message = e.target.value}  
                            />
                        </div>
                        <button type='submit' className='w-full p-3 focus:outline-none rounded-md hover:bg-smallTextColor text-white bg-primaryColor ease-in duration-200'>Send on Whatsapp</button>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
