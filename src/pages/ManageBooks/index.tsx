import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooks, deleteBook } from '../../services/bookService';
import { toast } from 'react-hot-toast';
import LoadingSkeleton from '../../components/common/LoadingSkeleton';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  price: number;
  coverImage: string;
}

export default function ManageBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = () => {
    fetchBooks()
      .then(res => { 
        if (res.success) {
          setBooks(res.data); 
        } else {
          toast.error("Failed to retrieve inventory items.");
        }
      })
      .catch(err => {
        console.error(err);
        toast.error("Database connection dropped.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id: string) => {
    toast((t) => (
      <div className="flex flex-col gap-3 p-1">
        <div>
          <p className="text-sm font-bold text-slate-900">Purge Data Record?</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Are you absolutely sure? This permanently deletes the record from MongoDB.
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              const loader = toast.loading("Removing book log entry...");
              try {
                const res = await deleteBook(id);
                if (res.success) {
                  setBooks(prev => prev.filter((book) => book._id !== id));
                  toast.success("Catalog record purged successfully.", { id: loader });
                } else {
                  toast.error(res.message || "Failed to remove the catalog record.", { id: loader });
                }
              } catch (error) {
                toast.error("System exception executing request.", { id: loader });
              }
            }}
            className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm shadow-red-600/10 rounded-xl transition-colors cursor-pointer"
          >
            Confirm Purge
          </button>
        </div>
      </div>
    ), { duration: 6000, position: 'top-center' });
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 sm:p-8 max-w-5xl space-y-6">
        <div className="animate-pulse space-y-2">
          <div className="h-7 bg-slate-200 rounded-lg w-64" />
          <div className="h-4 bg-slate-100 rounded-md w-96" />
        </div>
        <div className="border border-slate-200/60 rounded-3xl p-4 bg-white">
          <LoadingSkeleton variant="table" count={5} />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-8 max-w-5xl">
      {/* Dynamic Upper Sub-header Control Panel */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Catalog Registry</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Administrative terminal matrix for auditing index properties and adjusting system state data.
          </p>
        </div>
        <div className="self-start sm:self-center inline-flex items-center rounded-2xl bg-slate-100 border border-slate-200/40 px-3 py-1.5 text-xs font-semibold text-slate-600">
          Database Objects: <span className="ml-1.5 font-bold text-blue-600">{books.length}</span>
        </div>
      </div>

      {/* Main Structural Layout Core */}
      <div className="overflow-hidden bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-100/40">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="p-5 w-24">Cover</th>
                <th className="p-5">Volume Profile</th>
                <th className="p-5">Author / Creator</th>
                <th className="p-5">Market Value</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {books.map((book) => (
                <tr key={book._id} className="group hover:bg-slate-50/60 transition-colors duration-200">
                  {/* Column 1: Render Visual Cover Image Matrix */}
                  <td className="p-5">
                    <div className="relative aspect-[3/4] w-12 overflow-hidden rounded-xl bg-slate-50 border border-slate-200 shadow-sm transition-transform group-hover:scale-105">
                      {book.coverImage ? (
                        <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[9px] text-slate-400 font-bold leading-none text-center p-1">
                          NO IMGLINK
                        </div>
                      )}
                    </div>
                  </td>
                  
                  {/* Column 2: Context Profile Descriptors */}
                  <td className="p-5">
                    <div className="font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                      {book.title}
                    </div>
                    <div className="mt-1.5 inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700 border border-blue-100/60 uppercase tracking-wide">
                      {book.genre}
                    </div>
                  </td>

                  {/* Column 3: Author Field */}
                  <td className="p-5 text-slate-600 font-semibold tracking-tight">
                    {book.author}
                  </td>

                  {/* Column 4: Curreny Formatting Node */}
                  <td className="p-5 font-black text-slate-900 tabular-nums">
                    ${book.price.toFixed(2)}
                  </td>

                  {/* Column 5: Options Drop Actions */}
                  <td className="p-5">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/books/${book._id}`}
                        className="inline-flex items-center rounded-xl bg-blue-50 border border-blue-200 px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleDelete(book._id)}
                        className="inline-flex items-center rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all duration-200 cursor-pointer"
                      >
                        <svg
                          className="mr-1.5 h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {books.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-12 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-xl text-slate-400">
                      📭
                    </div>
                    <p className="mt-4 text-sm font-bold text-slate-800">Inventory Empty</p>
                    <p className="text-xs text-slate-400 mt-0.5">No database items were located within the current index queries.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}