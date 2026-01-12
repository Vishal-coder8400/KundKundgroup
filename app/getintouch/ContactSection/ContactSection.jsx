"use client";
import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import sanityClient from "../../../sanity/sanity";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const doc = {
        _type: "contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        linkedin: formData.linkedin,
      };

      await sanityClient.create(doc);

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        linkedin: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Featured News Articles</h1>
      <div className={styles.content}>
        {/* Form Section */}
        <div className={styles.formContainer}>
          <h2 className={styles.formHeading}>Send Us a Message</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone No.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        {/* Image and Address Section */}
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBG}></div>
            <img src={"./images/contact.jpg"} alt="" />
          </div>
          <div className={styles.addressContainer}>
            <h2 className={styles.addressHeading}>Address</h2>
            <p>KundKund Group HQ</p>
            <p>H-166, Sector 63 Rd,</p>
            <p>H Block, Sector 63,</p>
            <p>Noida, Uttar Pradesh 201301</p>
            <p>Phone: +91-9876543210</p>
            <p>Email: info@kundkundgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
