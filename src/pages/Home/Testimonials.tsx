import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Verified Input logs
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Ecosystem Validation Protocols
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Big Highlight Testimonial Card */}
          <div className="lg:col-span-5 bg-slate-950 text-white border border-slate-900 rounded-[32px] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#3b82f6,transparent_40%)] opacity-30" />
            <span className="text-5xl font-black font-serif text-slate-800 leading-none relative z-10">“</span>
            <p className="text-base font-medium italic text-slate-300 leading-relaxed relative z-10 mb-8">
              "{testimonials[0]?.review || 'The index speeds and profile ledger arrays make maintaining my research queue effortless.'}"
            </p>
            <div className="border-t border-slate-800 pt-6 relative z-10">
              <h4 className="font-black text-sm text-white">{testimonials[0]?.name || 'Alpha User'}</h4>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-0.5">{testimonials[0]?.role || 'Beta Operator'}</p>
            </div>
          </div>

          {/* Right Secondary Stack Rows */}
          <div className="lg:col-span-7 flex flex-col gap-4 justify-between">
            {testimonials.slice(1, 3).map((t) => (
              <div 
                key={t.id} 
                className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between flex-1"
              >
                <p className="text-sm font-medium text-slate-600 italic leading-relaxed mb-4">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                  <div className="h-6 w-6 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black text-slate-500 flex items-center justify-center uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs">{t.name}</h4>
                    <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}