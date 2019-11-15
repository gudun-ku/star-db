import React from "react";
import "./error-indicator.css";
import icon from "./death-star.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="error-header">
        <img src={icon} alt="error icon" />
        <span className="boom">BOOM!</span>
      </div>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fxt it...)</span>
    </div>
  );
};

export default ErrorIndicator;
