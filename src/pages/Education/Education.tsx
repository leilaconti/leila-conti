import React from 'react';
import { Header } from '../../components/Header/Header';
import { ContactInformation } from '../../components/ContactInformation/ContactInformation';
import graduation from '../../Images/graduation.jpg';
import wip from './wip.jpg';

export const Education = (ref: any) => {
    return (
        <>
        <Header />
         <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img src={wip} />
            </div>
            {/* <Header />
            <ContactInformation
                image={graduation}
                heading="Royal Holloway, University of London"
                information="BSc Computer Science 2.1"
            /> */}
        </>
    );
};
