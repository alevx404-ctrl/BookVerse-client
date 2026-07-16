import { stats } from '../../data/stats';

export default function Stats() {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:4rem] opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
          {stats.map((s, idx) => (
            <div key={s.title} className={`p-6 flex flex-col justify-between ${idx > 1 ? 'pt-6 sm:pt-6' : ''}`}>
              <div className="flex items-center justify-between w-full">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">
                  {s.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-400" />
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {s.value}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <span className="text-emerald-400">▲ Live</span> verified telemetry packet
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}