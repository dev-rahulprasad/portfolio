import { skills } from '../../data/skills'

function Skills() {
  return (
    <section id="skills" className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
          Expertise
        </p>
        <h2 className="mt-2 text-2xl font-black sm:text-3xl">Skills</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-sm dark:border-slate-800/90 dark:bg-slate-900"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              loading="lazy"
              className="h-6 w-6 shrink-0 object-contain"
            />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
