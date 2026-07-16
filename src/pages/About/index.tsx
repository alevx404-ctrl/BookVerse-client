export default function About() {
  const VALUES = [
    { 
      title: 'Accessibility First', 
      desc: 'Universal platform design optimizing item exploration across all responsive viewports.', 
      icon: (
        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    { 
      title: 'Metadata Integrity', 
      desc: 'Strict classification schemes mapping author, publisher, and genre tracking parameters.', 
      icon: (
        <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
        </svg>
      )
    },
    { 
      title: 'Reader Centric', 
      desc: 'Zero clutter user spaces focused completely on reading progression queues and ledgers.', 
      icon: (
        <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      
      {/* Upper Brand Block */}
      <div className="space-y-4 max-w-3xl">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs font-black text-blue-700 uppercase tracking-wider">
            ✨ Behind the Architecture
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-none">
          About Book<span className="text-blue-600">Verse</span>
        </h1>
        
        <p className="text-base sm:text-lg text-slate-500 leading-relaxed pt-2 font-medium">
          BookVerse is a centralized management application designed to organize digital literary 
          inventories. The ecosystem gives catalog collectors fluid tools to browse, monitor, 
          and catalog curated titles inside an intuitive display framework.
        </p>
      </div>

      {/* Split Narrative Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start py-12 border-y border-slate-100">
        <div className="space-y-3 p-2">
          <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Our Strategic Mission
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            We aim to remove administrative friction from reading management logs. By utilizing clean 
            component isolation and structured query states, we transform a basic list into a powerful portal.
          </p>
        </div>
        <div className="space-y-3 p-2">
          <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            The Technical Vision
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Engineered using a modern single page application scheme, the system addresses asynchronous state updates, 
            rapid database pagination, and precise aesthetic scaling.
          </p>
        </div>
      </div>

      {/* Lower Core Pillars Grid */}
      <div className="space-y-8">
        <h3 className="text-center text-xs font-black uppercase tracking-widest text-slate-400">
          Core Platform Core Pillars
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div 
              key={v.title} 
              className="group bg-white border border-slate-200/70 rounded-3xl p-6 space-y-4 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/60 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                {v.icon}
              </div>
              
              <div className="space-y-1.5">
                <h4 className="font-extrabold text-slate-900 text-base tracking-tight">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}