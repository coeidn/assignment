import React, { useState } from "react";

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill("lightblue")); // Array to store colors of all boxes

  const handleClick = (index) => {
    if (index === 9) {
      // Sequentially update colors to orange
      colors.forEach((_, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[i] = "orange"; // Change current box to orange
            return newColors;
          });
        }, i * 500); // Delay increases with each box
      });
    } else {
      // If not the last box, set the clicked box to green
      setColors((prevColors) => {
        const newColors = Array(9).fill("lightblue");
        newColors[index - 1] = "green"; // Update the clicked box
        return newColors;
      });
    }
  };

  return (
    <div className="container mt-4">
      {[0, 1, 2].map((row) => (
        <div className="row" key={row}>
          {[0, 1, 2].map((col) => {
            const boxIndex = row * 3 + col + 1; // Calculate box index (1-9)
            return (
              <div className="col-4" key={boxIndex}>
                <div
                  className="p-3 border text-center"
                  style={{
                    backgroundColor: colors[boxIndex - 1],
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(boxIndex)}
                >
                  {boxIndex}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
