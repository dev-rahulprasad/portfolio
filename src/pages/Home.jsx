import About from '../components/home/About'
import BrandsMarquee from '../components/home/BrandsMarquee'
import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import ProjectCard from '../components/projects/ProjectCard'
import Timeline from '../components/timeline/Timeline'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { onSpaLinkClick } from '../utils/navigation'

const PROJECTS_PATH = `${import.meta.env.BASE_URL}projects`

function Home({ featuredProjects }) {
  return (
    <div className="space-y-11 sm:space-y-14">
      <Hero />
      <Skills />

      <About />
      <BrandsMarquee />

      <section id="featured-projects" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Work Highlights
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Top 3 projects from my Shopify journey.
            </p>
          </div>
          <a
            href={PROJECTS_PATH}
            onClick={(event) => onSpaLinkClick(event, PROJECTS_PATH)}
            className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400"
          >
            View all
          </a>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {featuredProjects.map((project) => (
            <div key={project.id} className="w-[320px] shrink-0 snap-start sm:w-[380px]">
              <ProjectCard project={project} compact />
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            Career
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Experience Timeline</h2>
        </div>
        <Timeline items={experience} />
      </section>

      <section id="education" className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            Learning
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Educational Journey</h2>
        </div>
        <Timeline items={education} />
      </section>
    </div>
  )
}

export default Home
