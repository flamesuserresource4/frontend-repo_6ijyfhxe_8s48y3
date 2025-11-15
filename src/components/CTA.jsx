export default function CTA(){
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Tell us your target views. We’ll take it from there.</h3>
        <p className="mt-3 text-gray-600">Share your product, audience, timeline, and view goal. We’ll respond within 24 hours with a plan and pricing.</p>

        <form onSubmit={(e)=> e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input type="text" placeholder="Work email" className="sm:col-span-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200" required />
          <input type="text" placeholder="Target views (e.g. 500k)" className="sm:col-span-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200" required />
          <button className="sm:col-span-1 inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-4 py-3 text-sm font-medium hover:bg-gray-800 transition">Request plan</button>
        </form>

        <div className="mt-4 text-xs text-gray-500">No hard pitch. No spam. Just a clear plan to hit your goals.</div>
      </div>
    </section>
  )
}
