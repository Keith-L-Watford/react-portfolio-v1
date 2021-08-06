import React, { useState } from "react";
import "../../styles/pages.css";



export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleInputChange = (e) => {
     
      const { name, value } = e.target;
  
     return name === 'name' ? setName(value) : setName(value),
            email === 'name' ? setEmail(value) : setEmail(value)
            message === 'name' ? setMessage(value) : setMessage(value)
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their first and last name, clear the inputs
      alert(`Thank you ${name} for the message`);
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <div>
      <h3 className="title">Contact Me</h3>

      <div id="after_submit"></div>
      <form
        id="contact_form"
        action="#"
        // method="POST"
        enctype="multipart/form-data"
      >
        <div class="row">
          {/* <label class="required" for="name">
            Your name:
          </label> */}
          <br />
          <input
          placeholder="Name"
            id="name"
            class="input"
            name="name"
            type="text"
            // value={name}
            size="3"
            onchange={handleFormSubmit}
          />
          <br />
          <span id="name_validation" class="error_message"></span>
        </div>
        <div class="row">
       
          <br />
          <input
          placeholder="Email"
            id="email"
            class="input"
            name="email"
            type="text"
            // value={email}
            size="30"
            onchange={handleFormSubmit}
          />
          <br />
          <span id="email_validation" class="error_message"></span>
        </div>
        <div class="row">
          <label class="required" for="message">
            
          </label>
          <br />
          <textarea
          placeholder="Message"
            id="message"
            class="input"
            name="message"
            
            rows="7"
            cols="30"
          ></textarea>
          <br />
          <span id="message_validation" class="error_message"></span>
        </div>

        <input id="submit_button" type="submit" value="Send email" />
      </form>

      <div class="tile is-ancestor" id="links">
<br />
<br />
<br />


</div>
    </div>
  );
}
