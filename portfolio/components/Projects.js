import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { projectsAndResearchData } from '../data/contributionsData';
import { positionsAndExperiencesData } from '../data/experiencesData';

const tabs = [
  { key: 'contributions', label: '🛠️ Contributions' },
  { key: 'experiences', label: '💼 Experiences' },
];

export default function Projects() {
  const router = useRouter();
  const [tab, setTab] = useState('contributions');

  useEffect(() => {
    const urlTab = router.query.tab;
    if (urlTab === 'experiences' || urlTab === 'contributions') {
      setTab(urlTab);
    }
  }, [router.query.tab]);

  const handleTabChange = (key) => {
    setTab(key);
    router.replace(
      {
        pathname: router.pathname,
        query: { tab: key },
      },
      undefined,
      { shallow: true }
    );
  };

  const data = tab === 'contributions' ? projectsAndResearchData : positionsAndExperiencesData;

  return (
    <div className="z-10 relative px-4 sm:px-12 py-24 max-w-5xl mx-auto">
      <div className="flex overflow-x-auto sm:justify-center space-x-4 mb-10 no-scrollbar">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleTabChange(key)}
            className={`whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition ${
              tab === key ? 'bg-white text-black' : 'bg-neutral-800 text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[minmax(150px,auto)]">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-xl shadow border border-neutral-800 flex flex-col justify-between h-full"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl">{item.emoji}</span>
              <span className="text-sm text-neutral-400">{item.dates}</span>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="italic text-sm text-neutral-400">{item.location}</p>
            <p className="mt-2 font-medium">{item.short}</p>
            <p className="mt-1 text-sm text-neutral-300">{item.long}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
