export default function Pricing(){
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Simple, outcomes-first pricing</h2>
          <p className="mt-3 text-gray-600">Pay for the views you want. We scale your clip volume and distribution to match.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Plan name="Starter" price="$2k/mo" blurb="Up to 250k guaranteed views" best={false} features={["3-4 weekly clips", "Creator matching", "Basic reporting"]} />
          <Plan name="Growth" price="$5k/mo" blurb="Up to 1M guaranteed views" best features={["Daily clips", "Multi-channel distribution", "Advanced analytics"]} />
          <Plan name="Scale" price="Custom" blurb="1M+ views and paid amplification" best={false} features={["Dedicated pod", "Paid + organic mix", "Custom attribution"]} />
        </div>
      </div>
    </section>
  )
}

function Plan({ name, price, blurb, best=false, features=[] }){
  return (
    <div className={"relative rounded-2xl border p-6 shadow-sm bg-white " + (best ? "border-blue-500 ring-2 ring-blue-200" : "border-black/5") }>
      {best && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs rounded-full bg-blue-600 text-white px-2 py-0.5">Most popular</div>
      )}
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-lg font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{blurb}</div>
        </div>
        <div className="text-2xl font-semibold tracking-tight">{price}</div>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {features.map(f => (
          <li key={f} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
            {f}
          </li>
        ))}
      </ul>
      <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition">Get started</a>
    </div>
  )
}
