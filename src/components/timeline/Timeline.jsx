import TimelineItem from './TimelineItem'

function Timeline({ items }) {
  return (
    <div className="relative space-y-5">
      <span className="absolute left-[6px] top-2 h-[calc(100%-16px)] w-0.5 bg-slate-200 dark:bg-slate-700" />
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Timeline
