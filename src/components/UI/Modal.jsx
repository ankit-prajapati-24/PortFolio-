
import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeId, setShowModal}) => {

    const portfolio = portfolios.find(it => it.id === activeId);

  return (
    <div className='w-full h-full fixed top-10 left-0 z-10 bg-headingColor bg-opacity-40 backdrop-blur-sm'>
        <div className='w-11/12 md:max-w-[560px] md:max-h-[88%] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 '>
            {/* img */}
            <div>
                <figure>
                    <img className='rounded-md' src={portfolio.imgUrl} alt=''/>
                </figure>
            </div>
            
            {/* details */}
            <div>
                <h2 className='text-2xl  '>{portfolio.title}</h2>
                <p className='text-[15px] text-smallTextColor font-[600] leading-7 mt-2' >{portfolio.description}</p>
                
                <div className='flex flex-wrap items-center mt-5 gap-3'>
                    <h3 className='text-headingColor font-[500] text-[18px]'>Technologies:</h3>
                    {
                        portfolio.technologies.map((item, index) =>(
                            <span key={index} className=' bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 '>{item}</span>
                            ))
                    }
                </div>

                <a href={portfolio.siteUrl || portfolio?.youtubeSite || portfolio?.githubSite}>
                    <button className='text-white bg-primaryColor cursor-pointer py-2 px-4 my-6 rounded-[8px] font-[400] hover:bg-headingColor ease-in duration-100'>
                        {
                            ( portfolio?.siteUrl && "Live Site" ) || (portfolio?.youtubeSite && "Demo") || ( portfolio?.githubSite && "Github Repo") 
                        }
                    </button>
                </a>
            </div>

            <button
             onClick={() => setShowModal(false)}
             className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem]
                 text-[25px] flex items-center justify-center rounded-[4px] leading-0 cursor-pointer'>
                &times;
            </button>


        </div>
    </div>
  )
}

export default Modal
