import React from "react";
import "./ValidationCheck.css";

function ValidationCheck({ isValid, validationMsg }) {
  const checkMarkClass = isValid ? "rightCheckMark" : "wrongCheckMark";

  return (
    <article className="validation-section">
      {
        <React.Fragment>
          <span className={checkMarkClass} /> {validationMsg}
        </React.Fragment>
      }
    </article>
  );
}

export default ValidationCheck;
