'use client';
import { useEffect, useState } from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

export function Particles() {
  const { x, y } = useMousePosition();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  if (!dimensions.width || !dimensions.height) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => {
        const left = Math.random() * dimensions.width;
        const top = Math.random() * dimensions.height;
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10 w-[2px] h-[2px] animate-pulse"
            style={{
              left: `${(left + x * 0.05) % dimensions.width}px`,
              top: `${(top + y * 0.05) % dimensions.height}px`,
            }}
          />
        );
      })}
    </div>
  );
}
