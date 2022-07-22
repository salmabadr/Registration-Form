import React from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  return (
    <section className="form-section">
      <form className="form">
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" name="pass" />
          <button type="button">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}

export default RegistrationForm;
