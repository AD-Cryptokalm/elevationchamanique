import "../style/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Map from "./GoogleMap";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-contact-map">
      <div className="form-contact">
        <h2>Formulaire de contact</h2>
        <div className="separation"></div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      <div className="Gmap">
        <Map />
      </div>
    </div>
  );
}

export default Contact;
