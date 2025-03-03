import React from 'react'
import awardsData from '../../assets/data/awards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Achievements = () => {
  return (
    <section id='achievements'>
        <div className='container'>
          
          {/* Heading */}
          <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5 '>Achievements & Awards</h2>
                <p className='lg:max-w-[600] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>My Achievements and Awards shows the talent and multitasking nature of myself. I got various awards from different fields. </p>
            </div>
          </div>

          {/* Cards */}
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
                            640:{slidesPerView:1},
                            735:{slidesPerView:2},
                            1024:{slidesPerView:3}
                            }}
          >
          <div className='flex flex-row justify-center'>
            {
                awardsData?.map((item, index) => (
                  <SwiperSlide  className='mb-8 mt-4 ml-[0.4rem] flex justify-center mx-auto'>
                    <div key={index} className=" max-w-xs mt-14 flex flex-col items-center rounded-md p-6 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]
                    hover:scale-105 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ease-in duration-200">

                    <div className="h-[180px]">
                      <img className="w-full h-full " alt="abc" src={item?.imgUrl}></img>
                    </div>


                    <div className="flex flex-col px-2 mt-2">
                      <p className="font-bold text-slate-700">{item?.title}</p>
                      <p className=" text-left text-xs  text-slate-500">{item?.description}</p>
                    </div>


                    <div className='w-full px-2 mt-2 flex justify-between'>
                      <p className=' text-white bg-smallTextColor px-2  cursor-pointer rounded-md'>{item?.categoty}</p>
                      <a href={item?.link}>
                        <button
                          className="rounded-md px-2
                           text-white bg-primaryColor ease-in duration-150 focus:outline-none"
                          >Link
                        </button>
                      </a>
                    </div>
                    </div>
                  </SwiperSlide>
                ))
            }
          </div>          
          </Swiper>

        </div>
    </section>
  )
}

export default Achievements


