'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Calendar, RefreshCw, Users, ArrowLeft, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Subscriber {
  email: string;
  subscribedAt: string;
}

export default function AdminSubscribers() {
  const router = useRouter();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleLogout = () => {
    sessionStorage.removeItem('admin-auth');
    router.push('/admin');
  };

  const fetchSubscribers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/subscribe');
      if (!response.ok) {
        throw new Error('Failed to fetch subscribers');
      }
      const data = await response.json();
      setSubscribers(data.subscribers || []);
    } catch (err) {
      setError('Failed to load subscribers. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const exportToCSV = () => {
    if (subscribers.length === 0) return;

    const headers = ['Email', 'Subscribed At'];
    const rows = subscribers.map((sub) => [
      sub.email,
      new Date(sub.subscribedAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `yago-subscribers-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
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

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors
                       px-4 py-2 border border-gray-700 hover:border-red-500/50"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#F4E5C3] to-[#C59D5F] mb-4">
              Subscriber Dashboard
            </h1>
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-6" />
            <p className="text-gray-400">Manage your exclusive waitlist members</p>
          </motion.div>
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#C59D5F]/30 p-6 mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#C59D5F] p-3 rounded-lg">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Subscribers</p>
                <p className="text-3xl font-bold text-[#D4AF37]">
                  {subscribers.length}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={fetchSubscribers}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#C59D5F]/30
                         hover:border-[#D4AF37] transition-all text-sm disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>

              <button
                onClick={exportToCSV}
                disabled={subscribers.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C59D5F]
                         text-black font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
                         transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-900/20 border border-red-500/50 p-4 mb-6 text-red-200"
          >
            {error}
          </motion.div>
        )}

        {/* Subscribers Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#C59D5F]/30 overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 text-[#D4AF37] animate-spin" />
            </div>
          ) : subscribers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <Mail className="w-16 h-16 text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">No subscribers yet</p>
              <p className="text-gray-600 text-sm mt-2">
                Subscribers will appear here when they sign up
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/50 border-b border-[#C59D5F]/30">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                      #
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </div>
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Subscribed At
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <motion.tr
                      key={subscriber.email}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-[#C59D5F]/10 hover:bg-[#D4AF37]/5 transition-colors"
                    >
                      <td className="p-4 text-gray-400 font-mono text-sm">
                        {String(index + 1).padStart(3, '0')}
                      </td>
                      <td className="p-4 text-gray-200">
                        {subscriber.email}
                      </td>
                      <td className="p-4 text-gray-400 text-sm">
                        {formatDate(subscriber.subscribedAt)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-gray-600 text-sm"
        >
          <p>
            Subscriber data is stored securely in{' '}
            <code className="bg-[#1a1a1a] px-2 py-1 rounded text-[#C59D5F]">
              data/subscribers.json
            </code>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
