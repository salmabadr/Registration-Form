import "./RegistrationForm.css";
import React, { useState, useEffect } from "react";
import ValidationCheck from "../ValidationCheck";
import { validationsList } from "../utils";

function RegistrationForm() {
  const [passwordText, setPasswordText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [validationsResults, setValidationsResults] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleEmailInput = (event) => {
    setEmailText(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPasswordText(event.target.value);
  };

  useEffect(() => {
    const results = validationsList.map((item) => ({
      isValid: item.validationFunc(passwordText),
      validationMsg: item.validationMsg,
    }));

    setValidationsResults(results);

    setIsDisabled(
      results.filter((item) => !item.isValid).length > 0 ||
        !/\S+@\S+\.\S+/.test(emailText)
    );
  }, [passwordText, emailText]);

  return (
    <section className="form-section">
      <form className="form">
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleEmailInput}
          />
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
            {validationsResults.map((item, index) => (
              <ValidationCheck
                key={index}
                isValid={item.isValid}
                validationMsg={item.validationMsg}
              />
            ))}
          </section>
          <button type="button" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default RegistrationForm;
