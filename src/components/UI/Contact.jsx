import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { RiWhatsappLine, RiMapPinLine } from 'react-icons/ri';

// --- COLOR CONSTANTS ---
const DARK_BG = '#2C2F33';          
const ACCENT_BLUE = '#00BFFF';      
const PRIMARY_TEXT = '#F0F0F0';     
const SECONDARY_TEXT = '#B0B3B8';   
const CARD_BG = '#1e2124';          

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Correct way to handle input changes: use the setFormData setter
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendMessage = (data) => {
        const phoneNumber = '918103401549'; 
        const message = `From: ${data.name}, Email: ${data.email}, Subject: ${data.subject}, Message: ${data.message} `;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const formHandler = (e) => {
        e.preventDefault();
        
        if(!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill all fields!");
            return;
        }

        // Send to WhatsApp
        sendMessage(formData);
        toast.success("Message Sent! Opening WhatsApp...");
        
        // Optional: Clear form after sending
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }   


  return (
    <section id='contact' className={`pb-16 pt-16 bg-[${DARK_BG}]`}>
        <div className='container'>
            <h2 className={`text-[${PRIMARY_TEXT}] font-[800] text-[2.5rem] mb-12 text-center`}>Get in Touch</h2>

            <div className='md:flex justify-between items-stretch gap-10'>
                
                {/* CONTACT INFO / MAP BLOCK */}
                <div className={`w-full md:w-1/2 h-auto rounded-xl overflow-hidden p-6 bg-[${CARD_BG}] shadow-2xl flex flex-col justify-between`}>
                    
                    <h3 className={`text-[${PRIMARY_TEXT}] text-2xl font-[700] mb-6 border-b border-b-[#3a3f47] pb-3`}>
                        Contact Information
                    </h3>

                    <div className='mb-6'>
                        <p className={`text-[${SECONDARY_TEXT}] mb-4 flex items-center gap-2`}>
                            <RiMapPinLine className={`text-[${ACCENT_BLUE}] text-xl`} />
                            Location: Dewas, Madhya Pradesh, India
                        </p>
                        <p className={`text-[${SECONDARY_TEXT}] mb-4 flex items-center gap-2`}>
                            <RiWhatsappLine className={`text-[${ACCENT_BLUE}] text-xl`} />
                            Phone: +91 81034 01549 (WhatsApp only)
                        </p>
                    </div>

                    {/* Map Placeholder */}
                    <div className='w-full flex-grow rounded-xl overflow-hidden min-h-[250px]'>
                        <iframe 
                            title='Map Location'
                            width="100%" 
                            height="100%" 
                            loading="lazy" 
                            allowFullScreen 
                            // Using a dark style map for better theme integration
                            src="https://www.bing.com/maps/embed?h=400&w=500&cp=22.956969~76.043757&lvl=13&typ=d&sty=g&src=SHELL&FORM=MBEDV8">
                        </iframe>
                    </div>
                </div>


                {/* CONTACT FORM */}
                <div className={`w-full md:w-1/2 rounded-xl bg-[${CARD_BG}] px-6 lg:px-8 py-8 shadow-2xl`}>
                    
                    <form onSubmit={formHandler} className='w-full'>
                        {/* Input fields styled for dark theme */}
                        {['name', 'email', 'subject'].map((field) => (
                            <div className='mb-5' key={field}>
                                <input 
                                    type={field === 'email' ? 'email' : 'text'} 
                                    placeholder={`Enter your ${field}`} 
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    // Styling the input field for the dark background
                                    className={`w-full p-3 focus:outline-none rounded-lg bg-[#3a3f47] text-[${PRIMARY_TEXT}] border border-transparent focus:border-[${ACCENT_BLUE}] placeholder-[${SECONDARY_TEXT}]`}
                                    required={field !== 'subject'}
                                />
                            </div>
                        ))}

                        <div className='mb-5'>
                            <textarea
                                placeholder='Message goes here....'
                                name='message'
                                value={formData.message}
                                onChange={handleChange} 
                                rows={4}
                                // Styling the textarea
                                className={`w-full p-3 focus:outline-none rounded-lg bg-[#3a3f47] text-[${PRIMARY_TEXT}] border border-transparent focus:border-[${ACCENT_BLUE}] placeholder-[${SECONDARY_TEXT}]`}
                                required
                            />
                        </div>

                        {/* Submit Button styled with Accent Blue */}
                        <button 
                            type='submit' 
                            className={`w-full p-3 focus:outline-none rounded-full text-black bg-[${ACCENT_BLUE}] hover:bg-opacity-90 font-[600] ease-in duration-200 shadow-lg flex items-center justify-center gap-2`}
                        >
                            <RiWhatsappLine className='text-xl' /> Send on WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Toaster />
    </section>
  )
}

export default Contact