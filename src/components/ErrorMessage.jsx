import React from "react";

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    const styles = {
        color: "red",
    }

    return <p style={styles}>{message}</p>
};

export default ErrorMessage;