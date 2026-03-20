/* eslint-disable react-hooks/purity */
import "./background.css";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const gradients = [
  "radial-gradient(circle at 30% 50%, #ff00cc, #0000ff)",
  "radial-gradient(circle at 40% 20%, #0e1616, #0389ff)",
  "radial-gradient(circle at 60% 20%, #00ff15, #38f9d7)",
  "radial-gradient(circle at 20% 20%, #00ffd0, #fee140)",
  "radial-gradient(circle at 70% 20%, #e63e3e, #ff0318)",
  "radial-gradient(circle at 10% 20%, #cb4510, #a90017)",
  "radial-gradient(circle at 30% 20%, #ffffff, #ffff00)",
  "radial-gradient(circle at 20% 20%, #4cb855, #fa71cd)",
  "radial-gradient(circle at 50% 20%, #6d623e, #4e330a)",
  "radial-gradient(circle at 30% 20%, #ff8400, #01050b)"
];

function Background() {
  const blobs = Array.from({ length: 20}).map((_, i) => {
    return (
      <div
        key={i}
        className="liquid"
        style={{
          "--size": `${random(150, 400)}px`,
          "--top": `${random(0, 80)}%`,
          "--left": `${random(0, 80)}%`,
          "--x": `${random(-200, 200)}px`,
          "--y": `${random(-200, 200)}px`,
          "--morph-duration": `${random(10, 20)}s`,
          "--float-duration": `${random(15, 30)}s`,
          "--gradient":
            gradients[Math.floor(Math.random() * gradients.length)]
        }}
      ></div>
    );
  });

  return <div className="background">{blobs}</div>;
}

export default Background;