import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contactform.css'
export function ContactForm() {
  const [state, handleSubmit] = useForm("mjkrepzv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-group">
                <label htmlFor="email" className='email-label'>
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Email Address'
                    className='email-input'
                />
            </div>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <div className="form-group">
            <label htmlFor="message">
                Enter Your Message
            </label>
            <textarea
                id="message"
                name="message"
                placeholder='Enter Your Message'
            />
            </div>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className='form-submit-btn'>
                Submit
            </button>
        </form>
    </div>
  );
}