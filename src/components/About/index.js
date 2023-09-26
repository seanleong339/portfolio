import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faDocker, faGolang, faJs, faAws, faPython} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters';
import {Loader} from 'react-loaders'
import './index.scss'

const About = () => {
    const aboutText = "About me";

    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters str={aboutText} idx={15} />
                </h1>
                <p>
                    Hi! My name is Sean, and I am a final year Computer Science undergraduate at the National University of Singapore.
                    My interests lie in backend engineering and deployment, and I enjoy learning new ways to build more efficient software.
                    In my free time, I enjoy spending time with my family, working out and trying new sports.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faDocker} color="#F066529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGolang} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJs} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAws} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>

        <Loader type="pacman" />
    </>
    )
}

export default About;