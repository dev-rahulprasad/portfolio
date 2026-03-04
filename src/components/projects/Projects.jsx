import ProjectCard from './ProjectCard'

function Projects({ items }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
