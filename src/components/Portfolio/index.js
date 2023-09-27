import React, {useState, useEffect} from 'react';
import {Loader} from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import "./index.scss";
import portfolioData from '../../data/portfolio.json'

const renderPortfolio = (portfolio) => {
    return (
        <div className='images-container'>
        {
            portfolio.map((p, idx) => {
                return (
                    <div className='image-box' key={idx}>
                        <img 
                        src={p.cover}
                        className="portfolio-image"
                        alt="portfolio"/>
                        <div className='content'>
                            <p className='title'>{p.title}</p>
                            <h3 className='tech-stack'>{p.tech}</h3>
                            <h4 className='description'>{p.description}</h4>
                            <br />
                            <button className='btn'
                            onClick={() => window.open(p.url)}>
                                View
                            </button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const pageTitle = "Portfolio"

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    })

    return (
        <>
         <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters letterClass={letterClass} str={pageTitle} idx={15}/>
            </h1>
            <p className="page-description">
                Here is a list of my projects and experiences. (More changes and improvements to this page to be added!)
            </p>
            <div>
                {renderPortfolio(portfolioData.portfolio)};
            </div>
         </div>
            <Loader type='pacman'/>
        </>
    )
};

export default Portfolio;