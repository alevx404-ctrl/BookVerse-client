# 📚 BookVerse

BookVerse is a modern full-stack book catalog web application built with **React**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**. Users can browse books and explore detailed information, while administrators can manage the library through a protected dashboard.

---

## 🌐 Live Demo

- **Frontend:** [book-VERCEL-URL.vercel.app](https://book-verse-client-ochre.vercel.app/)
- **Backend API:** [bookverse-server-n9xh.onrender.com](https://bookverse-server-n9xh.onrender.com)

---

## ✨ Features

- 🔐 User Authentication (JWT)
- 👥 User & Admin Roles
- 🛡️ Protected Dashboard
- ➕ Add New Books
- 📋 Manage Book Catalog
- 🗑️ Delete Books
- 📖 Book Details Page
- 🔍 Search Books
- 🏷️ Filter by Genre
- ↕️ Sort Books
- 📄 Pagination
- 📱 Responsive Design
- 💀 Loading Skeletons
- 🔔 Toast Notifications
- 📊 Library Analytics (Recharts)
- 🎨 Modern UI built with Tailwind CSS

---

## 🛠 Tech Stack

**Frontend**
- React
- TypeScript
- React Router
- Tailwind CSS
- Recharts
- React Hook Form
- React Hot Toast

**Backend**
- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📂 Project Structure

```
client/
│
├── components/     # Reusable UI components
├── context/         # React context providers (auth, etc.)
├── layouts/         # Page layout wrappers
├── pages/           # Route-level pages
├── routes/          # Route definitions & protected routes
├── services/        # API calls / axios instances
└── ...
```

---

## 🔐 Demo Accounts

> ⚠️ For demo/testing purposes only.

| Role  | Email                  | Password              |
|-------|-------------------------|------------------------|
| Admin | admin@bookverse.com     | `Admin123`  |
| User  | user@bookverse.com      | `User123`   |

---

## 🚀 Installation

**1. Clone the repository**
```bash
git clone https://github.com/alevx404-ctrl/BookVerse-client.git
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=https://bookverse-server-n9xh.onrender.com
```

**4. Run locally**
```bash
npm run dev
```

**5. Build for production**
```bash
npm run build
```

---

## 🔗 Backend Repository

[YOUR_BACKEND_GITHUB_LINK](https://github.com/YOUR_USERNAME/YOUR_BACKEND_REPO)

---

## 👨‍💻 Author

**Hasibur Rahman**

- GitHub: [github.com/alevx404-ctrl](https://github.com/alevx404-ctrl)

---

## 📄 License

This project was developed for educational purposes as part of a university assignment.
