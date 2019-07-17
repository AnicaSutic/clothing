import React from "react";
import "./index.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} ${inverted ? "inverted" : ""} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
