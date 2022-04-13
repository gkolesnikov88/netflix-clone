import React, {useEffect, useState} from 'react';
import './Nav.css';
import { useNavigate } from "react-router-dom";

function Nav(props) {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__content'>
                <img
                    onClick={() => navigate('/')}
                    className='nav__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
                <img
                    onClick={() => {
                        navigate('/profile');
                    }}
                    className='nav__avatar'
                    src="https://p0.zoon.ru/preview/DknY--qgAxYmiVdTzuykRw/130x170x90/1/c/7/5c6e29dac392295e0a6a766c_5c6e2e005a846.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Nav;