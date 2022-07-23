import "./RegistrationForm.css";
import React, { useState } from "react";
import ValidationCheck from "../ValidationCheck";
import { validationsList } from "../utils";

function RegistrationForm() {
  const [passwordText, setPasswordText] = useState("");

  const handlePasswordInput = (event) => {
    setPasswordText(event.target.value);
  };

  return (
    <section className="form-section">
      <form className="form">
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="pass"
            onChange={handlePasswordInput}
          />
          <section>
            {validationsList.map((item) => (
              <ValidationCheck
                validationFunc={item.validationFunc}
                enteredPass={passwordText}
                validationMsg={item.validationMsg}
              />
            ))}
          </section>
          <button type="button">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}

export default RegistrationForm;
