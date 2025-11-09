// import React from 'react'
// import heroImg from "../../assets/images/Gemini_Generated_Image_5nnwjf5nnwjf5nnw.png"
// import CountUp from 'react-countup'
// import resume from '../../assets/data/resume'
// import { RiMailLine, RiGithubFill, RiLinkedinFill, RiCodeBoxFill, RiNodeTree, RiGraduationCapFill, RiTrophyFill, RiCodeSSlashLine } from 'react-icons/ri' // Import icons for stats
// import { FaLayerGroup } from 'react-icons/fa'; // Another icon option for projects

// const Hero = () => {

//   const handleClick = e => {
//     e.preventDefault();

//     const targetAttr = e.target.getAttribute('href');
//     const location = document.querySelector(targetAttr).offsetTop

//     window.scrollTo({
//         top: location - 80,
//         left: 0
//     })
//   }

//   return (
//     // NOTE: Ensure your main app background is set to the dark color (#2C2F33)
//     <section id='about' className='pt-14 bg-[#2C2F33] text-[#F0F0F0]'> 
//         <div className='container pt-14'>
//             <div className='md:flex items-center justify-between'>
            
//             {/* LEFT SIDE - TEXT & BUTTONS */}
//             <div className='w-full md:basis-1/2 order-2 md:order-1'> {/* Order changed for better mobile flow */}
//                 <h5 data-aos='fade-right' data-aos-duration='1000' className='font-[600] text-[#B0B3B8] text-[1rem]'>
//                     Hello, Welcome
//                 </h5>
//                 <h1 data-aos='fade-up' data-aos-duration='1200' className='text-white font-[800] text-[2.2rem] sm:text-[3.5rem] leading-[1.2] sm:leading-[1.1] mt-2'>
//                     I'm Ankit Prajapat
//                     <span className='block text-[#00BFFF] font-[700] text-[1.8rem] sm:text-[2.5rem]'>Full Stack Developer</span>
//                 </h1>

//                 <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay="300" className='flex items-center gap-6 mt-8'>
//                     <a href={resume?.link} download="Ankit_Prajapat_Resume">
//                         <button className='bg-[#00BFFF] text-black font-[600] flex items-center gap-2 py-3 px-5 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300'>
//                           <RiMailLine />
//                           Resume CV
//                         </button>
//                     </a>
//                     <a onClick={handleClick} href='#portfolio' className=' text-[#00BFFF] font-[600] text-[1rem] border-b border-solid border-[#00BFFF] hover:text-white transition duration-300'>
//                         See Portfolio
//                     </a>
//                 </div>

//                 {/* ABOUT TEXT */}
//                 <p data-aos='fade-left' data-aos-duration='1500' className='text-[#B0B3B8] mt-8 text-[1.1rem] leading-7 max-w-lg'>
//                     {resume?.about}
//                 </p>

//                 {/* FOLLOW LINKS */}
//                 <div className='flex items-center gap-6 mt-10'>
//                     <span className=' text-[#B0B3B8] text-[0.9rem] font-[600]'>
//                     Follow me:
//                     </span>
//                     <a href='https://github.com/ankit-prajapati-24' className='text-[#B0B3B8] text-[1.5rem] hover:text-[#00BFFF] transition duration-300'>
//                         <RiGithubFill />
//                     </a>
//                     <a href='https://www.linkedin.com/in/ankitprajapat810/' className='text-[#B0B3B8] text-[1.5rem] hover:text-[#00BFFF] transition duration-300'>
//                         <RiLinkedinFill />
//                     </a>
//                     <a href='#' className='text-[#B0B3B8] text-[1.5rem] hover:text-[#00BFFF] transition duration-300'>
//                         <RiCodeBoxFill />
//                     </a>
//                     <a href='#' className='text-[#B0B3B8] text-[1.5rem] hover:text-[#00BFFF] transition duration-300'>
//                         <RiNodeTree />
//                     </a>
//                 </div> 
//             </div>
            
//             {/* RIGHT SIDE - IMAGE & STATS CONTAINER */}
//             <div className='basis-1/2 flex flex-col items-center md:items-end justify-start order-1 md:order-2 mt-10 md:mt-0'>
                
