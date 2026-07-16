import { Link } from 'react-router-dom';

interface BookCardProps {
  book: {
    _id: string;
    title: string;
    author: string;
    genre?: string;      // Made optional to match index.tsx
    price?: number;      // Made optional for safety
    rating?: number;     
    coverImage: string;
    badge?: string;
  };
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link 
      to={`/books/${book._id}`} 
      className="group flex flex-col bg-white border border-slate-100 p-3 rounded-2xl shadow-sm hover:shadow-md transition-all h-full"
    >
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-50 relative">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" 
        />
        {book.badge && (
          <span className="absolute top-2 left-2 text-[9px] font-black uppercase bg-white/90 text-slate-800 tracking-wider px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">
            {book.badge}
          </span>
        )}
      </div>
      
      <div className="mt-3 flex flex-col flex-grow">
        {/* Render the genre badge if it exists, otherwise hide or show a fallback */}
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md self-start">
          {book.genre || "General"}
        </span>
        
        <h3 className="mt-2 font-bold text-slate-900 text-sm sm:text-base line-clamp-1 group-hover:text-[#2563EB] transition-colors">
          {book.title}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">by {book.author}</p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50 text-sm">
          {/* Added a safe check to ensure toFixed isn't called on undefined price */}
          <span className="font-bold text-slate-900">
            {book.price !== undefined ? `$${book.price.toFixed(2)}` : "Free"}
          </span>
          <div className="flex items-center gap-0.5 text-xs font-semibold text-slate-700">
            <span className="text-amber-500">★</span>
            <span>{book.rating !== undefined ? book.rating : "0.0"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}