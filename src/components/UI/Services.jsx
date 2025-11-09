import React, { useState } from 'react';
import { RiLayoutFill, RiServerFill, RiBracesFill, RiCodeBoxFill } from 'react-icons/ri'; // RiCodeBoxFill for Languages

const Services = () => {
    // --- COLOR CONSTANTS FOR DARK THEME ---
    const DARK_BG = '#2C2F33';          // Section Background
    const ACCENT_BLUE = '#00BFFF';      // Accent Color (Primary)
    const PRIMARY_TEXT = '#F0F0F0';     // Main Text (Heading)
    const SECONDARY_TEXT = '#B0B3B8';   // Secondary Text (Description)
    const CARD_BG = '#1e2124';          // Slightly darker card background
    
    const [activeTab, setActiveTab] = useState(0); // 0: Frontend, 1: Backend, 2: DSA, 3: Languages

    const skillsData = [
        {
            icon: <RiLayoutFill />,
            title: "Frontend Development",
            description: "Proficient in HTML, CSS, TailwindCSS, JS, and ReactJs, with a focus on building robust, responsive, and highly interactive user interfaces. Committed to pixel-perfect design and modern component architecture."
        },
        {
            icon: <RiServerFill />,
            title: "Backend Development",
            description: "Expertise in the server-side with NodeJS and MongoDB (NoSQL). Skilled in creating secure RESTful APIs, utilizing Cloudinary for asset management, Nodemailer for transactional emails, and deploying reliable services on Render."
        },
        {
            icon: <RiBracesFill />,
            title: "DSA & C++",
            description: "Strong foundation in Data Structures and Algorithms using C++. Focused on competitive programming principles to write optimized, efficient, and scalable code for complex problem-solving scenarios."
        },
        // --- UPDATED CATEGORY: Programming Languages ---
        {
            icon: <RiCodeBoxFill />,
            title: "Programming Languages",
            description: "Solid foundational knowledge in core programming languages, including C++, C, and JavaScript, enabling effective development across system-level programming and modern web applications."
        },
    ];

    return (
        <section id="services" className={`py-16 bg-[${DARK_BG}]`}>
            <div className='container'>
                <div className='text-center mb-12'>
                    <h2 className={`text-[${PRIMARY_TEXT}] font-[800] text-[2.5rem] mb-4`}>Core Skill Focus</h2>
                    <p className={`lg:max-w-[700px] lg:mx-auto text-[${SECONDARY_TEXT}] font-[500] text-[1.1rem] leading-7`}>
                        A passionate Full Stack Developer specializing in the MERN Stack. Seeking a challenging Software Engineer role to contribute to innovative projects.
                    </p>
                </div>
            </div>

            <div className='container pt-8'>
                <div className='md:flex gap-10'>
                    
                    {/* LEFT SIDE: Skill Tabs/Buttons */}
                    <div data-aos='fade-right' data-aos-duration='1200' className='md:w-1/3 flex flex-col gap-3 mb-8 md:mb-0'>
                        {skillsData.map((skill, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300
                                ${activeTab === index 
                                    ? `bg-[${CARD_BG}] border-l-4 border-l-[${ACCENT_BLUE}] text-[${PRIMARY_TEXT}] shadow-lg` 
                                    : `bg-[${DARK_BG}] border-l-4 border-l-transparent text-[${SECONDARY_TEXT}] hover:text-[${ACCENT_BLUE}] hover:bg-[${CARD_BG}]`
                                }`}
                            >
                                <span className='text-3xl'>{skill.icon}</span>
                                <span className='font-[600] text-lg'>{skill.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Active Skill Content */}
                    <div data-aos='fade-left' data-aos-duration='1200' className={`md:w-2/3 p-8 rounded-xl shadow-2xl bg-[${CARD_BG}] border-t-4 border-t-[${ACCENT_BLUE}]`}>
                        <div className={`flex items-center gap-4 mb-4 text-[${ACCENT_BLUE}]`}>
                            <span className='text-5xl'>{skillsData[activeTab].icon}</span>
                            <h3 className={`text-[${PRIMARY_TEXT}] font-[800] text-3xl`}>{skillsData[activeTab].title}</h3>
                        </div>
                        <p className={`text-[${SECONDARY_TEXT}] text-[1.1rem] leading-7`}>
                            {skillsData[activeTab].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;