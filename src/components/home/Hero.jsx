import { contactInfo } from '../../data/socials'

const highlightedSkills = ['Shopify Liquid', 'JavaScript', 'Tailwind CSS', 'Theme Development']

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.8a2 2 0 0 1 2.1-1.7h1.7a2 2 0 0 1 2 1.6l.5 2.7a2 2 0 0 1-.6 1.8L9.6 10a14.6 14.6 0 0 0 4.4 4.4l.8-1.1a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.6 2v1.7a2 2 0 0 1-1.7 2.1c-1.2.2-2.5.1-3.7-.3a19 19 0 0 1-9.2-9.2A8 8 0 0 1 5 4.8Z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5v11m0 0 4-4m-4 4-4-4M4 17.5v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" />
    </svg>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-9 dark:border-slate-800/90 dark:bg-slate-900"
    >
      <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/20" />
      <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/20" />

      <div className="relative space-y-5">
        <div className="space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            Personal Portfolio
          </p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">
            Rahul Prasad
          </h1>
          <p className="text-base font-semibold text-slate-700 sm:text-xl dark:text-slate-300">
            Shopify Developer | Frontend Developer
          </p>
          <p className="max-w-3xl text-sm text-slate-600 sm:text-base dark:text-slate-400">
            I build modern, responsive, and conversion-focused e-commerce interfaces
            with Shopify Liquid, JavaScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {highlightedSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold sm:text-sm dark:bg-slate-800"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <PhoneIcon />
            Call Me
          </a>
          <a
            href={contactInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
