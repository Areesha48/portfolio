import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Import EmailJS
import '../styles/Contactform.css'; // Import the CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '', // Optional field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data using EmailJS with Public Key
      await emailjs.send(
        'service_78mtg0t', //  EmailJS Service ID
        'template_5uuaf4f', //  EmailJS Template ID
        formData,
        '0NhRoUGcTE8Rskb0h' // EmailJS Public Key
      );

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
      });

      // Show success message
      setSubmitMessage('Thank you! I will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Get in Touch</h1>
        <p>Let's discuss your project and bring your ideas to life</p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>bushrashehzad90@gmail.com</p>
          </div>
          
          <div className="info-card">
            <FaPhone className="info-icon" />
            <h3>Phone</h3>
            <p>+92 460 211484</p>
          </div>
          
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Pakistan</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <motion.p 
                className={`submit-message ${submitMessage.includes('Oops') ? 'error' : 'success'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;