/* eslint-disable react-hooks/purity */
import "./background.css";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const gradients = [
  "radial-gradient(circle at 30% 50%, #3b82f6, #0000ff)",
  "radial-gradient(circle at 40% 20%, #9333ea, #0389ff)",
  "radial-gradient(circle at 60% 20%, #06b6d4, #3b82f6)",
  "radial-gradient(circle at 20% 20%, #9333ea, #ec4899)",
  "radial-gradient(circle at 70% 20%, #3b82f6, #9333ea)",
  "radial-gradient(circle at 10% 20%, #6d28d9, #3b82f6)",
  "radial-gradient(circle at 30% 20%, #1d4ed8, #7c3aed)",
  "radial-gradient(circle at 20% 20%, #0e7490, #3b82f6)",
];

// Defined ONCE at module level so they don't re-randomize on every render
const blobsData = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  size: `${random(200, 500)}px`,
  top: `${random(-10, 90)}%`,
  left: `${random(-10, 90)}%`,
  x: `${random(-150, 150)}px`,
  y: `${random(-150, 150)}px`,
  morphDuration: `${random(12, 22)}s`,
  floatDuration: `${random(18, 35)}s`,
  gradient: gradients[i % gradients.length],
}));

function Background() {
  return (
    <div className="background">
      {blobsData.map((blob) => (
        <div
          key={blob.id}
          className="liquid"
          style={{
            "--size": blob.size,
            "--top": blob.top,
            "--left": blob.left,
            "--x": blob.x,
            "--y": blob.y,
            "--morph-duration": blob.morphDuration,
            "--float-duration": blob.floatDuration,
            "--gradient": blob.gradient,
          }}
        />
      ))}
    </div>
  );
}

export default Background;