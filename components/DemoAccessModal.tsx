'use client';

import { useState } from 'react';
import { X, Shield, Loader2, XCircle } from 'lucide-react';

interface DemoAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoAccessModal({ isOpen, onClose }: DemoAccessModalProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const cleanCode = code.trim().toUpperCase();

      // Call local API route (proxies to webapp backend, no CORS issues)
      const response = await fetch('/api/demo/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: cleanCode })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid demo code');
      }

      // Success! Redirect to webapp with demo token
      // Use current origin for ngrok compatibility
      const webappUrl = new URL('/chat', window.location.origin);
      webappUrl.searchParams.set('demo', 'true');
      webappUrl.searchParams.set('token', data.token);

      window.location.href = webappUrl.toString();
    } catch (err: any) {
      setError(err.message || 'Invalid demo code. Please check and try again.');
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        // Close modal when clicking backdrop
        if (e.target === e.currentTarget) {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }
      }}
      onTouchEnd={(e) => {
        // Close modal when touching backdrop on mobile
        if (e.target === e.currentTarget) {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }
      }}
      style={{ touchAction: 'none' }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} onTouchEnd={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Demo Access
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your demo code to access Yago
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">Invalid Code</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Demo Access Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="DEMO-XXXX-XXXX"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-center text-lg font-mono tracking-wider"
                required
                maxLength={20}
                disabled={loading}
                autoFocus
              />
              <p className="mt-2 text-sm text-gray-500 text-center">
                Contact admin to get your demo code
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !code.trim()}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Access Yago
                </>
              )}
            </button>
          </form>

          {/* Ask for Access Code */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
            <p className="text-sm text-gray-700 mb-2">
              Don&apos;t have an access code?
            </p>
            <a
              href="https://T.me/officialyago"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <Shield className="w-4 h-4" />
              Ask for access code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
