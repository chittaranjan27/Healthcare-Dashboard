// src/components/ui/button.jsx
import React from "react";
import "./button.css"; // Optional: if you want to add styles

export function Button({ children, className = "", ...props }) {
  return (
    <button className={`my-default-button ${className}`} {...props}>
      {children}
    </button>
  );
}
