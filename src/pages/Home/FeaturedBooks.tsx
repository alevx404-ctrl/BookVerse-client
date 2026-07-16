import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import BookGrid from '../../components/books/BookGrid';
import { fetchBooks } from "../../services/bookService";

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks()
      .then((res) => {
        setBooks(res.data || []);
      })
      .catch((err) => console.error("Failed to sync catalogue:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Featured Books
            </h2>
            <p className="text-sm font-medium text-slate-500">
              Handpicked historical masterpieces and hot community recommendations.
            </p>
          </div>
          <Link 
            to="/books" 
            className="group inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors"
          >
            View full ledger <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform ml-1.5">→</span>
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[3/4] w-full bg-slate-200 rounded-2xl" />
                <div className="h-4 bg-slate-200 rounded-md w-3/4" />
                <div className="h-3 bg-slate-200 rounded-md w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <BookGrid books={books.slice(0, 6)} />
        )}

      </div>
    </section>
  );
}