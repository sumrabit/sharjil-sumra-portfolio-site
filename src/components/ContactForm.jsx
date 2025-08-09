// src/components/ContactForm.jsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_79w5fn4', 'tzkwmvp', e.target, 'rZKtOm9kUUOQ5maxw')
      .then((result) => {
        setStatus('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
        console.error(error.text);
      });
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
    </>
  );
};

export default ContactForm;
