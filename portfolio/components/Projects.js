import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section className="py-24 px-4 border-t border-neutral-800">
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-neutral-800 rounded-2xl p-6 bg-neutral-900 hover:bg-neutral-800 transition shadow-sm hover:shadow-lg"
          >
            <div className="text-sm text-neutral-500 mb-2">{project.dates}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.emoji} {project.title}
            </h3>
            <div className="text-xs text-neutral-400 italic mb-4">{project.location}</div>
            <p className="text-sm text-neutral-300 mb-2">{project.short}</p>
            <p className="text-sm text-neutral-500">{project.long}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
