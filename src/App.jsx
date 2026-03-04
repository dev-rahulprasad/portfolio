import './App.css'
import { useEffect, useMemo, useState } from 'react'
import BottomNav from './components/common/BottomNav'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects'
import { projects } from './data/projects'

function getInitialRoute() {
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/'
  }
  return window.location.hash
}

function App() {
  const [route, setRoute] = useState(getInitialRoute)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const featuredProjects = useMemo(() => projects.slice(0, 3), [])
  const isProjectsPage = route === '#/projects'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [isProjectsPage])

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