//                 {/* IMAGE CONTAINER */}
//                 <figure data-aos='zoom-in' data-aos-duration='1500' className='flex items-center justify-center w-72 h-72 rounded-full overflow-hidden mb-10 shadow-2xl' 
//                 style={{backgroundImage: 'linear-gradient(135deg, #1A5078, #00BFFF)'}}>
//                     {/* Add object-cover to make sure image fills the circle neatly */}
//                     <img src={heroImg} alt='heroImg' className='w-[90%] h-[90%] object-cover rounded-full p-1' /> 
//                 </figure>

//                 {/* STATS SECTION - Placed below image on small screens, aligned on the right on large screens */}
//                 <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay="500" className='flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-6 md:w-full'>
//                     {/* CGPA */}
//                     <div className='text-center md:text-right min-w-[150px]'>
//                         <h2 className='text-[#00BFFF] font-[800] text-[2.5rem] leading-none'>
//                             <CountUp start={0} end={7.5} duration={2} decimals={1} separator="" decimal="." suffix=''/>
//                         </h2>
//                         <div className='flex items-center justify-center md:justify-end gap-1 mt-1'>
//                            <RiGraduationCapFill className='text-[#B0B3B8]'/>
//                            <h4 className='text-[#B0B3B8] font-[600] text-[1.1rem]'>B.Tech CGPA</h4>
//                         </div>
//                     </div>
//                     {/* 12th Board */}
//                     <div className='text-center md:text-right min-w-[150px]'>
//                         <h2 className='text-[#00BFFF] font-[800] text-[2.5rem] leading-none'>
//                             <CountUp start={0} end={86} duration={2} decimals={1} decimal="." suffix='6%'/>
//                         </h2>
//                         <div className='flex items-center justify-center md:justify-end gap-1 mt-1'>
//                            <RiTrophyFill className='text-[#B0B3B8]'/>
//                            <h4 className='text-[#B0B3B8] font-[600] text-[1.1rem]'>12<sup>th</sup> STATE Board</h4>
//                         </div>
//                     </div>
//                     {/* 10th Board */}
//                     <div className='text-center md:text-right min-w-[150px]'>
//                         <h2 className='text-[#00BFFF] font-[800] text-[2.5rem] leading-none'>
//                             <CountUp start={0} end={88} duration={2} decimals={1} decimal="." suffix='4%'/>
//                         </h2>
//                         <div className='flex items-center justify-center md:justify-end gap-1 mt-1'>
//                            <RiTrophyFill className='text-[#B0B3B8]'/>
//                            <h4 className='text-[#B0B3B8] font-[600] text-[1.1rem]'>10<sup>th</sup> STATE Board</h4>
//                         </div>
//                     </div>
//                     {/* Projects */}
//                     <div className='text-center md:text-right min-w-[150px]'>
//                         <h2 className='text-[#00BFFF] font-[800] text-[2.5rem] leading-none'>
//                             <CountUp start={0} end={6} duration={2} suffix='+'/>
//                         </h2>
//                         <div className='flex items-center justify-center md:justify-end gap-1 mt-1'>
//                            <FaLayerGroup className='text-[#B0B3B8]'/>
//                            <h4 className='text-[#B0B3B8] font-[600] text-[1.1rem]'>Projects Built</h4>
//                         </div>
//                     </div>
//                 </div>

//             </div>
            
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero

import React, { useState, useEffect, useRef, useMemo } from 'react';
import heroImg from "../../assets/images/Gemini_Generated_Image_5nnwjf5nnwjf5nnw.png"
import { RiMailLine, RiGithubFill, RiLinkedinFill, RiCodeBoxFill, RiNodeTree, RiGraduationCapFill, RiTrophyFill, RiCodeSSlashLine } from 'react-icons/ri' // Import icons for stats
import {FaLayerGroup} from 'react-icons/fa'; // Another icon option for projects
// Mock Data (Since external files like assets/data/resume cannot be imported in this environment)
const resume = {
  link: '#',
  about: "I'm a passionate Full Stack Developer specializing in modern web technologies. I thrive on building scalable and efficient applications, translating complex requirements into elegant, user-friendly solutions. I am committed to continuous learning and delivering high-quality code.",
};

// Placeholder image URL
// const heroImg = "https://placehold.co/350x350/000/00BFFF?text=Ankit+Prajapat";

// --- Custom Components for Self-Contained Solution ---

