import React, { useEffect, useState } from 'react';
import data from "../../assets/data/portfolioData";
import { RiFilter3Fill, RiEyeLine, RiArrowRightLine, RiGithubFill, RiPlayCircleFill, RiExternalLinkLine } from 'react-icons/ri'; 

// --- COLOR CONSTANTS ---
const DARK_BG = '#2C2F33';          
const ACCENT_BLUE = '#00BFFF';      
const PRIMARY_TEXT = '#F0F0F0';     
const SECONDARY_TEXT = '#B0B3B8';   
const CARD_BG = '#1e2124';          

// === PROJECT DETAIL FEATURE COMPONENT (AOS removed from the main wrapper) ===
const ProjectDetailFeature = ({ activeId, portfolioData }) => {
    
    const portfolio = portfolioData.find(it => it.id === activeId);

    if (!portfolio) {
        return (
            <div className={`w-full h-full flex items-center justify-center p-10 min-h-[350px] bg-[${CARD_BG}] rounded-xl text-[${SECONDARY_TEXT}] text-center`}>
                <p className='text-xl'>Select a project from the list to view its details here.</p>
            </div>
        );
    }

    const primaryLink = portfolio.siteUrl || portfolio.youtubeSite || portfolio.githubSite;
    const primaryLinkText = (portfolio.siteUrl && "Live Site") || (portfolio.youtubeSite && "Demo") || (portfolio.githubSite && "Github Repo");
    const primaryLinkIcon = (portfolio.siteUrl && <RiExternalLinkLine />) || (portfolio.youtubeSite && <RiPlayCircleFill />) || (portfolio.githubSite && <RiGithubFill />);


    return (
        // FIX APPLIED: data-aos attributes removed from the parent div
        <div 
            className={`w-full relative rounded-xl overflow-hidden shadow-2xl bg-[${CARD_BG}] p-5 lg:p-8 transition-all duration-300`}> 
            
            <div className='mb-6'>
                <figure className='w-full h-[250px] md:h-[550px]'>
                    <img className='rounded-xl w-full h-full object-cover' src={portfolio.imgUrl} alt={portfolio.title}/>
                </figure>
            </div>
            
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                <div className='lg:w-3/5'>
                    <h2 className={`text-3xl lg:text-4xl text-[${PRIMARY_TEXT}] font-[800] mb-3`}>{portfolio.title}</h2>
                    <p className={`text-[1rem] lg:text-[1.1rem] text-[${SECONDARY_TEXT}] font-[500] leading-7 mb-6`}>{portfolio.description}</p>
                    
                    <div className='flex flex-wrap items-center mt-5 gap-3'>
                        <h3 className={`text-[${ACCENT_BLUE}] font-[600] text-lg`}>Technologies:</h3>
                        {
                            portfolio.technologies.map((item, index) =>(
                                <span 
                                    key={index} 
                                    className='bg-[#3a3f47] text-white py-1 px-3 rounded-full text-[14px] leading-0 shadow-md'
                                >
                                    {item}
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className='lg:w-1/4 mt-6 lg:mt-0 lg:text-right'>
                    <span className={`text-[${SECONDARY_TEXT}] text-sm font-[500] block mb-3`}>Category: {portfolio.category}</span>
                    
                    {primaryLink && (
                        <a href={primaryLink} target="_blank" rel="noopener noreferrer" className='block'>
                            <button className={`text-black bg-[${ACCENT_BLUE}] hover:bg-opacity-90 cursor-pointer py-3 px-6 rounded-full font-[600] text-lg shadow-xl flex items-center justify-center gap-2 transition duration-200 w-full`}>
                                {primaryLinkIcon}
                                {primaryLinkText}
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
// =============================================================


const Portfolio = () => {
    
    const [nextItems, setNextItems] = useState(data.length); 
    const [portfolios, setPortfolios] = useState(data);
    const [tab, setTab] = useState('all');
    const [selectedProjectId, setSelectedProjectId] = useState(null); 

    const selectProjectHandler = (id) => {
        setSelectedProjectId(id);
    }

    useEffect(() => {
        let filteredData;
        if (tab === 'all') {
            filteredData = data;
        } else {
            filteredData = data.filter(item => item.category === tab);
        }
        setPortfolios(filteredData);
        setNextItems(data.length); 
        
        if (filteredData.length > 0) {
            setSelectedProjectId(filteredData[0].id);
        } else {
            setSelectedProjectId(null);
        }
    }, [tab]);


    useEffect(() => {
        if (portfolios.length > 0 && selectedProjectId === null) {
            setSelectedProjectId(portfolios[0].id);
        }
    }, [portfolios, selectedProjectId]);
    

    const categories = ['all', ...new Set(data.map(item => item.category))];
    const formatCategory = (category) => {
        if (category === 'all') return 'All Projects';
        return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const previewProjects = portfolios;

    return (
        <section id="portfolio" className={`py-16 bg-[${DARK_BG}]`}>
            <div className='container'>

                {/* HEADING AND FILTER TABS */}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between border-b border-b-[#3a3f47] pb-8 mb-10'>
                    
                    <div className='mb-6 md:mb-0'>
                        <h3 className={`text-[${PRIMARY_TEXT}] text-[2.5rem] font-[800]`}>
                            Featured Projects
                        </h3>
                        <p className={`text-[${SECONDARY_TEXT}] mt-2`}>Click a category to filter the showcase.</p>
                    </div>

                    {/* Filter Buttons */}
                    <div className='flex gap-2 sm:gap-4 flex-wrap justify-center'>
                        <RiFilter3Fill className={`text-[${ACCENT_BLUE}] text-3xl hidden sm:block`} />
                        {categories.map((category, index) => (
                            <button 
                                key={index}
                                onClick={() => setTab(category)} 
                                className={`font-[600] py-2 px-4 rounded-lg transition-all duration-300 text-[0.9rem]
                                ${tab === category 
                                    ? `bg-[${ACCENT_BLUE}] text-black shadow-md` 
                                    : `text-[${SECONDARY_TEXT}] bg-[${CARD_BG}] hover:text-[${ACCENT_BLUE}]` 
                                }`}
                            >
                                {formatCategory(category)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FEATURED PROJECTS SHOWCASE */}
                <div className='grid grid-cols-1 gap-8'>
                    
                    {/* TOP FEATURED BLOCK (The large detail view) */}
                    <div className=''>
                       <ProjectDetailFeature activeId={selectedProjectId} portfolioData={data} />
                    </div>

                </div>

                {/* HORIZONTAL SCROLLABLE PROJECT LIST */}
                <div className='mt-12'>
                    <h3 className={`text-[${PRIMARY_TEXT}] text-xl font-[700] mb-4`}>All Projects Preview:</h3>
                    
                    <div className={`flex gap-6 overflow-x-auto pb-4 scrollbar-hide`}>
                        {previewProjects.map((portfolio, index) => (
                            <div key={index} 
                                // AOS attributes removed here to prevent the disappearance bug
                                className={`flex-shrink-0 w-60 h-auto rounded-xl shadow-lg cursor-pointer 
                                bg-[${CARD_BG}] transition-all duration-300 transform hover:-translate-y-1
                                ${portfolio.id === selectedProjectId ? `border-2 border-[${ACCENT_BLUE}]`: `border border-transparent`}`} 
                                onClick={() => selectProjectHandler(portfolio.id)}
                            > 
                                <figure className='w-full h-36 flex-shrink-0 rounded-t-xl overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={portfolio?.imgUrl} alt={portfolio.title}/>
                                </figure>
                                
                                <div className='p-3'>
                                    <h4 className={`text-[${PRIMARY_TEXT}] font-[700] text-lg truncate mb-1`}>{portfolio.title}</h4>
                                    <p className={`text-[${SECONDARY_TEXT}] text-sm`}>Category: {formatCategory(portfolio.category)}</p>
                                    <span className={`flex items-center text-xs mt-2 ${portfolio.id === selectedProjectId ? `text-[${ACCENT_BLUE}]`: `text-[${SECONDARY_TEXT}]`}`}>
                                        View Details <RiArrowRightLine className='ml-1' />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio