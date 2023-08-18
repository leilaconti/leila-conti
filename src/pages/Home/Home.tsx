import React from 'react';
import { Header } from '../../components/Header/Header';
import { HeroImage } from '../../components/HeroImage/HeroImage';
import { SocialButtons } from '../../components/SocialButtons/SocialButtons';
import './Home.scss';

export const Home = () => {
    return (
        <>
            <Header />
            <div className="heroImageBackground">
                <HeroImage />
                <SocialButtons />
            </div>
        </>
    );
};
