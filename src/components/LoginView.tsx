import React, { useState } from 'react';
import { findStudentByCredentials } from '../data/students';
import { StudentAccount } from '../data/types';
import { Lock, User, AlertCircle, ArrowRight } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: (student: StudentAccount) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim()) {
      setError('Please enter your username.');
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      return;
    }

    const student = findStudentByCredentials(username, password);

    if (!student) {
      setError('Invalid username or password. Please try again.');
      return;
    }

    onLoginSuccess(student);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-blue-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-2xl font-bold tracking-tight text-stone-900">
          TOEIC Practice Test 1
        </h1>
        <p className="mt-1 text-center text-sm text-stone-600">
          Reading Mistake Review Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">

        <div className="bg-white py-7 px-6 shadow-xs border border-stone-200 rounded-xl sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-rose-50 border border-rose-200 p-3.5 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                <p className="text-xs text-rose-800 font-medium leading-relaxed">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-4 h-4 text-stone-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. alice, billy, cindy, calvin..."
                  className="block w-full pl-9 pr-3 py-2 text-sm bg-stone-50/50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-stone-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="block w-full pl-9 pr-3 py-2 text-sm bg-stone-50/50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-xs transition-colors cursor-pointer"
            >
              <span>Sign In to Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Account credentials reference */}
          <div className="mt-5 pt-4 border-t border-stone-100 text-center">
            <p className="text-xs text-stone-500 leading-relaxed">
              Default password pattern is <span className="font-mono text-stone-700">[username]123</span> (e.g. <span className="font-mono text-stone-700">cindy</span> / <span className="font-mono text-stone-700">cindy123</span>)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
