// components/Projects.js
import { useState } from 'react';
import { contributionsData } from '../data/contributionsData';
import { experiencesData } from '../data/experiencesData';

export default function Projects() {
  const [tab, setTab] = useState('contributions');
  const data = tab === 'contributions' ? contributionsData : experiencesData;

  return (
    <div className="z-10 relative px-4 sm:px-12 py-24 max-w-4xl mx-auto">
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setTab('contributions')}
          className={`px-4 py-2 rounded-full font-semibold text-sm ${
            tab === 'contributions' ? 'bg-white text-black' : 'bg-neutral-800 text-white'
          }`}
        >
          🛠️ Contributions
        </button>
        <button
          onClick={() => setTab('experiences')}
          className={`px-4 py-2 rounded-full font-semibold text-sm ${
            tab === 'experiences' ? 'bg-white text-black' : 'bg-neutral-800 text-white'
          }`}
        >
          💼 Experiences
        </button>
      </div>

      <ul className="space-y-8">
        {data.map((item, i) => (
          <li key={i} className="bg-neutral-900 p-6 rounded-xl shadow-md border border-neutral-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl">{item.emoji}</span>
              <span className="text-sm text-neutral-400">{item.dates}</span>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="italic text-sm text-neutral-400">{item.location}</p>
            <p className="mt-2 font-medium">{item.short}</p>
            <p className="mt-1 text-sm text-neutral-300">{item.long}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
