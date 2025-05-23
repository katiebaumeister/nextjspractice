import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section className="py-24 px-4 border-t border-neutral-800">
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={index} className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900 hover:bg-neutral-800 transition">
            <div className="text-2xl mb-2">{project.emoji} <span className="font-semibold text-white">{project.title}</span></div>
            <div className="text-sm text-neutral-500 mb-4 italic">{project.location} | {project.dates}</div>
            <p className="text-neutral-300 mb-2">{project.short}</p>
            <p className="text-neutral-400 text-sm">{project.long}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
