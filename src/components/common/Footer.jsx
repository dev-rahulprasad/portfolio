import { contactInfo, socials } from '../../data/socials'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.8a2 2 0 0 1 2.1-1.7h1.7a2 2 0 0 1 2 1.6l.5 2.7a2 2 0 0 1-.6 1.8L9.6 10a14.6 14.6 0 0 0 4.4 4.4l.8-1.1a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.6 2v1.7a2 2 0 0 1-1.7 2.1c-1.2.2-2.5.1-3.7-.3a19 19 0 0 1-9.2-9.2A8 8 0 0 1 5 4.8Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  )
}

function SocialIcon({ id }) {
  if (id === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.91-.63.07-.62.07-.62 1 .08 1.54 1.03 1.54 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.1-4.56-4.95 0-1.1.4-2 1.03-2.72-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.65.72 1.03 1.62 1.03 2.72 0 3.86-2.35 4.7-4.59 4.95.36.31.69.92.69 1.87v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }
  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6.94 8.5V21H2.79V8.5h4.15ZM4.87 2.5a2.4 2.4 0 1 1 0 4.79 2.4 2.4 0 0 1 0-4.79ZM21.2 13.8V21h-4.14v-6.6c0-1.58-.56-2.66-1.97-2.66-1.08 0-1.72.72-2 1.42-.1.25-.13.6-.13.95V21H8.82s.06-11.06 0-12.5h4.14v1.77c.55-.85 1.53-2.06 3.73-2.06 2.72 0 4.51 1.77 4.51 5.59Z" />
      </svg>
    )
  }
  return null
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 pb-24 sm:px-6 lg:pb-6">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-start">
          <div className="w-full space-y-2 text-sm text-slate-600 md:w-auto dark:text-slate-400">
            <p>Copyright {new Date().getFullYear()} Rahul Prasad. All rights reserved.</p>
            <p>{contactInfo.location}</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3.5 py-1.5 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <PhoneIcon />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3.5 py-1.5 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <MailIcon />
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex w-full items-center justify-start gap-2 md:w-auto md:justify-end">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <SocialIcon id={social.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
