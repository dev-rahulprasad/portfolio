import './App.css'
import { useEffect, useMemo, useState } from 'react'
import BottomNav from './components/common/BottomNav'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects'
import { projects } from './data/projects'

const BASE_PATH = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL
const PROJECTS_PATH = `${BASE_PATH}/projects`

function getRouteFromPath(pathname) {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  return normalized === PROJECTS_PATH ? 'projects' : 'home'
}

function App() {
  const [route, setRoute] = useState(() => getRouteFromPath(window.location.pathname))
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    const onLocationChange = () => setRoute(getRouteFromPath(window.location.pathname))
    window.addEventListener('popstate', onLocationChange)
    return () => window.removeEventListener('popstate', onLocationChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const featuredProjects = useMemo(() => projects.slice(0, 3), [])
  const isProjectsPage = route === 'projects'

  useEffect(() => {
    if (isProjectsPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const sectionId = window.location.hash.replace('#', '')
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [route, isProjectsPage])

  useEffect(() => {
    document.title = isProjectsPage
      ? 'Projects | Rahul Prasad'
      : 'Portfolio | Rahul Prasad'
  }, [isProjectsPage])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

      <main className="mx-auto w-full max-w-6xl px-4 py-9 pb-10 sm:px-6 sm:py-12 lg:pb-14">
        {isProjectsPage ? (
          <ProjectsPage projects={projects} />
        ) : (
          <Home featuredProjects={featuredProjects} />
        )}
      </main>

      <Footer />
      <BottomNav />
    </div>
  )
}

export default App
