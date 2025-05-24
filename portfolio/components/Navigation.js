"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation = () => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Invisible element used as scroll trigger */}
      <div ref={ref} className="h-1" />

      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur transition duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto max-w-5xl">
          {/* Right links */}
          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-white transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* Left back arrow */}
          <Link
            href="/"
            className="text-zinc-300 hover:text-white transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </header>
    </>
  );
};
