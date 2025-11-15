import { Rocket, Target, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Goal-first campaigns',
    desc: 'Tell us the views you want. We plan the creators, channels, and cadence to hit it.'
  },
  {
    icon: Users,
    title: 'Vetted clippers network',
    desc: 'Hundreds of editors and clippers across niches with proven performance.'
  },
  {
    icon: BarChart3,
    title: 'Live performance tracking',
    desc: 'Transparent dashboards with reach, watch-time, CTR, and cost per view.'
  },
  {
    icon: Rocket,
    title: 'End-to-end execution',
    desc: 'From scripting to edit to distribution — we handle everything so you don’t have to.'
  }
]

export default function Features(){
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">A growth engine built for short-form</h2>
          <p className="mt-3 text-gray-600">Everything you need to turn ambition into predictable, scalable views.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon:Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  )
}
