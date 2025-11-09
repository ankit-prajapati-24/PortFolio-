import React, { useEffect, useRef } from 'react';
import { RiSendPlaneLine, RiMenuLine } from 'react-icons/ri';

const Header = () => {
    // --- COLOR CONSTANTS FOR DARK THEME ---
    const DARK_BG = '#2C2F33';      // Header Background (Dark Slate)
    const PRIMARY_TEXT = '#F0F0F0'; // Main Text (White/Light Gray)
    const ACCENT_BLUE = '#00BFFF';  // Accent Color (Electric Blue)
    const SECONDARY_TEXT = '#B0B3B8'; // Links/Subtle Text (Subtler Gray)

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });  
    };

    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);

    const toogleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header ref={headerRef} className={`w-full h-[80px] leading-[80px] flex items-center bg-[${DARK_BG}] shadow-md`}>
            <div className='container flex items-center justify-between'> 

                {/* LOGO & Name - Centered/Primary */}
                <div className='flex items-center gap-[10px]'>
                    <span 
                        className={`w-[40px] h-[40px] aspect-square bg-[${ACCENT_BLUE}]
                        text-black text-[18px] font-[600] rounded-lg flex items-center justify-center
                        shadow-lg`} // Slightly larger, square with rounded corners
                    >AP</span>
                    <div className='leading-[20px]'>
                        <h2 className={`text-2xl text-[${PRIMARY_TEXT}] font-[800]`}>Ankit <span className={`text-[${ACCENT_BLUE}]`}>Prajapat</span></h2> {/* Name on one line, last name accented */}
                    </div>
                </div>

                {/* MENU - Centered or slightly offset */}
                {/* For larger screens, menu is inline. For small screens, it's a mobile overlay */}
                <div className='hidden md:flex flex-grow justify-center menu' ref={menuRef}> {/* Centering menu on desktop */}
                   <ul className='flex items-center gap-10'>
                   {['#about', '#services', '#portfolio', '#achievements'].map((href, index) => (
                       <li key={index}>
                           <a 
                               onClick={handleClick} 
                               className={`text-[${SECONDARY_TEXT}] font-[600] text-lg hover:text-[${ACCENT_BLUE}] transition duration-300`} 
                               href={href}
                           >
                              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                           </a>
                       </li>
                   ))}
                   </ul>
                </div>
                
                {/* LETS TALK & Mobile Menu Toggle - Right Aligned */}
                <div className='flex items-center gap-4'>
                    <button 
                        className={`flex items-center gap-2 text-[${ACCENT_BLUE}] font-[600] 
                        border border-solid border-[${ACCENT_BLUE}] py-2 px-4 rounded-full max-h-[40px] 
                        hover:bg-[${ACCENT_BLUE}] hidden md:flex hover:font-[500] ease-in duration-300 shadow-md`} // Rounded button
                    >
                        <a onClick={handleClick} href='#contact' className='flex items-center gap-1'>
                           <RiSendPlaneLine />
                           Let's Talk
                        </a>
                    </button>         
                    <span onClick={toogleMenu} className={`text-3xl text-[${PRIMARY_TEXT}] md:hidden cursor-pointer`}>
                       <RiMenuLine />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;