import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { fetchBooks } from "../../services/bookService";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Dashboard() {
  const { user } = useAuth();

  console.log("Current user object in Dashboard:", user);
  console.log("Current role:", user?.role);

  const [chartData, setChartData] = useState<any[]>([]);

  const COLORS = [
    "#2563EB",
    "#4F46E5",
    "#0EA5E9",
    "#6366F1",
    "#3B82F6",
    "#8B5CF6",
  ];

  useEffect(() => {
    const loadChart = async () => {
      try {
        const res = await fetchBooks();

        if (!res.success) return;

        const counts: Record<string, number> = {};

        res.data.forEach((book: any) => {
          counts[book.genre] = (counts[book.genre] || 0) + 1;
        });

        const formatted = Object.entries(counts).map(([name, value]) => ({
          name,
          value,
        }));

        setChartData(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    loadChart();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 shadow-xl mb-10 border border-slate-800">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
        
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center rounded-md bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-4">
            Workspace Active
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {user?.name || "Explorer"}
            </span>
          </h1>
          <p className="mt-3 text-lg text-slate-400 leading-relaxed">
            Manage your BookVerse catalog, track your active collection, and deploy updates to your database in real time.
          </p>
        </div>
      </div>

      {/* Grid Actions Layout - Conditionally hidden for non-admins */}
      {user?.role === "admin" && (
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {/* Card 1: Add Book */}
          <Link
            to="/dashboard/add"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>

            <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Add New Book
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Expand the digital library. Push new volumes, specify descriptors, and synchronize directly with the live MongoDB engine.
            </p>
            
            <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
              Launch Editor <span className="ml-1">→</span>
            </div>
          </Link>

          {/* Card 2: Manage Books */}
          <Link
            to="/dashboard/manage"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
            </div>

            <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Manage Catalog
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Full CRUD workspace control. Audit existing indexes, modify live fields, or permanently delete books from the system.
            </p>

            <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
              Open Control Center <span className="ml-1">→</span>
            </div>
          </Link>
        </div>
      )}

      {/* Library Analytics */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-1">
          Library Analytics
        </h2>

        <p className="text-sm text-slate-500 mb-6">
          Distribution of books by genre.
        </p>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Account Info Profile Panel */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-md font-bold text-slate-900">
              System Metadata
            </h3>
            <p className="text-xs text-slate-500">Node user parameters</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Connected
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="flex flex-col rounded-2xl bg-white p-4 border border-slate-200/60 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Session Owner</span>
            <span className="font-semibold text-slate-800 truncate">{user?.name || "Unknown"}</span>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-4 border border-slate-200/60 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Network Identity</span>
            <span className="font-semibold text-slate-800 truncate">{user?.email || "Unknown"}</span>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-4 border border-slate-200/60 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Security Scope</span>
            <span className="mt-1 self-start inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700 capitalize ring-1 ring-inset ring-blue-700/10">
              {user?.role || "User"}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}