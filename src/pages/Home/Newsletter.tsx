import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('processing');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 p-8 sm:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
          
          {/* Futuristic internal line layout frame grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px)] bg-[size:6rem] opacity-5" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-3 text-center lg:text-left">
              <span className="text-[9px] font-black tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md">
                Broadcast Node
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Sync with the Digest
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                Receive secure pipeline updates containing automated summaries of global curator reviews and collection drops weekly.
              </p>
            </div>

            <div className="lg:col-span-6">
              {status === 'success' ? (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest rounded-xl text-center animate-fadeIn">
                  ✓ Pipeline Active: Credentials Logged
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
                    <input 
                      required
                      type="email" 
                      disabled={status === 'processing'}
                      placeholder="address@domain.com" 
                      className="flex-grow px-4 py-2.5 bg-transparent border-0 text-white placeholder-slate-500 focus:outline-none focus:ring-0 text-sm font-medium" 
                    />
                    <button 
                      type="submit" 
                      disabled={status === 'processing'}
                      className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-md shadow-blue-600/10 whitespace-nowrap"
                    >
                      {status === 'processing' ? 'Syncing...' : 'Initialize'}
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start px-2 text-[10px] font-medium text-slate-500">
                    <svg className="h-3 w-3 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    Zero spam parameters applied. Absolute security encryption.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}