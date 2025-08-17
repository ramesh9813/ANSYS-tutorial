import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Need Help?</h2>
      <p>Have questions about ANSYS tutorials? Get in touch!</p>
      <form id="contact-form">
        <input type="email" placeholder="Your email" required />
        <select required>
          <option value="">Select Tutorial Category</option>
          <option value="structural">Structural Analysis</option>
          <option value="cfd">Fluid Dynamics</option>
          <option value="emag">Electromagnetics</option>
          <option value="general">General Question</option>
        </select>
        <textarea placeholder="Your question or feedback" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
