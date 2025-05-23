export default function Background() {
  const gridSize = 40;
  const lines = [];
  for (let i = 0; i < window.innerWidth; i += gridSize) {
    lines.push(
      <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-white opacity-[0.03]" style={{ left: `${i}px` }} />
    );
  }
  for (let i = 0; i < window.innerHeight; i += gridSize) {
    lines.push(
      <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-white opacity-[0.03]" style={{ top: `${i}px` }} />
    );
  }

  return <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">{lines}</div>;
}
