import React from 'react';
import './ContactForm.scss';

export const ContactForm = () => {
    return (
        <form
            action="mailto:leilaconti@outlook.com"
            method="post"
            className="contactForm"
        >
            <label className="fieldLabel">First name:</label>
            <input
                className="inputFields"
                type="text"
                id="fname"
                name="fname"
            />
            <label className="fieldLabel">Last name:</label>
            <input
                className="inputFields"
                type="text"
                id="lname"
                name="lname"
            />
            <label className="fieldLabel">Message:</label>
            <textarea
                className="messageField"
                id="lname"
                name="lname"
            />
            <label className="fieldLabel">Your email:</label>
            <input
                className="inputFields"
                type="text"
                id="lname"
                name="lname"
            />
            <input className="submitButton" type="submit" value="Submit" />
        </form>
    );
};
