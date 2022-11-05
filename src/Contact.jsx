import React from "react";

function Contact() {
  return (
    <div className="contact-form-wrapper">
      <div className="header-text">
        <h2>Contact Me</h2>
        <p>Hi, There contact me to ask me about anything you have in mind</p>
      </div>
      <form action="">
        <div className="firstinputs">
          <div class="item">
            <label for="firstname">First name</label>
            <input
              type="text"
              id="first_name"
              className="firstname"
              placeholder="Enter your first name"
            />
          </div>
          <div className="item">
            <label for="lastname">Last name</label>
            <input
              type="text"
              id="last_name"
              className="lastname"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <label for="">Email</label>
        <br />
        <input type="email" id="email" placeholder="yourname@email.com" />
        <br />
        <label for="">Message</label>
        <br />

        <textarea
          id="message"
          placeholder="send me a message and i'll reply you as soon as possible"
        ></textarea>
        <br />
        <div className="checkbox">
          <input type="checkbox" />
          <p>You agree to providing your data to name who may contact you</p>
        </div>
        <input
          type="button"
          class="contact-button"
          id="btn__submit"
          value="Send message"
        />
      </form>
    </div>
  );
}
export default Contact;
