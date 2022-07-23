import React from "react";
import "./ValidationCheck.css";

function ValidationCheck({ validationFunc, enteredPass, validationMsg }) {
  const check = validationFunc(enteredPass);

  return (
    <article>
      {
        <React.Fragment>
          <span className={check ? "rightCheckMark" : "wrongCheckMark"} />{" "}
          {validationMsg}
        </React.Fragment>
      }
    </article>
  );
}

export default ValidationCheck;
