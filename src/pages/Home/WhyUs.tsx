import { whyUs } from '../../data/whyUs';

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main sticky panel on big viewports */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Ecosystem Features
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl leading-tight">
              Engineered for Serious Readers
            </h2>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              We bypass standard consumer gimmicks to introduce a dedicated, lightning-fast database ledger interface optimized for processing your reading metrics.
            </p>
          </div>

          {/* Interactive Bento Deck */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((p, index) => (
              <div 
                key={p.title} 
                className={`p-6 border border-slate-200 rounded-3xl bg-white shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between ${
                  index === 0 ? 'sm:col-span-2 bg-slate-50/50 border-dashed' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="h-9 w-9 bg-slate-100 border border-slate-200/80 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm">
                    {p.icon || "✓"}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed mt-1">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-6 flex justify-between items-center text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  <span>Status: Available</span>
                  <span>Core Module 0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}