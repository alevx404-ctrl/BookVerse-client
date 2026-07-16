import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBookById } from '../../services/bookService';
import LoadingSkeleton from '../../components/common/LoadingSkeleton';

interface BookData {
  _id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  price: number;
  rating: number;
  language: string;
  publisher: string;
  publishedYear: number;
  pages: number;
  coverImage: string;
}

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    fetchBookById(id)
      .then((res) => {
        if (res.success) {
          setBook(res.data);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-6">
        <div className="h-5 w-36 bg-slate-200 rounded-xl animate-pulse" />
        <div className="border border-slate-200/60 rounded-3xl p-6 sm:p-8 bg-white">
          <LoadingSkeleton variant="detail" />
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-2xl mb-4">
          🔍
        </div>
        <h3 className="text-xl font-black text-slate-900 tracking-tight">Record Not Located</h3>
        <p className="text-sm text-slate-500 mt-1 mb-6">Could not find the requested book record details within the current collection cluster.</p>
        <Link 
          to="/books" 
          className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
        >
          ← Return to Catalog Overview
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-6">
      
      {/* Dynamic Navigation Interface */}
      <div>
        <Link 
          to="/books" 
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 shadow-sm hover:bg-slate-50 transition-all duration-200"
        >
          <svg className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Catalog
        </Link>
      </div>

      {/* Main Showcase Grid Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-10 shadow-xl shadow-slate-100/40 relative overflow-hidden">
        
        {/* Left Side Cover Display Block */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="sticky top-6 w-full max-w-[320px] md:max-w-none group">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01]">
              <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>
            {/* Ambient Background Glow Effect */}
            <div 
              className="absolute -inset-4 rounded-[32px] bg-cover bg-center opacity-10 blur-2xl -z-10 transition-opacity duration-300 group-hover:opacity-15 hidden sm:block"
              style={{ backgroundImage: `url(${book.coverImage})` }}
            />
          </div>
        </div>

        {/* Right Side Info Parameters Block */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-5">
            <div>
              <span className="inline-flex items-center rounded-lg bg-blue-50 border border-blue-100 px-2.5 py-1 text-xs font-black text-blue-700 uppercase tracking-wider">
                {book.genre}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
              {book.title}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-500 font-medium tracking-tight">
              By <span className="text-slate-900 font-bold">{book.author}</span>
            </p>
            
            {/* Dynamic Metric Bar */}
            <div className="flex flex-wrap items-center gap-3 py-3 border-y border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span>{book.rating ? book.rating.toFixed(1) : "0.0"} Rating</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-slate-200" />
              <div className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
                {book.pages} Pages
              </div>
              <div className="hidden sm:block h-3 w-px bg-slate-200" />
              <div className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
                🌐 {book.language}
              </div>
            </div>

            {/* Editorial Abstract Description */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Synopsis</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium font-serif">
                {book.description}
              </p>
            </div>
          </div>

          {/* Luxury Structural Meta Grid */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="grid grid-cols-3 gap-4 text-[11px] text-slate-500 bg-slate-50/60 border border-slate-100 p-4 rounded-2xl flex-1">
              <div>
                <span className="block font-bold text-slate-400 uppercase tracking-widest mb-1">Publisher</span>
                <span className="font-extrabold text-slate-800 line-clamp-1">{book.publisher}</span>
              </div>
              <div>
                <span className="block font-bold text-slate-400 uppercase tracking-widest mb-1">Release</span>
                <span className="font-extrabold text-slate-800">{book.publishedYear}</span>
              </div>
              <div>
                <span className="block font-bold text-slate-400 uppercase tracking-widest mb-1">Catalog ID</span>
                <span className="font-mono font-extrabold text-slate-400 truncate block">#{book._id.slice(-6)}</span>
              </div>
            </div>

            {/* Price Showcase Component */}
            <div className="bg-slate-900 text-white p-4 rounded-2xl sm:w-44 flex flex-col justify-center items-center sm:items-start tracking-tight shadow-md shadow-slate-900/10 border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Market Value</span>
              <span className="text-2xl font-black tabular-nums mt-0.5">${book.price.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}