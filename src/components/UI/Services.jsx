
import React from 'react'
import frontendImg from "../../assets/images/front-end.png"
import backendImg from "../../assets/images/backend.png"

const Services = () => {
  return (
    <section id="services">
    
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5 '>Skills Showcase</h2>
                <p className='lg:max-w-[600] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>A passion for Web Development MERN Stack. Skilled in C++, ReactJS, NodeJS and DSA. Recently developed a online education plateform Study Notion for interacting and seamless learning . Seeking a challenging Software Engineer role to contribute to innovative projects and build impactful applications. </p>
            </div>
        </div>

        <div className='flex flex-col justify-center sm:py-12'>
            <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:py-0'>
                
                <div className='relative text-gray-700  antialiased text-sm font-semibold'>
                
                     {/* LINE */}
                    <div className=' hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>

                        {/* left card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-200'>
                                            <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Frontend Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Proficient in HTML, CSS, TailwindCSS, JS, ReactJs and Responsive Design</p></div>
                                </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center' >
                                    <figure>
                                        <img src={frontendImg} alt='frontend' />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* Right Card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-duration='1300' data-aos-delay='50' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-200'>
                                            <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Backend Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I have expertise in NodeJS, MongoDb Database, Cloudinary, Nodemailer and Render Services</p>
                                        </div>
                                </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center' >
                                    <figure>
                                        <img src={backendImg} alt='frontend' />
                                    </figure>
                                </div>

                            </div>
                        </div>
                        
                        {/* Left */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-duration='1400' data-aos-delay='100' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-200'>
                                            <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Data Structures & C++</h3>
                                        </div>
                                </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center' >
                                    <figure>
                                        <img src={frontendImg} alt='frontend' />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* Right Card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-duration='1500' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-200'>
                                            <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white
                                            group-hover:font-[600] text-xl'>Leadership and Public Speaking</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I demonstrate my Leadership and Maturity as Vide President of College. I have perform stage Anchoring in college feasts.</p>
                                        </div>
                                </div>
                                </div>

                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center' >
                                    <figure>
                                        <img src={backendImg} alt='frontend' />
                                    </figure>
                                </div>

                            </div>
                        </div>

                 </div>

               
            </div>
        </div>

    </section>
  )
}

export default Services
