const API_URL = "https://bookverse-server-n9xh.onrender.com/api/books";

export interface BookInput {
  title: string;
  author: string;
  genre: string;
  description: string;
  price: number;
  language: string;
  publisher: string;
  publishedYear: number;
  pages: number;
  coverImage: string;
  galleryImages?: string[];
}

export const fetchBooks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch books");
  return response.json(); // Returns { success: true, count: X, data: [...] }
};

export const fetchBookById = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch book details");
  return response.json();
};

export const addBook = async (bookData: BookInput) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookData),
  });
  if (!response.ok) throw new Error("Failed to create book");
  return response.json();
};

export const deleteBook = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete book");
  return response.json();
};