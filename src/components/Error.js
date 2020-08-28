import React from 'react';
import ReactDOM from 'react-dom';

const Error = ({ isOpen, message }) => {
    const modalStyles = {
        width: '300px',
        height: '40px',
        background: '#eee',
        position: 'fixed',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        boxShadow: '2px 3px 10px 2px hsl(209, 23%, 22%)',
        transition: '0.2s all ease',
        fontWeight: 600
    }
    if (isOpen) {
        return ReactDOM.createPortal(
            <div style={modalStyles}>
                <p style={{ color: '#333' }}>{message}</p>
            </div>, document.querySelector('#error')
        )
    } else {
        return '';
    }
}

export default Error;
