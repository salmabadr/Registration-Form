import "./RegistrationForm.css";
import React, { useState, useEffect, useRef } from "react";
import ValidationCheck from "../ValidationCheck";
import {
  validationsList,
  handleKeyRight,
  handleKeyLeft,
  handleKeyEnter,
} from "../utils";

function RegistrationForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();

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
      <form name="registration-form" className="form">
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            aria-label="Email: "
            aria-required="true"
            data-testid="email-input"
            value={emailText}
            onChange={handleEmailInput}
            onKeyPress={(event) => handleKeyEnter(event, buttonRef)}
            onKeyDown={(event) => handleKeyRight(event, passwordRef)}
            ref={emailRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            aria-label="Password: "
            aria-required="true"
            data-testid="password-input"
            value={passwordText}
            onChange={handlePasswordInput}
            onKeyPress={(event) => handleKeyEnter(event, buttonRef)}
            onKeyDown={(event) => handleKeyLeft(event, emailRef)}
            ref={passwordRef}
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
          <button type="button" disabled={isDisabled} ref={buttonRef}>
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default RegistrationForm;
