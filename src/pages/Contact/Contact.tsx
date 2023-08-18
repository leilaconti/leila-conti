import React from 'react';
import { Header } from '../../components/Header/Header';
import './Contact.scss';
import { ContactInformation } from '../../components/ContactInformation/ContactInformation';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ContactForm } from '../../components/ContactForm/ContactForm';

export const Contact = () => {
    return (
        <>
            <Header />
            <div className="container">
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
                    <ContactInformation
                        icon={<EmailIcon />}
                        heading="Email"
                        information="leilaconti@outlook.com"
                    />
                </div>

                <ContactForm />
            </div>
        </>
    );
};
