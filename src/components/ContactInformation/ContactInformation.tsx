import React, { ReactNode } from 'react';
import './ContactInformation.scss';

interface ContactInformationProps {
    icon?: ReactNode;
    image?: string;
    heading: string;
    information: string;
}

export const ContactInformation = ({
    icon,
    heading,
    information,
    image
}: ContactInformationProps) => {
    return (
        <div>
            <div className="contactInfo">
                {icon}
                {image && <img className="image" src={image} />}
                <div className="contactAlign">
                    <h5>{heading}</h5>
                    <p>{information}</p>
                </div>
            </div>
        </div>
    );
};
