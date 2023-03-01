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
        `${process.env.REACT_APP_SERVICE_KEY}`,
        `${process.env.REACT_APP_TEMPLATE_KEY}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          alert("Votre message est bien parti, merci!")
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
          <label>Nom<br/>
          <input type="text" name="user_name" />
          </label>
          <label>Email<br/>
          <input type="email" name="user_email" />
          </label>
          <label>Message<br/>
          <textarea name="message" />
          </label>
          <label>
          <input type="submit" value="Envoyer" />
          </label>
        </form>
      </div>
      <div className="Gmap">
        <Map />
      </div>
    </div>
  );
}

export default Contact;
