import React from 'react'
import { RiMailLine, RiWhatsappLine, RiGithubFill, RiLinkedinFill, RiCodeBoxFill, RiNodeTree } from 'react-icons/ri';

const Footer = () => {

    // --- COLOR CONSTANTS ---
    const DARK_BG = '#2C2F33';          
    const ACCENT_BLUE = '#00BFFF';      
    const PRIMARY_TEXT = '#F0F0F0';     
    const SECONDARY_TEXT = '#B0B3B8';   
    const DEEPER_BG = '#1e2124';        // For the bottom copyright bar
    
    const year = new Date().getFullYear();
    
    const handleClick = e => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0
        })
    }

    const sendMail = (e) => {
        e.preventDefault();
        // NOTE: The email address was ayushpatidar7441@gmail.com in the original function but 
        // ankitprajapat4565@gmail.com in the button text. Using ankitprajapat4565@gmail.com for consistency.
        const emailAddress = "ankitprajapat4565@gmail.com";
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent("Collaboration Request from Portfolio")}&body=${encodeURIComponent("Hello Ankit,\n\nI'm reaching out regarding...")}`;
        window.location.href = mailtoLink;
    };


    return (
        // Main Footer background
        <section className={`bg-[${DARK_BG}] pt-12`}>
        
        <div className='container'>
            
            {/* Top footer: CTA and Quote */}
            <div className='sm:flex items-center justify-between md:gap-12 border-b border-b-[#3a3f47] pb-10'>
                
                <div className='w-full sm:w-1/2 mb-8 sm:mb-0'>
                    <h2 className={`text-[1.8rem] leading-10 text-[${PRIMARY_TEXT}] font-[800] mb-4 md:text-[2.2rem]`}>
                        Do you want to collaborate for making beautiful products?
                    </h2>
                
                    {/* Send Mail Button (Primary CTA) */}
                    <button onClick={sendMail} 
                        className={`bg-[${ACCENT_BLUE}] text-black font-[600] flex flex-col items-start gap-1 p-3 rounded-lg mt-3 transition duration-300 hover:bg-opacity-90 shadow-lg`}>
                        <div className='flex items-center gap-2'>
                            <RiMailLine className='text-xl'/>
                            <span className='text-lg tracking-wider'>Send Mail</span>
                        </div>
                        <p className='text-black text-sm font-[400]'>ankitprajapat4565@gmail.com</p>
                    </button>

                    <p className={`text-[${SECONDARY_TEXT}] mt-4 text-[1rem]`}>
                        or call: +91 81034 - 01549 <RiWhatsappLine className='inline-block text-xl text-green-500 ml-1' />
                    </p> 
                </div>

                <div className='w-full sm:w-1/2 '>
                    <p className={`text-[${SECONDARY_TEXT}] text-[1.1rem] italic leading-7 mt-4 sm:mt-0`}>
                        “I don't take myself serious, I take my work serious.” 
                    </p>

                    {/* Follow Links */}
                    <div className='flex items-center gap-6 mt-8'>
                        <span className={`text-[${PRIMARY_TEXT}] text-[1.1rem] font-[600]`}>
                        Follow me:
                        </span>

                        {/* Social Links Styled with Hover Effect */}
                        <a href='https://github.com/ankit-prajapati-24' className={`text-[${SECONDARY_TEXT}] text-2xl hover:text-[${ACCENT_BLUE}] transition duration-300`}>
                          <RiGithubFill />
                        </a>
                        <a href='https://www.linkedin.com/in/ankitprajapat810/' className={`text-[${SECONDARY_TEXT}] text-2xl hover:text-[${ACCENT_BLUE}] transition duration-300`}>
                          <RiLinkedinFill />
                        </a>
                        <a href='#' className={`text-[${SECONDARY_TEXT}] text-2xl hover:text-[${ACCENT_BLUE}] transition duration-300`}>
                          <RiCodeBoxFill />
                        </a>
                        <a href='#' className={`text-[${SECONDARY_TEXT}] text-2xl hover:text-[${ACCENT_BLUE}] transition duration-300`}>
                          <RiNodeTree />
                        </a>

                    </div> 
                </div>

            </div>


            {/* Bottom footer: Navigation */}
            <div className='mt-10'>
                <ul className='flex items-center justify-center gap-6 sm:gap-10'>
                    {['#about', '#services', '#portfolio', '#achievements'].map((href, index) => (
                        <li key={index}>
                            <a onClick={handleClick} className={`text-[${SECONDARY_TEXT}] font-[600] hover:text-[${ACCENT_BLUE}] transition duration-300`} href={href}>
                                {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        
        </div>

        {/* Copyright Bar */}
        <div className={`bg-[${DEEPER_BG}] py-4 mt-12`}>
            <div className='container'>
                <div className='flex items-center justify-center sm:justify-between'>
                    
                    {/* Logo/Name */}
                    <div className='hidden sm:block'>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <span className={`w-[35px] h-[35px] rounded-full text-black font-[600] bg-[${ACCENT_BLUE}] text-[18px] flex items-center justify-center`}>AP</span>
                            <div className='leading-[20px]'>
                                <h2 className={`text-xl text-[${PRIMARY_TEXT}] font-[700]`}>Ankit</h2>
                                <p className={`text-[1rem] text-[${SECONDARY_TEXT}]`}>Prajapat</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Text */}
                    <div className=''>
                        <p className={`text-[${SECONDARY_TEXT}] text-center sm:text-left`}>
                            Copyright {year} developed by Ankit with ❤️ - All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
        </section>

    )
}

export default Footer