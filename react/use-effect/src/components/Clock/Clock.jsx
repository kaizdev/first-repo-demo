import React, { useEffect, useState } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const tickInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(tickInterval);
        };
    }, []); // with no dependency, would cause an infinite loop
    return <span>{currentTime.toLocaleTimeString("en-US")}</span>;
};

export default Clock;
