import React from 'react'
import awardsData from '../../assets/data/awards'
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiTrophyFill, RiExternalLinkLine } from 'react-icons/ri'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'; 

// --- COLOR CONSTANTS ---
const DARK_BG = '#2C2F33';          
const ACCENT_BLUE = '#00BFFF';      
const PRIMARY_TEXT = '#F0F0F0';     
const SECONDARY_TEXT = '#B0B3B8';   
const CARD_BG = '#1e2124';          

const Achievements = () => {
  return (
    // Apply dark background
    <section id='achievements' className={`py-16 bg-[${DARK_BG}]`}>
        <div className='container'>
          
          {/* Heading */}
          <div className='mb-12'>
            <div className='text-center'>
                <h2 className={`text-[${PRIMARY_TEXT}] font-[800] text-[2.5rem] mb-4 flex items-center justify-center gap-3`}>
                    <RiTrophyFill className='text-yellow-400' />
                    Achievements & Awards
                </h2>
                <p className={`lg:max-w-[700px] lg:mx-auto text-[${SECONDARY_TEXT}] font-[500] text-[1.1rem] leading-7`}>
                    My achievements showcase my dedication, talent, and multitasking ability, highlighting recognition across various fields, both technical and professional. 
                </p>
            </div>
          </div>

          {/* Cards Swiper */}
          <Swiper
            spaceBetween={30} 
            centeredSlides={false} 
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              // FIX APPLIED: Using simple, non-hex-containing class names for Swiper
              el: '.swiper-pagination-achievements', 
              bulletClass: 'swiper-pagination-bullet achievements-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active achievements-bullet-active',
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
                640:{slidesPerView:1, spaceBetween: 20},
                768:{slidesPerView:2, spaceBetween: 30},
                1024:{slidesPerView:3, spaceBetween: 40}
            }}
          >
            <div className='flex flex-row justify-center'>
                {
                    awardsData?.map((item, index) => (
                      <SwiperSlide key={index} className='mb-12 mt-4 p-2'> 
                        <div 
                            className={`min-h-[420px] max-w-sm flex flex-col items-center rounded-xl p-6 shadow-2xl
                            bg-[${CARD_BG}] 
                            hover:scale-[1.03] border border-transparent hover:border-[${ACCENT_BLUE}] transition-all duration-300`}>

                            {/* Image */}
                            <div className="h-[180px] w-full flex items-center justify-center overflow-hidden">
                              <img className="w-full h-full object-contain" alt={item?.title} src={item?.imgUrl}></img>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col px-1 mt-4 flex-grow w-full">
                              <p className={`font-bold text-[${PRIMARY_TEXT}] text-lg mb-1`}>{item?.title}</p>
                              <p className={`text-left text-sm text-[${SECONDARY_TEXT}] flex-grow leading-6`}>{item?.description}</p>
                            </div>

                            {/* Footer & Button */}
                            <div className='w-full px-1 mt-4 flex justify-between items-center'>
                              <p className={`text-black bg-[${SECONDARY_TEXT}] px-3 py-1 text-sm cursor-default rounded-full`}>{item?.categoty}</p>
                              
                              <a href={item?.link} target="_blank" rel="noopener noreferrer">
                                <button
                                  className={`rounded-full px-4 py-1 text-black bg-[${ACCENT_BLUE}] hover:bg-opacity-90 transition duration-200 font-[600] flex items-center gap-1`}
                                  >
                                  Link <RiExternalLinkLine />
                                </button>
                              </a>
                            </div>
                        </div>
                      </SwiperSlide>
                    ))
                }
            </div> 
          </Swiper>
          
          {/* Custom Pagination Container (Swiper will inject bullets here) */}
          <div className='swiper-pagination-achievements mt-8 flex justify-center'></div>
        </div>
    </section>
  )
}

export default Achievements