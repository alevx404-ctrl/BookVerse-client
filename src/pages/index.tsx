import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function Login() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post(
        "https://bookverse-server-n9xh.onrender.com/api/auth/login",
        data
      );
      login(res.data.token, res.data.user);
      navigate('/');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const fillDemo = () => {
    setValue('email', 'admin@bookverse.com');
    setValue('password', 'password123');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
          <button onClick={fillDemo} className="w-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Auto-fill Demo Credentials
          </button>
          <p className="text-sm text-gray-600 text-center mt-2">
            Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate('/register')}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}