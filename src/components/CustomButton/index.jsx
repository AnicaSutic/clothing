import React from "react";
import "./index.scss";
import { CustomButtonContainer } from "./index.styles";

export default function CustomButton({ children, ...props }) {
  console.log(props)
  return <CustomButtonContainer className='custom-button' {...props}>{children}</CustomButtonContainer>;
}
