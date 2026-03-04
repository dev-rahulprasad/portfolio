function About() {
  return (
    <section
      id="about"
      className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800/90 dark:bg-slate-900"
    >
      <div className="space-y-3.5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
          About Me
        </p>
        <h2 className="text-2xl font-black sm:text-3xl">My Journey</h2>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
          I started learning web development in 2022 through MERN training, then
          continued with self-learning from YouTube. After building strong basics
          in HTML, CSS, JavaScript, Tailwind CSS and React fundamentals, I entered
          the e-commerce industry through a stable internship at HOK Beauty in
          August 2023.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
          During my internship and later roles at ITMTB Technologies and Digital
          Impressions, I specialized in Shopify theme development. I enjoy solving
          real business challenges and now want to keep growing toward React/Next.js
          and Shopify app development.
        </p>
      </div>
    </section>
  )
}

export default About
