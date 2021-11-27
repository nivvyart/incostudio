import React from "react";
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


const ContactPage = () => {
  const ContactForm = (
    <form
      name="contact-form"
      method="POST"
      data-netlify="true"
      action="contact/?success=true"
    >
      <div>
        <label htmlFor="name">Name *</label>
        <input 
          id="name"
          name="name"
          required
          type="text"
        />
      </div>
      <div>
        <label htmlFor="company"> Company *</label>
        <input 
          id="company"
          name="company"
          required
          type="text" />
      </div>
      <div>
        <label htmlFor="email">E-mail Address *</label>
        <input 
          id="email"
          type="email" 
          name="email" 
          required 
        />
      </div>
      <div>
        <label htmlFor="message">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          required
        >
        </textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );

  return (
    <div>
      <h1>contact us</h1>
      {ContactForm}
    </div>
  )

}

export default ContactPage;