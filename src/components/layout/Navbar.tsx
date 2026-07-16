import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  // Authentication state checked against token presence
  const isLoggedIn = !!token;

  // Clean up state and redirect to Home
  const handleLogoutClick = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  // Base class for desktop links
  const linkBase = "text-sm font-medium transition-colors duration-200";
  
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${
      isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
    }`;

  const mobileActiveClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
      isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 1. Logo Brand Zone */}
          <div className="flex-shrink-0 mr-8">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm shadow-sm">B</span>
              Book<span className="text-blue-600">Verse</span>
            </Link>
          </div>

          {/* 2. Main Desktop Navigation Links (Centered Aligned) */}
          <div className="hidden md:flex items-center gap-7 flex-1">
            <NavLink to="/" className={activeClass}>Home</NavLink>
            <NavLink to="/books" className={activeClass}>Books</NavLink>
            <NavLink to="/about" className={activeClass}>About</NavLink>
            <NavLink to="/contact" className={activeClass}>Contact</NavLink>
          </div>

          {/* 3. Secondary Actions Zone (Right Aligned) */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            {isLoggedIn ? (
              <>
                {/* Welcome personalization profile info tag */}
                {user?.name && (
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/50">
                    Hi, {user.name.split(' ')[0]}
                  </span>
                )}

                {/* Dashboard Dropdown */}
                <div className="relative group">
                  <button className={`flex items-center gap-1.5 ${linkBase} text-slate-700 hover:text-blue-600 py-2 cursor-pointer`}>
                    <span>Dashboard</span>
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Panel */}
                  <div className="absolute right-0 top-full mt-1 w-48 rounded-xl bg-white border border-slate-200 shadow-lg opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50 p-1.5 space-y-0.5">
                    {/* Everyone sees Overview */}
                    <NavLink to="/dashboard" end className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Overview</NavLink>
                    
                    {/* Only Admins see Management Links */}
                    {user?.role === "admin" && (
                      <>
                        <NavLink to="/dashboard/add" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Add Book</NavLink>
                        <NavLink to="/dashboard/manage" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Manage Books</NavLink>
                      </>
                    )}
                  </div>
                </div>

                <div className="h-4 w-px bg-slate-200" />
                <button 
                  onClick={handleLogoutClick} 
                  className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={activeClass}>Login</NavLink>
                <Link
                  to="/register"
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors active:scale-[0.98]"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Action Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-slate-100 bg-white`} id="mobile-menu">
        <div className="space-y-1 px-4 py-3 pb-4">
          {isLoggedIn && user?.name && (
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-2">
              Logged in as: <span className="text-slate-700 normal-case font-semibold">{user.name}</span>
            </div>
          )}

          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileActiveClass}>Home</NavLink>
          <NavLink to="/books" onClick={() => setIsOpen(false)} className={mobileActiveClass}>Books</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileActiveClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileActiveClass}>Contact</NavLink>
          
          {isLoggedIn ? (
            <>
              <div className="my-2 h-px w-full bg-slate-100" />
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Dashboard Actions</div>
              
              {/* Everyone sees Overview */}
              <NavLink to="/dashboard" end onClick={() => setIsOpen(false)} className={mobileActiveClass}>Overview</NavLink>
              
              {/* Only Admins see Management Links on mobile */}
              {user?.role === "admin" && (
                <>
                  <NavLink to="/dashboard/add" onClick={() => setIsOpen(false)} className={mobileActiveClass}>Add Book</NavLink>
                  <NavLink to="/dashboard/manage" onClick={() => setIsOpen(false)} className={mobileActiveClass}>Manage Books</NavLink>
                </>
              )}
              
              <button 
                onClick={handleLogoutClick} 
                className="mt-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="my-3 h-px w-full bg-slate-100" />
              <div className="grid grid-cols-2 gap-3 pt-1 px-1">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}