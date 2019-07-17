import React from "react";
import "./index.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
