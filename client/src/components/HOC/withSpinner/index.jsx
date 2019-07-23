import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./withSpinner.styles";

// hoc, func takes some component get passed into new component is true render with spinner if not render just that component
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
