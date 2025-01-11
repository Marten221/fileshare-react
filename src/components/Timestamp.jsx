import React from "react";

const Timestamp = ({timestamp}) => {
    return (
        <span>{timestamp.day}.{timestamp.month}.{timestamp.year}, {timestamp.hour}:{timestamp.minute}</span>
    );
};

export default Timestamp;