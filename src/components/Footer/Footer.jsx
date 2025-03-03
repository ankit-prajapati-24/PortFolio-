

import React from 'react'

const Footer = () => {

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
    const mailtoLink = `mailto:ayushpatidar7441@gmail.com?subject=${encodeURIComponent("From Portfolio")}&body=${encodeURIComponent("")}`;
    window.location.href = mailtoLink;
  };



  return (
   <section className='bg-[#12141e] pt-12'>
   
    <div className='container'>
      
      {/* Top footer */}
      <div className='sm:flex items-center justify-between md:gap-8'>
        
        <div className='w-full sm:w-1/2'>
          <h2 className='text-[26px] leading-10 text-white font-[600] md-5 md:text-[1.7rem]'>Do you want to collaborate for making beautiful products ?</h2>
        
          <button onClick={sendMail} className='bg-primaryColor text-white font-[400] flex flex-col items-center gap-1 p-2 rounded-md mt-3'>
            <div className='flex  items-center gap-1'>
              <i class="ri-mail-line text-md"></i><span className='text-md tracking-wider'>Send Mail</span>
            </div>
            <p className='text-gray-200 text-sm'>ankitprajapat4565@gmail.com</p>
          </button>

          <p className='text-gray-200 mt-2'>or call : +91 81034 - 01549</p>  
        </div>

        <div className='w-full sm:w-1/2 '>
            <p className=' text-gray-300 leading-7 mt-4 sm:mt-0'>
               " I don't take myself serious, I take my work serious. "  
            </p>

            {/* Links */}
            <div className='flex items-center gap-4 mt-8'>
                  <span className=' text-white text-[15px] font-[600]'>
                  Follow me:
                  </span>

                  <a href='https://github.com/ankit-prajapati-24' className='text-gray-300 text-[18px] font-[600]'>
                    <i class="ri-github-fill"></i>
                  </a>
                  <a href='https://www.linkedin.com/in/ankitprajapat810/' className='text-gray-300 text-[18px] font-[600]'>
                    <i class="ri-linkedin-fill"></i>
                  </a>
                  <a href='' className='text-gray-300 text-[18px] font-[600]'>
                    <i class="ri-code-box-fill"></i>
                  </a>
                  <a href='' className='text-gray-300 text-[18px] font-[600]'>
                    <i class="ri-node-tree"></i>
                  </a>

            </div>  
        </div>

      </div>


      {/* Bottom footer */}
      <div className='mt-20'>
        <ul className='flex items-center justify-center gap-4'>
        <li>
          <a onClick={handleClick} className='text-gray-400 font-[600]' href='#about'>About</a>
        </li>
        <li>
          <a onClick={handleClick} className='text-gray-400 font-[600]' href='#services'>Skills</a>
        </li>
        <li>
          <a onClick={handleClick} className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a onClick={handleClick} className='text-gray-400 font-[600]' href='#achievements'>Achievements</a>
        </li>
        </ul>
      </div>
    
    </div>

    <div className='bg-[#1b1e29] py-3 mt-8'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            
            <div className='hidden sm:block'>
                <div className='flex items-center justify-center gap-[10px] '>
                  <span className='w-[35px] h-[35px] rounded-full text-white font-[600] bg-[#2b2d33] text-[18px] flex items-center justify-center  '>AP</span>
                  <div className='leading-[20px]'>
                        <h2 className='text-xl text-gray-300 font-[700]'>Ankit</h2>
                        <p className='text-[1rem] text-gray-400'>Prajapat</p>
                    </div>
                </div>
            </div>

            <div  className=''>
              <p className=' text-gray-400 '>Copyright {year} developed My Ankit with ❤️ - All right reserved.</p>
            </div>

          </div>
        </div>
      </div>
   </section>

  )
}

export default Footer
