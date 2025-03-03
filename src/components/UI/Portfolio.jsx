import React, { useEffect, useState } from 'react'
import data from "../../assets/data/portfolioData"
import Modal from './Modal';

const Portfolio = () => {


    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [tab, setTab] = useState('all');

    const [activeId, setActiveId] = useState(null);
    const [showModal, setShowModal] = useState(false)


    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3);
    }

    const modalHander = id => {
        setShowModal(true);
        setActiveId(id);
    }

    useEffect(() => {

        if(tab === 'all') {
            setPortfolios(data);
        }


    },[tab])

  return (
    <section id="portfolio">
        <div className='container'>

            <div className='flex items-center justify-between flex-wrap'>
                
                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-headingColor text-[2rem] font-[700]'>
                        My Projects
                    </h3>
                </div>

                <div className='flex gap-3 mb-3 '>
                    {/* <button onClick={() => setTab("all")} className=' text-smallTextColor border border-solid border-smallTextColor rounded-[8px] py-1 px-4'>All</button> */}
                    {/* <button onClick={() => setTab("web-design")} className=' text-smallTextColor border border-solid border-smallTextColor rounded-[8px] py-1 px-4'>Web Design</button> */}
                    {/* <button onClick={() => setTab("java")} className=' text-smallTextColor border border-solid border-smallTextColor rounded-[8px] py-1 px-4'>Java</button> */}
                </div>
            </div>

            <div className='flex items-center gap-4 flex-wrap'>
                {
                    portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                        <div key={index} 
                            data-aos="fade-zoom-in" data-aos-duration='1000' data-aos-delay='50'
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                            <figure>
                                <img className='rounded-[8px] h-[250px] ' src={portfolio?.imgUrl}  alt='proj'/>
                            </figure>
                            
                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <button onClick={() => modalHander(portfolio.id)} className='text-white bg-headingColor hover:bg-primaryColor rounded-[8px] py-1 px-2 font-[500] ease-in duration-200 ' >See Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Load more */}
            <div className='text-center mt-6'>
              {
                nextItems < portfolios.length && data.length > 6 && (
                 <button onClick={loadMoreHandler} className=' text-white bg-headingColor hover:bg-primaryColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200' >Load More</button>
                )
              }

            </div>

        </div>

        {
            showModal && (<Modal activeId={activeId} setShowModal={setShowModal} />)
        }
    </section>
  )
}

export default Portfolio
