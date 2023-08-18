import React, { ReactNode } from 'react';
import './ContactInformation.scss';

interface ContactInformationProps {
    icon: ReactNode;
    heading: string;
    information: string;
}

export const ContactInformation = ({
    icon,
    heading,
    information
}: ContactInformationProps) => {
    return (
        <div>
            <div className="contactInfo">
                {icon}
                <div className="contactAlign">
                    <h4>{heading}</h4>
                    <p>{information}</p>
                </div>
            </div>
        </div>
    );
};
