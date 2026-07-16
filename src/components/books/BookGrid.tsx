import BookCard from "./BookCard";
import type { Book } from "../../data/books";

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}