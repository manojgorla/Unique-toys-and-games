import React, { useState, useEffect } from "react";

const NumberAnimation = ({ start = 0, end = 1000, duration = 2000 }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressCount = Math.min(
                start + (progress / duration) * (end - start),
                end
            );
            setCount(Math.floor(progressCount));
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [start, end, duration]);

    return <h1>{count.toLocaleString()}</h1>;
};

export default NumberAnimation;
