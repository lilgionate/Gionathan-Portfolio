// src/components/contact/Contact.jsx
import { useRef, useState } from 'react';
import './contact.css';
import Message from './Message';
import logo from '../../assets/nathans-dev.png'; // <-- relative import from src/components/contact

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ open: false, variant: 'success', text: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form.current).entries());

    try {
      setSending(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload?.error || 'Failed to send.');

      setToast({ open: true, variant: 'success', text: 'Your message was sent successfully. I’ll be in touch soon!' });
      form.current.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      setToast({ open: true, variant: 'error', text: 'Failed to send. Please try again or email me directly at gioanathanv@gmail.com.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        {/* LEFT: Contact options */}
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-envelope contact__card-icon" aria-hidden="true"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">gioanathanv@gmail.com</span>
              <a href="mailto:gioanathanv@gmail.com" className="contact__button" aria-label="Email Gionathan">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon" aria-hidden="true"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-map contact__card-icon" aria-hidden="true"></i>
              <h3 className="contact__card-title">Location</h3>
              <span className="contact__card-data">New York, USA</span>
              <span className="contact__location contact__button--muted">Available for remote roles</span>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon" aria-hidden="true"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+1 929-216-8007</span>
              <a href="tel:+19292168007" className="contact__button" aria-label="Call Gionathan">
                Call me <i className="bx bx-right-arrow-alt contact__button-icon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact form */}
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name="user_name" className="contact__form-input" placeholder="Insert your name" required />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="email" name="user_email" className="contact__form-input" placeholder="Insert your email" required />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Phone</label>
              <input type="tel" name="user_phone" className="contact__form-input" placeholder="Insert your phone number" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Subject</label>
              <input type="text" name="user_option" className="contact__form-input" placeholder="What is this for?" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your project" required />
            </div>

            <button className="button button--flex" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <Message
        open={toast.open}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        title={toast.variant === 'success' ? 'Message sent' : 'Something went wrong'}
        message={toast.text}
        variant={toast.variant}
        logoSrc={logo}  
        autoHideMs={toast.variant === 'success' ? 3500 : 6000}
      />
    </section>
  );
};

export default Contact;
