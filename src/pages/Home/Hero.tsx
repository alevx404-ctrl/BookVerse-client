import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FEATURED_BOOKS = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    rating: '4.8',
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
    rating: '4.9',
  },
  {
    id: '3',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400',
    rating: '4.7',
  },
  {
    id: '4',
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Biography',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    rating: '4.6',
  },
];

export default function Home() {
  const isLoggedIn = false;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance hero deck slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_BOOKS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll logic for section visual flow
  const scrollToFeatured = () => {
    document.getElementById('featured-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28 border-b border-slate-100">

        {/* Subtle engineering mesh background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Context Content */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs font-black text-blue-700 uppercase tracking-wider">
                  📖 BookVerse Library Ecosystem
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                Discover Your <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Next Favorite</span> Book
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base font-medium text-slate-500 leading-relaxed">
                Track your personal reading queues, access rich community rating spaces, and manage your entire book ledger on an elegant, clutter-free application layout.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/books"
                  className="w-full sm:w-auto text-center rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all active:scale-[0.98]"
                >
                  Explore Books
                </Link>
                <Link
                  to={isLoggedIn ? "/dashboard" : "/register"}
                  className="w-full sm:w-auto text-center rounded-xl bg-white border border-slate-200 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
                >
                  {isLoggedIn ? "Go to Dashboard" : "Join Today"}
                </Link>
              </div>
            </div>

            {/* Right Column: Upgraded Interactive Deck Slider */}
            <div className="lg:col-span-6 relative flex flex-col justify-center items-center h-[450px]">

              {/* Core branding radial glow backdrop */}
              <div className="absolute w-80 h-80 bg-blue-400/10 rounded-full blur-[100px] -z-10 animate-pulse" />

              {/* Slider Viewport Container */}
              {/* Slider Viewport Container */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] flex items-center justify-center">
                {FEATURED_BOOKS.map((book, index) => {
                  // Calculate dynamic positions relative to active central card
                  const offset = index - activeIndex;
                  const isActive = index === activeIndex;

                  // Handle loop wrapping styles
                  let positionStyle = "";
                  if (offset === 0) {
                    // Center Active Card
                    positionStyle = "z-30 opacity-100 scale-100 rotate-0 pointer-events-auto translate-x-0";
                  } else if (offset === 1 || (offset === -3)) {
                    // Right Hidden Stack Card
                    positionStyle = "z-20 opacity-60 scale-90 rotate-6 translate-x-20 sm:translate-x-24 pointer-events-none";
                  } else if (offset === -1 || (offset === 3)) {
                    // Left Hidden Stack Card
                    positionStyle = "z-10 opacity-40 scale-80 -rotate-6 -translate-x-20 sm:-translate-x-24 pointer-events-none";
                  } else {
                    // Backstage fallback hidden items
                    positionStyle = "z-0 opacity-0 scale-75 pointer-events-none";
                  }

                  return (
                    <div
                      key={book.id}
                      className={`absolute w-full h-full transition-all duration-500 ease-out transform ${positionStyle}`}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 ring-1 ring-slate-900/10 group">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                        {/* Interactive CTA overlay inside the active slider cards */}
                        {isActive && (
                          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 flex items-center justify-between transform translate-y-2 animate-fade-in-up">
                            <div className="truncate pr-2">
                              <h4 className="text-xs font-black text-slate-900 truncate">{book.title}</h4>
                              <p className="text-[10px] font-medium text-slate-500 truncate">by {book.author}</p>
                            </div>
                            {/* Redirects to library page with a pre-filled search parameter */}
                            <Link
                              to={`/books?search=${encodeURIComponent(book.title)}`}
                              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-sm transition-colors whitespace-nowrap"
                            >
                              View
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slider Dots Controllers */}
              <div className="flex gap-2 mt-6 z-30">
                {FEATURED_BOOKS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    aria-label={`Go to book index ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Clear Visual Flow Interface Link Component to Section Below */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
          <button
            onClick={scrollToFeatured}
            className="flex flex-col items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors animate-bounce cursor-pointer focus:outline-none"
          >
            <span>Scroll Down</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </section>


    </div>
  );
}