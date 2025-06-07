import React from 'react'
import heroImg from "../../assets/images/MY-Photo.png"
import CountUp from 'react-countup'
import resume from '../../assets/data/resume'
import MyPhoto from "../../assets/images/MY-Photo.png"
const Hero = () => {

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
        top: location - 80,
        left: 0
    })
  }

  return (
    <section id='about' className='pt-0'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
            
            {/* LEFT HERO */}
            <div className='w-full md:basis-1/2'>
                <h5 data-aos='fade-right' data-aos-duration='1500' className='font=[600] text-headingColor text-[16px]'>Hello, Welcome</h5>
                <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px]'>
                  I'm Ankit Prajapat <br/>Full Stack Developer
                </h1>

                <div data-aos='fade-up' data-aos-duration='1800'
                data-aos-delay="200"
                className='flex items-center gap-6 mt-7'>
                <a href={resume?.link}>
                    <button className='bg-primaryColor text-white font-[400] flex items-center gap-2 p-2 rounded-md'>
                    <i class="ri-mail-line"></i>Resume CV
                    </button></a>
                <a onClick={handleClick}  href='#portfolio' className=' text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See Portfolio</a>
                </div>


                <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-14  text-[18px] leading-7 sm:pl-14 sm:pr-10 sm:-ml-14 md:-ml-14'>
                  {resume?.about}
                </p>
                  {/* FOLLOW LINKS  */}
                <div className='flex items-center gap-9 mt-14'>
                  <span className=' text-smallTextColor text-[15px] font-[600]'>
                  Follow me:
                  </span>

                  <a href='https://github.com/ankit-prajapati-24' className='text-smallTextColor text-[18px] font-[600]'>
                    <i class="ri-github-fill"></i>
                  </a>
                  <a href='https://www.linkedin.com/in/ankitprajapat810/' className='text-smallTextColor text-[18px] font-[600]'>
                    <i class="ri-linkedin-fill"></i>
                  </a>
                  <a href='' className='text-smallTextColor text-[18px] font-[600]'>
                    <i class="ri-code-box-fill"></i>
                  </a>
                  <a href='' className='text-smallTextColor text-[18px] font-[600]'>
                    <i class="ri-node-tree"></i>
                  </a>

                </div>  
            </div>
            

            {/* RIGHT HERO IMG */}
            <div className='basis-1/3 mt-10 sm:mt-0'>
                <figure className='flex items-center justify-center'>
                    <img src={MyPhoto} alt='heroImg' className='rounded-full bg-purple-400' />
                </figure>
            </div>


            {/* Content COUTER UP */}
            <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
              <div className='mb-10'>
                <h2 className=' text-smallTextColor font-[700] text-[32px]'>
                  <CountUp start={0} end={7} duration={2} suffix='.49'/>
                </h2>
                <h4  className=' text-smallTextColor font-[600] text-[18px]'>
                  Current CGPA
                </h4>

              </div>

              <div className='mb-10'>
                <h2 className=' text-smallTextColor font-[700] text-[32px]'>
                  <CountUp start={0} end={86} duration={2} suffix='.6%'/>
                </h2>
                <h4  className=' text-smallTextColor font-[600] text-[18px]'>
                  12<sup>th</sup> STATE Board 
                </h4>
              </div>

              <div className='mb-10'>
                <h2 className=' text-smallTextColor font-[700] text-[32px]'>
                  <CountUp start={0} end={88} duration={2} suffix='.4%'/>
                </h2>
                <h4  className=' text-smallTextColor font-[600] text-[18px]'>
                  10<sup>th</sup> STATE Board
                </h4>
              </div>

              <div className='mb-10'>
                <h2 className=' text-smallTextColor font-[700] text-[32px]'>
                  <CountUp start={0} end={4} duration={2} suffix='+'/>
                </h2>
                <h4  className=' text-smallTextColor font-[600] text-[18px]'>
                  Projects Build
                </h4>
              </div>
            </div>
          
            </div>
        </div>
    </section>
  )
}

export default Hero
