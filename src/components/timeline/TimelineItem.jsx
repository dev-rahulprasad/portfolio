function TimelineItem({ item }) {
  return (
    <article className="relative pl-9">
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900" />
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-slate-800/90 dark:bg-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold">{item.role || item.title}</h3>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {item.company || item.institute}
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-slate-800">
            {item.period}
          </span>
        </div>

        <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
          {item.type ? <span>{item.type}</span> : null}
          {item.location ? <span>{item.location}</span> : null}
        </div>

        <ul className="mt-4 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
          {(item.highlights || item.details || []).map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default TimelineItem
