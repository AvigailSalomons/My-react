import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Hayalom', 'template_pouoww3', form.current, {
        publicKey: 'i8M2Cw7CcQp6H-soJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-us-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">שם</label>
          <input type="text" name="user_name" id="user_name" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_phone">Phone</label>
          <input type="text" name="user_phone" id="user_phone" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date">תארך</label>
          <input type="date" name="date" id="date" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="beds_count">כמות מיטות</label>
          <input type="number" name="beds_count" id="beds_count" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" className="form-control" />
        </div>
        <button type="submit" className="btn-submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