// 1. Icon Replacements (using inline SVG for the most common icons)
const Icon = ({ path, className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
);

// const RiMailLine = <Icon className="text-xl" path="M2.27 4.19a2 2 0 0 1 1.48-.68h16.5a2 2 0 0 1 1.48.68l-8 7.33a2 2 0 0 1-2.95 0zM22.5 6.4v11.2a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2V6.4L12 14.7z" />;
// const RiGithubFill = <Icon className="text-2xl" path="M12 2C6.477 2 2 6.467 2 11.963a9.921 9.921 0 0 0 6.84 9.475c.498.092.682-.218.682-.486v-1.728c-3.528.767-4.275-1.69-4.275-1.69-.58-.1.68-.485.68-.485.673-.46.053-.45.053-.45c.74.05 1.13.76.1.75c1.47 0 2.22-.92 2.22-.92.355-.78.937-1.3 1.96-1.5c-.066-.353-.255-.658-.5-.87-1.897-.207-3.896-.948-3.896-4.145 0-.91.325-1.65.856-2.22-.09-.207-.37-1.047.087-2.18c0 0 .7-.22 2.27.84c1.157-.32 2.373-.48 3.593-.48s2.436.16 3.593.48c1.57-1.06 2.27-.84 2.27-.84.457 1.133.177 1.973.087 2.18.53.57.856 1.31.856 2.22 0 3.2-2 3.938-3.9 4.145-.25.21-.44.515-.5.87v2.583c0 .268.184.58.68.486A9.92 9.92 0 0 0 22 11.963C22 6.467 17.523 2 12 2z" />;
// const RiLinkedinFill = <Icon className="text-2xl" path="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 8H5v9h3zm4 0h-3v9h3zm4 0h-3v9h3zm-4-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />;
// const RiCodeBoxFill = <Icon className="text-2xl" path="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4.7 6.4L5.5 12l2.2 2.6L8 14.3a.6.6 0 0 0 0-.6l-1.3-1.7 1.3-1.7a.6.6 0 0 0 0-.6zm6.6 3.2l2.2-2.6-2.2-2.6a.6.6 0 0 0-.9.6l1.3 1.7-1.3 1.7a.6.6 0 0 0 .9.6zM12 8l4 8H8l4-8z" />;
// const RiNodeTree = <Icon className="text-2xl" path="M10 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm2 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8 8h3.5l1 1h4V9a2 2 0 0 0-2-2h-3l-2-2H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3.5l1 1H16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.5l1 1H16a2 2 0 0 0 2-2v-2z" />; // Placeholder, using RiNodeTree path
// const RiGraduationCapFill = <Icon className="text-xl" path="M12 3a2 2 0 0 1 2 2v.5h-4V5a2 2 0 0 1 2-2zm5.7 1.3l-5-2.5a2 2 0 0 0-3.4 0l-5 2.5a2 2 0 0 0-1.3 1.8v10.4a2 2 0 0 0 1.3 1.8l5 2.5a2 2 0 0 0 1.8 0l5-2.5a2 2 0 0 0 1.3-1.8V6.1a2 2 0 0 0-1.3-1.8zM12 18.2L7 15.7V7.1l5 2.5zm5-2.5l-5 2.5V9.6l5-2.5z" />;
// const RiTrophyFill = <Icon className="text-xl" path="M21 21H3v2h18v-2zm-8.5-8.5V2h-1v10.5h1zm-5 0V2h-1v10.5h1zm11 0V2h-1v10.5h1zM17 14c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm-10 0c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm-2 2h2v4H5v-4zm10 0h2v4h-2v-4z" />;
// const FaLayerGroup = <Icon className="text-xl" path="M12 1L3 5v14l9 4 9-4V5l-9-4zm0 4.2l6.2 3.1-6.2 3.1-6.2-3.1zm0 7.2l6.2-3.1-1.3-3.9-4.9 2.5-4.9-2.5-1.3 3.9z" />; // Placeholder, using FaLayerGroup path

// 2. CountUp Replacement (Simple Number Animation Hook)
const AnimatedNumber = ({ end, duration, decimals = 0, suffix = '', decimal = '.', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.current.unobserve(entry.target);
      }
    }, { threshold: 0.5 }); // Start animation when 50% visible

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [end, duration, decimals, prefix, suffix, decimal]);

  const startAnimation = () => {
    const startTime = performance.now();
    const totalDuration = duration * 1000;
    const initialValue = 0;

    const animate = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const value = initialValue + (end - initialValue) * progress;

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const displayValue = (Math.round(count * (10 ** decimals)) / (10 ** decimals)).toFixed(decimals);

  return <span ref={ref}>{prefix}{displayValue.replace('.', decimal)}{suffix}</span>;
};

