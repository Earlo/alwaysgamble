"use client";
import React, { useState } from "react";

const RouletteWheel = () => {
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState("");

    const colors = [
        "red",
        "black",
        "green",
        "yellow",
        "blue",
        "white",
        "orange",
    ];
    const sections = colors.length;
    const angle = 360 / sections;

    const spinWheel = () => {
        setIsSpinning(true);
        const newRotation =
            rotation + (1440 + Math.floor(Math.random() * sections) * angle);
        setRotation(newRotation);

        setTimeout(() => {
            const sectionIndex =
                (sections - Math.floor((newRotation % 360) / angle)) % sections;
            setResult("" + (sectionIndex + 1)); // +1 because we start from 1, not 0
            setIsSpinning(false);
        }, 4000);
    };

    return (
        <div>
            <div
                className="wheel"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="spinner"></div>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="section"
                        style={{
                            transform: `rotate(${index * angle}deg)`,
                            backgroundColor: color,
                        }}
                    >
                        <span className="number-container">
                            <span className="number">{index + 1}</span>
                        </span>
                    </div>
                ))}
            </div>
            <button onClick={spinWheel} disabled={isSpinning}>
                Spin
            </button>
            {result && <p>Winning Number: {result}</p>}
        </div>
    );
};

export default RouletteWheel;
