'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ADMIN_CREDENTIALS = {
  username: 'yagoadminj',
  password: 'password123',
};

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const isAuth = sessionStorage.getItem('admin-auth');
    if (isAuth === 'true') {
      router.push('/admin/subscribers');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a brief loading for security
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      sessionStorage.setItem('admin-auth', 'true');
      router.push('/admin/subscribers');
    } else {
      setError('Invalid username or password');
      setPassword('');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(197, 157, 95, 0.1) 60px,
              rgba(197, 157, 95, 0.1) 120px
            )`,
          }}
        />
      </div>

      {/* Golden glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C59D5F] rounded-full filter blur-[120px] opacity-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[120px] opacity-10 animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#F4E5C3] to-[#C59D5F] mb-2"
            >
              YAGO
            </motion.h1>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto w-32" />
          </div>

          {/* Login Card */}
          <div className="relative">
            {/* Golden glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] opacity-20 blur-xl" />

            {/* Card */}
            <div className="relative bg-black border-2 border-[#C59D5F]/30 p-8">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#C59D5F] p-2 rounded">
                  <Lock className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl font-playfair text-[#D4AF37]">
                  Admin Access
                </h2>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C59D5F] to-transparent mb-6" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-gray-400 mb-2 tracking-wide"
                  >
                    Username
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setError('');
                      }}
                      placeholder="Enter username"
                      required
                      disabled={isLoading}
                      className="w-full bg-black/80 backdrop-blur-sm text-white pl-10 pr-4 py-3
                               border border-[#C59D5F]/30 focus:border-[#D4AF37] outline-none
                               placeholder-gray-600 text-sm tracking-wider
                               transition-all duration-300 disabled:opacity-50"
                      autoComplete="username"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-400 mb-2 tracking-wide"
                  >
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-600" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                      }}
                      placeholder="Enter password"
                      required
                      disabled={isLoading}
                      className="w-full bg-black/80 backdrop-blur-sm text-white pl-10 pr-12 py-3
                               border border-[#C59D5F]/30 focus:border-[#D4AF37] outline-none
                               placeholder-gray-600 text-sm tracking-wider
                               transition-all duration-300 disabled:opacity-50"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-[#D4AF37] transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900/20 border border-red-500/50 p-3 text-red-200 text-sm text-center"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] text-black py-3
                           font-semibold tracking-widest text-sm uppercase
                           hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
                           transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <span>Access Dashboard</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center text-gray-600 text-xs">
                <p>Authorized personnel only</p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#C59D5F]/30" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#C59D5F]/30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#C59D5F]/30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#C59D5F]/30" />
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-gray-600 hover:text-[#D4AF37] text-sm transition-colors tracking-wide"
            >
              ← Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
