import React, { useEffect, useRef } from 'react'

const Header = () => {


    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = ()=> {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            }else{
                headerRef.current.classList.remove('sticky__header');
            }
        })
    }

    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        console.log("object : ", targetAttr)
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0
        })

    }

    useEffect(() => {
        stickyHeaderFunc();
        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[])


    const toogleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className='container'> 
            <div className='flex items-center justify-between'>

                {/* LOGO */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] aspect-square bg-primaryColor
                    text-white text-[16px] font-[500] rounded-full flex items-center justify-center
                    '>AP</span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700]'>Ankit</h2>
                        <p className='text-[1rem]'>Prajapat</p>
                    </div>
                </div>

                {/* MENU */}
                <div className='menu' ref={menuRef} onClick={toogleMenu}>
                 <ul className='flex items-center gap-10'>
                 <li>
                    <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#about'>About</a>
                 </li>
                 <li>
                    <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#services'>Skills</a>
                 </li>
                 <li>
                    <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#portfolio'>Portfolio</a>
                 </li>
                 <li>
                    <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#achievements'>Achievements </a>
                 </li>

                 </ul>

                </div>
                
                {/* LETS TALK */}
                <div className='flex items-center gap-4'>
                    <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-md max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease in duration-500'>
                        <a onClick={handleClick} href='#contact' className='flex items-center gap-1'><i class="ri-send-plane-line" ></i>Let's Talk</a>
                    </button>            
                    <span onClick={toogleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                       <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
