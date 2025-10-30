import React from "react";
import "./Flames.css";

const ROWS = 10;
const COLS = 20;

// Array of dark reds/oranges for the fire effect
const FLAME_COLORS = [
    "#7b241c", // dark red
    "#c0392b", // red
    "#d35400", // dark orange
    "#ba4a00", // burnt orange
    "#e67e22", // orange
    "#f39c12"  // yellow-orange
];

// Helper to randomize/colorwave for flame color
function getFlameColor(index) {
    // Use a pattern/wave or Math.random for more randomness:
    const colorIdx = Math.floor((index + Math.floor(index / COLS)) % FLAME_COLORS.length);
    return FLAME_COLORS[colorIdx];
}

function getOpacity(index) {
    // Flicker between 0.3 and 0.95, giving bright and dim areas:
    return 0.3 + (Math.sin(index * 1.7) + 1) * 0.35; // in [0.3, 1]
}

function getRotation(index) {
    // Vary rotation for effect (as before)
    return index % 4;
}

const CursorGrid = () => {
    const icons = [];
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const idx = row * COLS + col;
            icons.push(
                <div
                    key={idx}
                    style={{
                        "--o": getOpacity(idx),
                        "--r": getRotation(idx),
                        "--flame": getFlameColor(idx)
                    }}
                >
                    +
                </div>
            );
        }
    }

    return (
        <div className="grid">
            {icons}
        </div>
    );
};

export default CursorGrid;
