import React from 'react';
import { Header } from '../../components/Header/Header';
import education from '../../assets/images/timeline.jpg';
import './Education.scss';

export const Education = (ref: any) => {
    return (
        <>
        <Header />
        <h1 className='heading'>Education</h1>
         <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img className='timelineImage' src={education} />
            </div>
        </>
    );
};
