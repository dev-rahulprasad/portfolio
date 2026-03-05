import { brands } from '../../data/brands'

function BrandItem({ brand }) {
  return (
    <a
      href={brand.website}
      target="_blank"
      rel="noreferrer"
      className="flex h-[74px] w-[190px] shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm dark:border-slate-700/90 dark:bg-white"
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        loading="lazy"
        className={`w-auto max-w-full object-contain ${brand.logoClassName || 'h-9'}`}
      />
    </a>
  )
}

function BrandsMarquee() {
  const marqueeItems = [...brands, ...brands]

  return (
    <section id="brands" className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
          Clients
        </p>
        <h2 className="mt-2 text-2xl font-black sm:text-3xl">Brands I Have Worked With</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-slate-800/80 dark:bg-slate-900/50">
        <div className="marquee-track flex w-max gap-3">
          {marqueeItems.map((brand, index) => (
            <BrandItem key={`${brand.id}-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsMarquee
