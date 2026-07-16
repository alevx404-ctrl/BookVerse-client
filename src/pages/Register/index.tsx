import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    name: "",
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
    const loadingToast = toast.loading("Creating your profile account...");

    try {
      const result = await registerUser(form);

      if (result.success) {
        login(result.token, result.user);
        toast.success("Account created successfully!", { id: loadingToast });
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Registration failed. Try again.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Could not connect to the registration server.", { id: loadingToast });
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 border border-slate-200/60 rounded-3xl shadow-sm">
        
        {/* Header Block */}
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] text-xl font-bold">
            ✨
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Join BookVerse</h2>
          <p className="text-sm text-slate-500">
            Set up your reader profile to catalog titles instantly.
          </p>
        </div>

        {/* Input Form Elements Layout */}
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white text-sm transition-all"
            />
          </div>

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
            <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Minimum 6 characters"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white text-sm transition-all"
            />
          </div>

          {/* Terms checkbox acknowledgment line */}
          <div className="flex items-start gap-2 pt-1">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] mt-0.5"
            />
            <label htmlFor="terms" className="text-xs text-slate-500 leading-normal">
              I agree to the BookVerse structural evaluation terms and license agreements.
            </label>
          </div>

          {/* Core Action Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#2563EB] py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Alternate Navigation Redirect Footer */}
        <p className="text-center text-sm text-slate-500 pt-2">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-[#2563EB] hover:underline">
            Sign in instead
          </Link>
        </p>

      </div>
    </div>
  );
}