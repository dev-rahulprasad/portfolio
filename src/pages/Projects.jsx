import Projects from '../components/projects/Projects'

function ProjectsPage({ projects }) {
  return (
    <section className="space-y-8 sm:space-y-10">
      <div className="space-y-3.5">
        <a
          href="#hero"
          className="inline-flex rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          Back to Home
        </a>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          Portfolio
        </p>
        <h1 className="text-3xl font-black leading-tight sm:text-5xl">All Shopify Projects</h1>
        <p className="max-w-3xl text-sm text-slate-600 sm:text-base dark:text-slate-400">
          Technology, project details, screenshots, project URL, and responsibilities.
        </p>
      </div>

      <Projects items={projects} />
    </section>
  )
}

export default ProjectsPage
