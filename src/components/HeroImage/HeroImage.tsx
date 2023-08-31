import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './HeroImage.scss';
import avatar from '../../assets/images/avatar.jpg';
import { SocialButtons } from '../SocialButtons/SocialButtons';

export const HeroImage = () => {

    return (
        <>
            <div className="container">
                <div className="one">
                    <TypeAnimation
                        sequence={["Hi There, I'm Leila Conti", 1000]}
                        wrapper="span"
                        speed={50}
                        style={{
                            fontSize: '3em',
                            fontFamily: 'monospace',
                            display: 'inline-block'
                        }}
                        repeat={Infinity}
                    />
                    <div>
                        <p
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '18px'
                            }}
                        >
                            Software Developer
                        </p>
                        <SocialButtons />
                    </div>
                </div>
                <img className="two" src={avatar} alt="avatar" />
            </div>
        </>
    );
};
