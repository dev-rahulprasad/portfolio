import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'brands', label: 'Brands' },
  { id: 'featured-projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m3.5 10 8.5-6.5L20.5 10" />
      <path d="M5.5 9.5V20.5H18.5V9.5" />
    </svg>
  )
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 7.5h17v12h-17z" />
      <path d="M8.5 7.5V5.5h7v2" />
      <path d="M3.5 12.5h17" />
    </svg>
  )
}

function BrandIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="7.5" cy="8" r="2.5" />
      <circle cx="16.5" cy="8" r="2.5" />
      <path d="M5 17.5h5M14 17.5h5" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z" />
    </svg>
  )
}

function BottomNav() {
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
    <nav className="fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-around border-t border-slate-200/80 bg-white/95 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden dark:border-slate-700/80 dark:bg-slate-900/95">
      <a
        href="#hero"
        className={`inline-flex w-16 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-center text-[11px] font-semibold ${
          activeSection === 'hero' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'
        }`}
      >
        <HomeIcon />
        Home
      </a>
      <a
        href="#brands"
        className={`inline-flex w-16 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-center text-[11px] font-semibold ${
          activeSection === 'brands' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'
        }`}
      >
        <BrandIcon />
        Brands
      </a>
      <a
        href="#featured-projects"
        className={`inline-flex w-16 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-center text-[11px] font-semibold ${
          activeSection === 'featured-projects'
            ? 'text-emerald-600 dark:text-emerald-400'
            : 'text-slate-600 dark:text-slate-300'
        }`}
      >
        <ProjectIcon />
        Work
      </a>
      <a
        href="#contact"
        className={`inline-flex w-16 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-center text-[11px] font-semibold ${
          activeSection === 'contact' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'
        }`}
      >
        <ContactIcon />
        Contact
      </a>
      <a
        href="#/projects"
        className={`inline-flex w-16 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-center text-[11px] font-semibold ${
          activeSection === 'all-projects'
            ? 'text-emerald-600 dark:text-emerald-400'
            : 'text-slate-600 dark:text-slate-300'
        }`}
      >
        <GridIcon />
        All
      </a>
    </nav>
  )
}

export default BottomNav
