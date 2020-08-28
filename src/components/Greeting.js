import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { MovieContext } from './contexts/MovieContext';

const Greeting = () => {
    const { greetingOpen, setGreetingOpen } = useContext(MovieContext);

    const closeGreeting = () => setGreetingOpen(false);

    if (greetingOpen) {
        return (
            ReactDOM.createPortal(
                (<div className="greeting" onClick={closeGreeting}>
                    <div className="greeting-message">
                        <h2>Welcome to uFlix!</h2>
                        <p>Since this is your first time using our app, try to search movie's title at input field on your left upper corner.</p>
                        <button className='got-it' onClick={closeGreeting}>Got it</button>
                    </div>
                </div>), document.querySelector('#popup')
            )
        )
    } else {
        return '';
    }
}

export default Greeting;
