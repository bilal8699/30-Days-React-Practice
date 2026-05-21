import React, { Children } from "react";

const Button = ({children}) => {
  return <button className="custom-btn">{children}</button>;
};

export default Button;
