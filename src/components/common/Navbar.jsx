import { useEffect, useMemo, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'brands', label: 'Brands' },
  { id: 'featured-projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
]

function DotIcon() {
  return <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
}

function Navbar({ isDark, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero')

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash
      if (hash === '#/projects') {
        setActiveSection('all-projects')
        return
      }

      const hashSection = hash.replace('#', '')
      if (sectionIds.includes(hashSection)) {
        setActiveSection(hashSection)
      } else {
        setActiveSection('hero')
      }
    }

    const updateFromScroll = () => {
      if (window.location.hash === '#/projects') {
        setActiveSection('all-projects')
        return
      }

      let current = 'hero'
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        const rect = section.getBoundingClientRect()
        if (rect.top <= 130 && rect.bottom > 130) {
          current = id
          break
        }
      }
      setActiveSection(current)
    }

    updateFromHash()
    window.addEventListener('hashchange', updateFromHash)
    window.addEventListener('scroll', updateFromScroll, { passive: true })

    return () => {
      window.removeEventListener('hashchange', updateFromHash)
      window.removeEventListener('scroll', updateFromScroll)
    }
  }, [sectionIds])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90">
      <div className="mx-auto w-full max-w-6xl px-4 py-3.5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <a href="#hero" className="text-sm font-black tracking-wide sm:text-base">
            Rahul <span className="text-emerald-600 dark:text-emerald-400">Portfolio</span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative px-2 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? 'text-slate-900 dark:text-slate-100'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
            <a
              href="#/projects"
              className={`group relative inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold transition ${
                activeSection === 'all-projects'
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              <DotIcon />
              All Projects
              <span
                className={`pointer-events-none absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                  activeSection === 'all-projects' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
