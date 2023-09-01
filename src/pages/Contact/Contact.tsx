import React from 'react';
import { Header } from '../../components/Header/Header';
import './Contact.scss';
import { ContactInformation } from '../../components/ContactInformation/ContactInformation';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import wip from '../../assets/images/wip.png';

export const Contact = (ref: any) => {
    return (
        <>
            <Header />
            <h1 className='contactHeading'>Contact Me</h1>
            <div className="contactContainer">
                <div>
                    <ContactInformation
                        icon={<LocationOnIcon />}
                        heading="Location"
                        information="London"
                    />
                    <ContactInformation
                        icon={<EmailIcon />}
                        heading="Email"
                        information="leilaconti@outlook.com"
                    />
                </div>
                <ContactForm />
            </div>
            {/* <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img src={wip} />
            </div> */}
        </>
    );
};
