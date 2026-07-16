import { useEffect, useState } from "react";
import { fetchBooks } from "../../services/bookService";
import BookCard from "../../components/BookCard";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre?: string;
  category?: string;
  price: number;
  coverImage: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Control UI States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("title-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetchBooks();
        if (res.success) {
          setBooks(res.data);
        } else {
          setError("Failed to synchronize the database inventory catalog.");
        }
      } catch (err) {
        console.error(err);
        setError("Network anomaly detected. Could not handshake with remote host.");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl p-4 sm:p-8 space-y-8">
        <div className="animate-pulse space-y-3">
          <div className="h-8 bg-slate-200 rounded-xl w-72" />
          <div className="h-4 bg-slate-100 rounded-lg w-96" />
        </div>
        <LoadingSkeleton variant="grid" count={itemsPerPage} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-xl p-8 my-12 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 border border-red-200 text-red-500 text-2xl mb-4">
          ⚠️
        </div>
        <h3 className="text-lg font-bold text-slate-900">System Connection Failure</h3>
        <p className="text-sm text-slate-500 mt-1">{error}</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="container mx-auto max-w-xl p-8 my-12 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-2xl mb-4">
          📦
        </div>
        <h3 className="text-lg font-bold text-slate-900">Archive Unpopulated</h3>
        <p className="text-sm text-slate-500 mt-1">The primary cluster contains no operational book data schemas.</p>
      </div>
    );
  }

  // Extract unique categories dynamically for the filter dropdown
  const genres = Array.from(
    new Set(books.map((book) => book.genre || book.category).filter((g): g is string => !!g))
  );

  // 1. Filter & Search Logic
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchQuery.toLowerCase());

    const bookGenre = book.genre || book.category || "";
    const matchesGenre = selectedGenre ? bookGenre === selectedGenre : true;

    return matchesSearch && matchesGenre;
  });

  // 2. Sorting Logic
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "title-asc") return (a.title || "").localeCompare(b.title || "");
    if (sortBy === "title-desc") return (b.title || "").localeCompare(a.title || "");
    if (sortBy === "author-asc") return (a.author || "").localeCompare(b.author || "");
    return 0;
  });

  // 3. Pagination Calculations
  const totalItems = sortedBooks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const adjustedCurrentPage = currentPage > totalPages ? totalPages : currentPage;

  const indexOfLastItem = adjustedCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto max-w-7xl p-4 sm:p-8 space-y-8">
      
      {/* Dynamic Dashboard Header Area */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Explore Discoveries</h1>
          <p className="text-sm text-slate-500 mt-1">
            Browse through our active global index catalog of intellectual property collections.
          </p>
        </div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-xl self-start md:self-auto">
          Showing <span className="text-blue-600 font-black">{filteredBooks.length}</span> of {books.length} Available
        </div>
      </div>

      {/* Advanced Control Filter Matrix Panel */}
      <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-100/30">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search matching titles, creators, keywords..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm transition-all text-slate-800 placeholder-slate-400 font-medium"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Genre Selection Node */}
          <div className="relative w-full sm:w-52">
            <select
              value={selectedGenre}
              onChange={(e) => {
                setSelectedGenre(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm text-slate-700 font-semibold transition-all cursor-pointer pr-10"
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          {/* Sort Selection Node */}
          <div className="relative w-full sm:w-52">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm text-slate-700 font-semibold transition-all cursor-pointer pr-10"
            >
              <option value="title-asc">Sort: A → Z (Title)</option>
              <option value="title-desc">Sort: Z → A (Title)</option>
              <option value="author-asc">Sort: A → Z (Author)</option>
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Display Render System */}
      {currentBooks.length === 0 ? (
        <div className="p-16 text-center bg-white border border-slate-200/80 rounded-3xl shadow-sm">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 border border-slate-200 text-lg mb-3">
            🔍
          </div>
          <p className="text-sm font-bold text-slate-800">No Query Matches Found</p>
          <p className="text-xs text-slate-400 mt-0.5">Adjust parameter properties or structural string arguments.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Main Dynamic Grid Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>

          {/* Luxury Pagination Control Core */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <button
                disabled={adjustedCurrentPage === 1}
                onClick={() => setCurrentPage(adjustedCurrentPage - 1)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 shadow-sm transition-all disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Back
              </button>

              <div className="hidden sm:flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isSelected = adjustedCurrentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-9 w-9 text-xs font-black rounded-xl transition-all shadow-sm border cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 border-blue-600 text-white shadow-blue-600/10"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Page Status Counter Indicator */}
              <div className="sm:hidden text-xs font-bold text-slate-500">
                Page {adjustedCurrentPage} of {totalPages}
              </div>

              <button
                disabled={adjustedCurrentPage === totalPages}
                onClick={() => setCurrentPage(adjustedCurrentPage + 1)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 shadow-sm transition-all disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
              >
                Next
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}