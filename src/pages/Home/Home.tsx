import React, { useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { HeroImage } from '../../components/HeroImage/HeroImage';
import { SocialButtons } from '../../components/SocialButtons/SocialButtons';
import './Home.scss';
import { Contact } from '../Contact/Contact';

export const Home = () => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <div className="containerHome">
                {/* <button onClick={handleClick} style={{ width: '120px' }}>
                    About Me
                </button> */}

                <HeroImage />
            </div>

            {/* <h1 ref={ref}>About Me</h1> */}
            {/* <Contact /> */}
        </>
    );
};
