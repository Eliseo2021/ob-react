import React, { useState } from "react";


const ColorChangingComponent = () => {
    const [color, setColor] = useState("black");
    const [intervalId, setIntervalId] = useState(undefined);

    function handleMouseEnter() {
        const id = setInterval(() => {
            const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)})`;
            setColor(newColor);
        }, 1000);
        setIntervalId(id);
    }

    function handleMouseLeave() {
        clearInterval(intervalId);
    }

    function handleDoubleClick() {
        clearInterval(intervalId);
    }

    return (
        <div
            style={{
                width: "255px",
                height: "255px",
                backgroundColor: color,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick}
        ></div>
    );
};

export default ColorChangingComponent;
