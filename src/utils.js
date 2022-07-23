export const validationsList = [
  {
    validationMsg: "8+ characters",
    validationFunc: (passText) => passText.length >= 8,
  },
  {
    validationMsg: "lowercase letter",
    validationFunc: (passText) => passText.match(/[a-z]/) !== null,
  },
  {
    validationMsg: "uppercase letter",
    validationFunc: (passText) => passText.match(/[A-Z]/) !== null,
  },
  {
    validationMsg: "number",
    validationFunc: (passText) => passText.match(/[0-9]/) !== null,
  },
  {
    validationMsg: "special character",
    validationFunc: (passText) =>
      passText.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null,
  },
];
