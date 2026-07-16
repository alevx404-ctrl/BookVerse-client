import { Link } from "react-router-dom";

interface BookCardProps {
  book: any;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
      
      <img
        src={book.coverImage}
        alt={book.title}
        className="aspect-[3/4] w-full rounded-xl object-cover"
      />

      <div className="mt-4 flex flex-1 flex-col">

        <h3 className="font-bold text-slate-900 line-clamp-1">
          {book.title}
        </h3>

        <p className="text-sm text-slate-500">
          {book.author}
        </p>

        <p className="mt-3 text-sm text-slate-600 line-clamp-3">
          {book.description}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
            {book.genre}
          </span>

          <span className="font-bold text-slate-900">
            ${book.price}
          </span>

        </div>

        <Link
          to={`/books/${book._id}`}
          className="mt-5 rounded-xl bg-[#2563EB] py-2 text-center font-semibold text-white hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}