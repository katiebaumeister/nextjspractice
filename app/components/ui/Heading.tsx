import { ReactNode } from 'react';

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {children}
    </h2>
  );
}
