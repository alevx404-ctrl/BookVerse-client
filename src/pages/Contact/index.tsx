import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const infoCards = [
    { 
      label: 'Central Support', 
      data: 'support@bookverse.com', 
      subtitle: 'Response time under 24 hrs', 
      icon: (
        <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    { 
      label: 'Hotline Helpline', 
      data: '+880 1700-000000', 
      subtitle: 'Sun - Thu, 9 AM - 6 PM', 
      icon: (
        <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.48-5.145-3.8-6.621-6.621l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    { 
      label: 'HQ Headquarters', 
      data: 'Dhaka, Bangladesh', 
      subtitle: 'Operations and core engineering', 
      icon: (
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs font-black text-blue-700 uppercase tracking-wider">
                📥 Network Gateway
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 leading-none">
              Contact Us
            </h1>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              Have database architecture suggestions, UI layout feedback, or account inquiries? 
              Drop our administration a message instantly.
            </p>
          </div>

          <div className="space-y-4 flex-1 lg:flex-none justify-end pt-4">
            {infoCards.map((c) => (
              <div 
                key={c.label} 
                className="group flex gap-4 p-4 border border-slate-200/70 rounded-2xl bg-white shadow-sm hover:border-slate-300 transition-all duration-200"
              >
                <div className="h-10 w-10 shrink-0 bg-slate-50 border border-slate-200/60 font-bold flex items-center justify-center rounded-xl group-hover:scale-105 group-hover:bg-white transition-all duration-200">
                  {c.icon}
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.label}</span>
                  <span className="block text-sm font-extrabold text-slate-900 mt-0.5">{c.data}</span>
                  <span className="block text-xs font-medium text-slate-400 mt-0.5">{c.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Interactive UI Contact Form Card */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200/80 rounded-[32px] shadow-xl shadow-slate-100/40 relative flex flex-col justify-between">
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-black text-slate-900 tracking-tight">Send a secure message</h2>
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-3 animate-fadeIn">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-base font-black text-slate-900">Transmission Successful</h3>
                <p className="text-xs font-medium text-slate-500 max-w-xs mx-auto">
                  Your entry packet has been securely logged within the system parameters queue.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John" 
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white text-sm font-medium transition-all" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="you@example.com" 
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white text-sm font-medium transition-all" 
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Subject Title</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="General Catalog Feedback" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white text-sm font-medium transition-all" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Message Description</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Type your full note details here..." 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white text-sm font-medium resize-none transition-all" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-slate-900/10 cursor-pointer mt-2"
                >
                  Transmit Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}