// --- Star Particle Component (for background animation) ---
const StarParticle = () => {
  const size = Math.random() * 2 + 1; // 1px to 3px
  const duration = Math.random() * 8 + 4; // 4s to 12s
  const delay = Math.random() * 12;

  const style = useMemo(() => ({
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    opacity: 0.5 + Math.random() * 0.5,
  }), [size, duration, delay]);

  return (
    <div
      className="star-particle absolute bg-white rounded-full shadow-lg"
      style={style}
    />
  );
};


// --- Main Hero Component ---
 
const Hero = () => {

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0
    });
  };

  // Custom Tailwind classes for the aesthetic
  const NEON_BLUE = '#00BFFF';
  const BG_DARK = '#2C2F33'; // Even darker background for more contrast
  
  // --- Style for the Geometric Image Placeholder (Approximation) ---
  const ImageContainerStyle = {
      backgroundImage: 'linear-gradient(135deg, #1A5078, #00BFFF)',
      // Using a custom clip path for a hexagonal shape approximation
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      boxShadow: `0 0 40px ${NEON_BLUE}` // Inner shadow for glow effect
  };
  // Resetting clip-path for the image inside
  const ImageStyle = {
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  };

  const NUM_PARTICLES = 50;
  const particles = useMemo(() => Array(NUM_PARTICLES).fill(0).map((_, i) => <StarParticle key={i} />), []);


  // Inject custom CSS for background animation
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      .star-particle {
        animation: twinkle 4s ease-in-out infinite alternate;
      }
      @keyframes twinkle {
        0% { transform: scale(1); opacity: 0.2; }
        50% { transform: scale(1.5); opacity: 1; }
        100% { transform: scale(1); opacity: 0.2; }
      }
      .grid-bg {
        background-image: linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
                          linear-gradient(to bottom, #ffffff0a 1px, transparent 1px);
        background-size: 40px 40px;
        animation: pan 60s linear infinite;
        opacity: 0.3;
      }
      @keyframes pan {
        from { background-position: 0 0; }
        to { background-position: 40px 40px; }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);


  // --- Component JSX ---
  return (
    // Outer container for the entire hero section with dynamic background
    <section id='about' className={`relative min-h-screen pt-10 pb-10 sm:pt-20 bg-[${BG_DARK}]  text-white flex justify-center items-center font-inter overflow-hidden`}>
      
      {/* Dynamic Animated Background Layer (Grid and Stars) */}
      <div className="absolute inset-0 z-0">
        <div className="grid-bg absolute inset-0"></div>
        <div className="absolute inset-0">
          {particles}
        </div>
        {/* Additional large, diffused glow spot */}
        <div className={`absolute top-0 left-0 w-96 h-96 bg-[${NEON_BLUE}] opacity-10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2`}></div>
      </div>


      {/* Main Content Container - Elevated above the background (z-10) */}
      <div 
        className={`relative z-10 container max-w-7xl mx-auto p-6 md:p-10 border-2 border-[${NEON_BLUE}] rounded-2xl shadow-2xl transition-all duration-500`}
        style={{ boxShadow: `0 0 30px ${NEON_BLUE}` }}
        data-aos='fade-in'
        data-aos-duration='1000'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center'>
          
          {/* LEFT SIDE - TEXT & BUTTONS (Column 1) */}
          <div className='order-2 md:order-1'>
            <h5 data-aos='fade-right' data-aos-duration='1000' className='font-light text-lg text-gray-400'>
              Hello, Welcome
            </h5>
            <h1 data-aos='fade-up' data-aos-duration='1200' className='text-white font-extrabold text-[2.5rem] sm:text-[4.5rem] leading-tight mt-2'>
              I'm Ankit Prajapat
              <span className='block text-[#00BFFF] font-bold text-[2rem] sm:text-[3rem]'>Full Stack Developer</span>
            </h1>

            {/* CTA Buttons */}
            <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay="300" className='flex items-center gap-6 mt-8'>
              <a href={resume?.link} download="Ankit_Prajapat_Resume">
                <button className={`bg-[${NEON_BLUE}] text-black font-semibold flex items-center gap-2 py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105`}>
                  {RiMailLine}
                  Resume CV
                </button>
              </a>
              <a onClick={handleClick} href='#portfolio' className={`text-[${NEON_BLUE}] font-semibold text-lg hover:text-white transition duration-300 border-b border-solid border-transparent hover:border-white`}>
                See Portfolio
              </a>
            </div>

            {/* ABOUT TEXT */}
            <p data-aos='fade-left' data-aos-duration='1500' className='text-gray-400 mt-8 text-lg leading-7 max-w-lg'>
              {resume?.about}
            </p>

            {/* FOLLOW LINKS */}
            <div className='flex items-center gap-6 mt-10'>
              <span className='text-gray-400 text-lg font-semibold'>
                Follow me:
              </span>
              <a href='https://github.com/ankit-prajapati-24' target="_blank" rel="noopener noreferrer" className={`text-gray-400 text-2xl hover:text-[${NEON_BLUE}] transition duration-300`}>
                <RiGithubFill/>
              </a>
              <a href='https://www.linkedin.com/in/ankitprajapat810/' target="_blank" rel="noopener noreferrer" className={`text-gray-400 text-2xl hover:text-[${NEON_BLUE}] transition duration-300`}>
                <RiLinkedinFill/>
              </a>
              <a href='#' className={`text-gray-400 text-2xl hover:text-[${NEON_BLUE}] transition duration-300`}>
                <RiCodeBoxFill/>
              </a>
              <a href='#' className={`text-gray-400 text-2xl hover:text-[${NEON_BLUE}] transition duration-300`}>
                <RiNodeTree/>
              </a>
            </div> 
          </div>
          
          {/* RIGHT SIDE - IMAGE & DECORATION (Column 2) */}
          <div className='basis-1/2 flex items-center justify-center order-1 md:order-2 md:mt-0'>
            {/* IMAGE CONTAINER - Hexagonal Approximation using clip-path */}
            <figure data-aos='zoom-in' data-aos-duration='1500' className='w-80 h-80 sm:w-96 sm:h-96 overflow-hidden flex items-center justify-center p-2' 
            style={ImageContainerStyle}>
              {/* Image inside the container */}
              <img 
                src={heroImg} 
                alt='Ankit Prajapat' 
                className='w-full h-full object-cover'
                style={ImageStyle}
              /> 
            </figure>
          </div>
          
        </div> {/* End of main content grid */}

        {/* --- STATS SECTION (Full Width at the Bottom) --- */}
        <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay="700" className='mt-16 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between gap-8'>
            
            {/* Group 1: Academic Scores */}
            <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
                {/* CGPA */}
                <div className='text-left min-w-[150px]'>
                    <div className='flex items-center justify-start gap-2 mb-1'>
                        <RiGraduationCapFill />
                        <h4 className='text-gray-400 font-medium text-base'>B.Tech CGPA</h4>
                    </div>
                    <h2 className={`text-[${NEON_BLUE}] font-extrabold text-[3rem] leading-none`}>
                        <AnimatedNumber end={7.5} duration={2.5} decimals={1} />
                    </h2>
                </div>
                {/* 10th Board */}
                <div className='text-left min-w-[150px]'>
                    <div className='flex items-center justify-start gap-2 mb-1'>
                        <RiTrophyFill />
                        <h4 className='text-gray-400 font-medium text-base'>10<sup className='text-xs'>th</sup> STATE Board</h4>
                    </div>
                    <h2 className={`text-[${NEON_BLUE}] font-extrabold text-[3rem] leading-none`}>
                        <AnimatedNumber end={88.4} duration={2.5} decimals={1} suffix='%' />
                    </h2>
                </div>
            </div>

            {/* Group 2: Projects and 12th Board */}
            <div className='flex flex-wrap justify-center sm:justify-end gap-8'>
                {/* 12th Board */}
                <div className='text-left min-w-[150px]'>
                    <div className='flex items-center justify-start gap-2 mb-1'>
                        <RiTrophyFill />
                        <h4 className='text-gray-400 font-medium text-base'>12<sup className='text-xs'>th</sup> STATE Board</h4>
                    </div>
                    <h2 className={`text-[${NEON_BLUE}] font-extrabold text-[3rem] leading-none`}>
                        <AnimatedNumber end={86.6} duration={2.5} decimals={1} suffix='%' />
                    </h2>
                </div>
                {/* Projects */}
                <div className='text-left min-w-[150px]'>
                    <div className='flex items-center justify-start gap-2 mb-1'>
                        <FaLayerGroup/>
                        <h4 className='text-gray-400 font-medium text-base'>Projects Built</h4>
                    </div>
                    <h2 className={`text-[${NEON_BLUE}] font-extrabold text-[3rem] leading-none`}>
                        <AnimatedNumber end={6} duration={2.5} suffix='+' />
                    </h2>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Hero;