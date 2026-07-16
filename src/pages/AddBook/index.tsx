import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../services/bookService';
import { toast } from 'react-hot-toast/headless';

export default function AddBook() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '', author: '', genre: '', description: '',
    price: 0, language: 'English', publisher: '',
    publishedYear: 2026, pages: 100, coverImage: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'publishedYear' || name === 'pages' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await addBook(formData);
      if (result.success) {
        toast.success("Book added successfully");
        navigate("/books");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-3">
        
        {/* Left Column: Interactive Mini-Mockup Card Preview */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider text-slate-400">Live View</h3>
            <div className="group relative aspect-[3/4] w-full rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-inner flex flex-col justify-between p-4">
              {formData.coverImage ? (
                <img 
                  src={formData.coverImage} 
                  alt="Live Cover preview" 
                  className="absolute inset-0 h-full w-full object-cover transition duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).src = ''; }}
                />
              ) : null}
              {/* Overlay Content Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 mix-blend-multiply opacity-80" />
              
              <div className="relative z-10 flex self-start rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                {formData.genre || 'Genre'}
              </div>
              
              <div className="relative z-10 text-white">
                <h4 className="font-bold text-lg leading-tight truncate">{formData.title || 'Untitled Volume'}</h4>
                <p className="text-xs text-slate-300 font-medium mt-0.5 truncate">by {formData.author || 'Unknown Author'}</p>
                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
                  <span className="font-bold text-blue-400">${formData.price.toFixed(2)}</span>
                  <span className="text-slate-400">{formData.pages} pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Master Submission Form */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl pointer-events-none"></div>
          
          <div className="mb-8 border-b border-slate-100 pb-5">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">Add New Book</h2>
            <p className="text-sm text-slate-500 mt-1">Populate system descriptors to update the database node engine.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Core Core Info Metadata */}
            <div>
              <span className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">01. Core Identity</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Book Title</label>
                  <input required type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., The Midnight Library" className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Author / Writer</label>
                  <input required type="text" name="author" value={formData.author} onChange={handleChange} placeholder="e.g., Matt Haig" className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                </div>
              </div>
            </div>

            {/* Section 2: Catalog Details Metrics */}
            <div>
              <span className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">02. Market Specification</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Genre Class</label>
                  <input required type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="e.g., Fiction" className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Price ($ USD)</label>
                  <input required type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Total Pages</label>
                  <input required type="number" name="pages" value={formData.pages} onChange={handleChange} className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                </div>
              </div>
            </div>

            {/* Section 3: Distribution Specifications */}
            <div>
              <span className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">03. Distribution Elements</span>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Asset Cover Image URL</label>
                  <input required type="url" name="coverImage" value={formData.coverImage} onChange={handleChange} className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" placeholder="https://images.unsplash.com/..." />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Language</label>
                    <input required type="text" name="language" value={formData.language} onChange={handleChange} className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Publisher Block</label>
                    <input required type="text" name="publisher" value={formData.publisher} onChange={handleChange} className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Published Year</label>
                    <input required type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange} className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all shadow-inner bg-slate-50/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Summary Blocks */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Description Abstract Overview</label>
              <textarea required name="description" rows={4} value={formData.description} onChange={handleChange} placeholder="Write a brief synopsis about the narrative scope..." className="w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm p-3 rounded-xl outline-none transition-all resize-none shadow-inner bg-slate-50/30"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Publishing Archive Link...</span>
                </>
              ) : (
                <span>Publish To Catalog</span>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}