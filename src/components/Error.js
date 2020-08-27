import React from 'react';
import ReactDOM from 'react-dom';

const Error = ({ isOpen, children }) => {
    const modalStyles = {
        width: '500px',
        height: '40px',
        background: '#eee',
        color: '#000',
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadiu: '5px',
        boxShadow: '2px 3px 5px 2px #cecece',
        transition: '0.2s all ease'
    }
    if (isOpen) {
        return ReactDOM.createPortal(
            <div style={modalStyles}>
                <p style={{ color: '#333' }}>{children}</p>
            </div>, document.querySelector('#error')
        )
    } else {
        return '';
    }
}

export default Error;
