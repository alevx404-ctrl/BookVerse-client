import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden">
      {/* Abstract Background Blur Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-md space-y-6">
        {/* Core Big Error Status Mark */}
        <div className="relative inline-block">
          <h1 className="text-8xl font-black tracking-tighter text-[#2563EB]/15 select-none">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-900 tracking-tight whitespace-nowrap mt-2">
            Page Not Found
          </div>
        </div>

        {/* Informational core descriptive lines */}
        <div className="space-y-2">
          <p className="text-slate-500 text-sm leading-relaxed">
            The resource parameter you targetted does not resolve to an active endpoint mapping row. It may have been relocated or cleaned from cache.
          </p>
        </div>

        {/* Action Redirect Link Controls */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all active:scale-[0.98]"
          >
            ← Back to Home View
          </Link>
        </div>
      </div>
    </div>
  );
}