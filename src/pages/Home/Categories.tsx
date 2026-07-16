import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export default function Categories() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-100 pb-8 mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Index Systems
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Browse Catalogs by Core Discipline
            </h2>
          </div>
          <p className="text-sm font-medium text-slate-500 max-w-sm">
            Access curated sub-ledgers across isolated literary categories optimized for community review queries.
          </p>
        </div>

        {/* Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              to={`/books?category=${cat.id}`}
              className="group relative flex flex-col justify-between p-6 bg-slate-50/60 border border-slate-200/60 rounded-[24px] hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden min-h-[180px]"
            >
              {/* Abstract decorative graphic inside card corner */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-100 rounded-full scale-75 group-hover:bg-blue-50/50 group-hover:scale-110 transition-all duration-300 -z-0" />

              <div className="relative z-10 space-y-4">
                <div className="h-10 w-10 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {cat.icon || "✦"}
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight">
                    {cat.name}
                  </h3>
                  <span className="inline-block text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                    Total Assets: {cat.books.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="relative z-10 pt-4 flex items-center text-xs font-black text-slate-400 group-hover:text-blue-600 transition-colors">
                Open Ledger 
                <svg className="h-3 w-3 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}