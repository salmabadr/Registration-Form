import React, { Fragment } from "react";
import "./ValidationCheck.css";

function ValidationCheck({ isValid, validationMsg }) {
  const checkMarkClass = isValid ? "rightCheckMark" : "wrongCheckMark";

  return (
    <article className="validation-section" data-testid="validation-section">
      {
        <Fragment>
          <span className={checkMarkClass} data-testid="check-mark" />{" "}
          {validationMsg}
        </Fragment>
      }
    </article>
  );
}

export default ValidationCheck;
