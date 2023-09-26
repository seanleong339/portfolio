import {Loader} from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    const contactMeText = 'Contact me';

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_v68pi4o',
                'template_hl3gxbu',
                refForm.current,
                'Uj50o5onx7sSkM5n8'

            )
            .then(
                ()=> {
                    alert('Message successfully sent!');
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        str={contactMeText} 
                        idx={15}/>
                    </h1>
                    <p>
                        I am interested in any learning or work opportunities.
                        Send me an email here regarding opportunities or just to connect!
                    </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='text' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required> 
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;