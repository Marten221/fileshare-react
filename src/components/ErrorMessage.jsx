import React from "react";

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return <p className="text-error">{message}</p>
};

export default ErrorMessage;