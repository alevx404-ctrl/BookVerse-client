export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  category?: string; // Backwards compatibility for Home filter badges
  badge?: string;
  price: number;
  rating: number;
  year?: string;
  language?: string;
  publisher?: string;
  publishedYear?: number;
  pages?: number;
  description?: string;
  coverImage: string;
  cover?: string; // Backwards compatibility for Home layouts
}

export const books: Book[] = [
  { 
    id: '1', 
    title: 'The Midnight Library', 
    author: 'Matt Haig', 
    genre: 'Fiction', 
    category: 'Fiction',
    badge: 'Trending', 
    price: 14.99, 
    rating: 4.8, 
    year: '2020',
    publishedYear: 2020,
    pages: 304,
    language: 'English',
    publisher: 'Viking Life',
    description: 'A story about the choices that go into a life well lived, set in a library between life and death.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '2', 
    title: 'Atomic Habits', 
    author: 'James Clear', 
    genre: 'Self-Help', 
    category: 'Self-Help',
    badge: 'Popular', 
    price: 16.20, 
    rating: 4.9, 
    year: '2018',
    publishedYear: 2018,
    pages: 320,
    language: 'English',
    publisher: 'Penguin Audio',
    description: 'A practical framework for building good habits and breaking bad ones using tiny daily behaviors.',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
    cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '3', 
    title: 'Dune Chronicles', 
    author: 'Frank Herbert', 
    genre: 'Sci-Fi', 
    category: 'Sci-Fi',
    badge: 'Classic', 
    price: 18.00, 
    rating: 4.7, 
    year: '1965',
    publishedYear: 1965,
    pages: 604,
    language: 'English',
    publisher: 'Chilton Books',
    description: 'An epic science fiction masterpiece set on the desert planet Arrakis.',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '4', 
    title: 'Educated Memoirs', 
    author: 'Tara Westover', 
    genre: 'Biography', 
    category: 'Biography',
    badge: 'New Arrival', 
    price: 15.50, 
    rating: 4.6, 
    year: '2018',
    publishedYear: 2018,
    pages: 350,
    language: 'English',
    publisher: 'Random House',
    description: 'An unforgettable memoir about a young girl who leaves her survivalist family to pursue an education.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400'
  }
];