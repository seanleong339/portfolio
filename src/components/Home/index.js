import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
import {useState, useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import {Loader} from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const intro = "Hi,";
    const secIntro = "I'm";
    const name = 'ean,';
    const job = 'Aspiring Software Developer';

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <Loader type="pacman" />
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} str={intro} idx={11}/>
                <br /> 
                <AnimatedLetters letterClass={letterClass} str={secIntro} idx={14}/>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} str={name} idx={17} />
                <br/>
                <AnimatedLetters letterClass={letterClass} str={job} idx={21} />
                </h1>
                <h2>Final year Computer Science undergraduate at the National University of Singapore</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        </>
    );
}

export default Home;