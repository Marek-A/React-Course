import "../components/css/MyContact.css"
import "../components/css/Styler.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function MyContact({ r1 }) {
  const form = useRef();
  const [showForm, setShowForm] = useState(true);
  const notify = () => toast.success("Thanks!", {
    position: toast.POSITION.BOTTOM_CENTER
  });


  // email form --
  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.from_name;
    if (!nameInput.value) {
      console.log("Name field is required");
      return;
    }

    const emailInput = form.current.from_email;
    if (!emailInput.validity.valid) {
      console.log("Invalid email address");
      return;
    }

    emailjs.sendForm('service_tjfhv29', 'template_gt9wm87', form.current, 'Ij-3OW7BSTg1gofrm')
      .then((result) => {
        console.log(result.text);
        setShowForm(false);
        setTimeout(() => setShowForm(true), 220000);
      }, (error) => {
        console.log(error.text);
      });

    // xxx --
  };

  return (
    <div ref={r1} className="mycontact">
      <br />
      <br />
      <h3>MY CONTACT</h3>
      <p id="contact-txt1"> Available for freelance or full-time job opportunities. <br /></p>
      <p id="contact-txt2"> Have an exciting offer or a project you need help with? </p>
      <p id="contact-txt3"> Contact me via social links or message me from below! </p>

      <div className="contact-info">
        <p>
          <img
            id="social-icon"
            src="/mail.png"
            alt="mail"
          />
          <a id="social-link" href="mailto:[contact@angelstok.ee]">contact@angelstok.ee</a>
        </p>
        <p>
          <img
            id="social-icon"
            src="/linked.png"
            alt="linkedin"
          />
          <a id="social-link" href="https://www.linkedin.com/in/marek-angelstok/">LinkedIn</a>
        </p>
        <p>
          <img
            id="social-icon"
            src="/fb.png"
            alt="facebook"
          />
          <a id="social-link" href="https://www.facebook.com/m.angelstok">Facebook</a>
        </p>
        <p>
          <img
            id="social-icon"
            src="/git.png"
            alt="github"
          />
          <a id="social-link" href="https://github.com/Marek-A">GitHub</a>
        </p>
      </div>

      <div className="form-container">
        {showForm && (
          <form ref={form} onSubmit={sendEmail}>
            <label>YOUR NAME</label><br />
            <input className="form" type="text" name="from_name" required /><br />
            <label>YOUR EMAIL ADDRESS</label><br />
            <input className="form" type="email" name="from_email" required /><br />
            <label>MESSAGE</label><br />
            <textarea className="form" name="message" /><br />
            <button id="btn-send" onClick={() => { notify(); sendEmail(); }}>SEND</button> <br />
            <ToastContainer />
          </form>
          // MUST ADD CAPTCHA FOR EMAIL SPAM PREVENTION
          // MUST ADD MAP TO THE RIGHT
        )}
      </div>


    </div>
  )
}

export default MyContact
