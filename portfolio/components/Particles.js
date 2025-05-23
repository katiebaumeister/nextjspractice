'use client';
import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

export default function Particles() {
  const { x, y } = useMousePosition();
  const dots = new Array(40).fill(0);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {dots.map((_, i) => {
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10 w-[2px] h-[2px] animate-pulse"
            style={{
              left: `${(left + x * 0.05) % window.innerWidth}px`,
              top: `${(top + y * 0.05) % window.innerHeight}px`,
            }}
          />
        );
      })}
    </div>
  );
}
