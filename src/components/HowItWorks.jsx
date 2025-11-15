import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Set your view target',
    desc: 'Share goals, audience, and budget. We project timelines and cost.'
  },
  {
    title: 'We assemble your clip squad',
    desc: 'We brief the right creators and editors, match formats and channels.'
  },
  {
    title: 'Launch, iterate, scale',
    desc: 'Weekly creative cycles and optimization until targets are achieved.'
  }
]

export default function HowItWorks(){
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">From brief to views — without the busywork</h2>
            <p className="mt-3 text-gray-600">Stay focused on the product. We handle the team, the edits, the posting, and the performance.</p>

            <ul className="mt-8 space-y-5">
              {steps.map((s) => (
                <li key={s.title} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">{s.title}</div>
                    <div className="text-sm text-gray-600">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 border border-black/5" />
            <div className="mt-4 text-sm text-gray-600">A modern workflow designed for speed and consistency across TikTok, Reels, Shorts, and X video.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
