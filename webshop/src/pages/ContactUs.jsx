import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
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

    emailjs.sendForm('service_tjfhv29', 'template_2qxs732', form.current, 'Ij-3OW7BSTg1gofrm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your name</label><br />
      <input type="text" name="from_name" required /><br />
      <label>Your email address</label><br />
      <input type="email" name="from_email" required /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <button onClick={sendEmail}>Send your message</button> <br />
    </form>
  );
};


// WCAG - ligipääsetavuse nõuded
//   < img src = "" alt = "" alternative text kui pilti pole
// lable ja input ümber form tag