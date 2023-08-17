import React from 'react';
import { SocialIcon } from 'react-social-icons';

export const SocialButtons = () => {
    return (
        <div>
            <SocialIcon
                style={{ marginLeft: 0 }}
                url="https://www.linkedin.com/in/leila-conti/"
            />
            <SocialIcon url="https://www.instagram.com/lcxnti/" />
            <SocialIcon url="https://www.facebook.com/leila.conti.7/" />
            <SocialIcon url="https://github.com/leilaconti" />
            <SocialIcon url="mailto:leilaconti@outlook.com" network="mailto" />
        </div>
    );
};
