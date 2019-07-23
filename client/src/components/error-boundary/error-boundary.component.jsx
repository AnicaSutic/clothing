import React, { Component } from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./idex.styles";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  // if children through an error that error is passed into this function
  static getDerivedStateFromError(error) {
    // process error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
      if(this.state.hasError) {
          return (
              <ErrorImageOverlay>
                  <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                  <ErrorImageText>Sorry this page is broken</ErrorImageText>
              </ErrorImageOverlay>
          )
      }
      return this.props.children;
  }
}
