import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './HeroImage.scss';

export const HeroImage = () => {
    return (
        <div>
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

            <p style={{ fontFamily: 'monospace', fontSize: '18px' }}>
                Software Developer
            </p>
            <button style={{ fontFamily: 'monospace', fontSize: '14px' }}>
                About me ↓
            </button>
        </div>
    );
};
