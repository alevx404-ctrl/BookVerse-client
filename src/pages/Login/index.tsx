import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Verifying your credentials...");

    try {
      const result = await loginUser(form);

      if (result.success) {
        login(result.token, result.user);
        toast.success("Welcome back!", { id: loadingToast });
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Invalid email or password.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Could not connect to the authentication server.", { id: loadingToast });
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 border border-slate-200/60 rounded-3xl shadow-sm">
        
        {/* Header Block */}
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] text-xl font-bold">
            🔑
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Welcome back</h2>
          <p className="text-sm text-slate-500">
            Access your curated book logs and reading queues.
          </p>
        </div>

        {/* Input Form Elements Layout */}
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white text-sm transition-all"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Password
              </label>
              <a href="#forgot" className="text-xs font-semibold text-[#2563EB] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white text-sm transition-all"
            />
          </div>

          {/* Core Action Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#2563EB] py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Alternate Navigation Redirect Footer */}
        <p className="text-center text-sm text-slate-500 pt-2">
          New to the platform?{' '}
          <Link to="/register" className="font-semibold text-[#2563EB] hover:underline">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}