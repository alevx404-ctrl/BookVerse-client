import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand/About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm shadow-sm">B</span>
              Book<span className="text-blue-600">Verse</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Discover your next favorite read, explore community recommendations, and catalog your library on a minimal platform.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/books" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Explore Books</Link></li>
              <li><Link to="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Netrokona, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:admin@bookverse.com" className="hover:text-blue-600 transition-colors">admin@bookverse.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-7.307 7.307a12.605 12.605 0 01-6.106-6.106l7.306-7.307c.362-.27.528-.732.418-1.173L6.963 3.107a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-slate-500">+1 (555) 019-2834</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
<div>
  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Connect</h3>
  <div className="flex gap-4">
    {/* GitHub Link */}
    <a 
      href="https://github.com/alevx404-ctrl" 
      target="_blank" 
      rel="noreferrer" 
      className="p-2 rounded-lg border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 transition-all shadow-sm bg-slate-50/50 hover:bg-blue-50/20"
      aria-label="GitHub Profile"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    </a>

    {/* Facebook Link */}
    <a 
      href="https://www.facebook.com/rahatkhan.rahat.714" 
      target="_blank" 
      rel="noreferrer" 
      className="p-2 rounded-lg border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 transition-all shadow-sm bg-slate-50/50 hover:bg-blue-50/20"
      aria-label="Facebook Profile"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
      </svg>
    </a>
  </div>
  <p className="text-xs text-slate-400 mt-5 leading-normal">
    Follow BookVerse for project updates and future improvements.
  </p>
</div>

        </div>

        {/* Bottom copyright alignment bar */}
        <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; {currentYear} BookVerse. A modern online book catalog and library management platform.
          </p>
          <div className="flex gap-6 text-xs font-medium text-slate-400">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}