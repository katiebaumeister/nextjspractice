"use client";

import React, { useEffect, useMemo, useState } from "react";

// Hook to track mouse position
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

export default function Particles() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { x, y } = useMousePosition();

  // Capture initial window size once
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Generate random positions once per dot
  const dotPositions = useMemo(() => {
    return new Array(40).fill(0).map(() => ({
      left: Math.random(),  // percentage of width
      top: Math.random(),   // percentage of height
    }));
  }, []);

  if (!windowSize.width || !windowSize.height) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {dotPositions.map(({ left, top }, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10 w-[2px] h-[2px] animate-pulse"
          style={{
            left: `${(left * windowSize.width + x * 0.05) % windowSize.width}px`,
            top: `${(top * windowSize.height + y * 0.05) % windowSize.height}px`,
          }}
        />
      ))}
    </div>
  );
}
