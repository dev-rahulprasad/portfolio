import { useState } from 'react'

function ProjectCard({ project, compact = false }) {
  const [showAllRoles, setShowAllRoles] = useState(false)
  const visibleRoles = showAllRoles
    ? project.responsibilities
    : project.responsibilities.slice(0, compact ? 2 : 3)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-slate-800/90 dark:bg-slate-900">
      <div className={`flex flex-1 flex-col space-y-3.5 ${compact ? 'p-4' : 'p-5'}`}>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
              {project.technology}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {project.role}
            </span>
          </div>
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-black leading-tight`}>
            {project.name}
          </h3>
          <p className={`${compact ? 'text-xs' : 'text-sm'} leading-relaxed text-slate-600 dark:text-slate-400`}>
            {project.shortDescription}
          </p>
        </div>

        <div className={`rounded-xl border border-slate-200 bg-slate-50 ${compact ? 'min-h-[138px] p-3' : 'min-h-[170px] p-4'} dark:border-slate-800 dark:bg-slate-950/70`}>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            My Role
          </h4>
          <ul className={`${compact ? 'space-y-1 text-xs' : 'space-y-1.5 text-sm'} text-slate-700 dark:text-slate-300`}>
            {visibleRoles.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => setShowAllRoles((prev) => !prev)}
            className={`${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} rounded-lg border border-slate-300 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800`}
          >
            {showAllRoles ? 'Show Less' : 'View More Details'}
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={`${compact ? 'text-xs' : 'text-sm'} inline-flex items-center font-semibold text-emerald-700 underline decoration-transparent underline-offset-4 transition hover:decoration-current dark:text-emerald-400`}
          >
            View project
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
