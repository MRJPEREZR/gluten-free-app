import React from "react";

export function Input({ className, ...props }) {
    return (
      <input
        className={`border rounded-lg px-4 py-2 ${className}`}
        {...props}
      />
    );
  }
  