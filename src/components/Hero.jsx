import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
            Interactive 3D – built for modern creators
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Bring brands and clippers together to drive views
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Set your target views. We orchestrate vetted clippers, creative strategy, and distribution across social to make it happen.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#cta" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition">
              Get a demo
            </a>
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-black/10 hover:bg-black/5 transition">
              See pricing
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:flex items-center gap-6 opacity-80">
            <Logo name="Nova" />
            <Logo name="Lumen" />
            <Logo name="Quark" />
            <Logo name="Orbit" />
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
    </section>
  );
}

function Logo({ name }) {
  return (
    <div className="text-xs text-gray-600 font-medium tracking-wider uppercase">
      {name}
    </div>
  );
}
