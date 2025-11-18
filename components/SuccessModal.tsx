'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black border-2 border-[#C59D5F] max-w-md w-full p-8 sm:p-12"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-[#D4AF37] transition-colors duration-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Golden glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] opacity-20 blur-xl" />

              {/* Content */}
              <div className="relative text-center">
                {/* Icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="mb-6 flex justify-center"
                >
                  <div className="relative">
                    <CheckCircle2 className="w-20 h-20 text-[#D4AF37]" />
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-6 h-6 text-[#F4E5C3]" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-playfair text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#F4E5C3] to-[#C59D5F] mb-4"
                >
                  Congratulations!
                </motion.h2>

                {/* Divider */}
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C59D5F] to-transparent mx-auto mb-6" />

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    You&apos;ve successfully joined our exclusive waitlist!
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    As an early bird, you&apos;ll receive{' '}
                    <span className="text-[#D4AF37] font-semibold">
                      first access
                    </span>{' '}
                    to Yago&apos;s premium concierge services and{' '}
                    <span className="text-[#D4AF37] font-semibold">
                      exclusive benefits
                    </span>{' '}
                    reserved for our founding members.
                  </p>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll notify you as soon as we launch.
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={onClose}
                  className="mt-8 bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] text-black px-8 py-3
                           font-semibold tracking-widest text-sm uppercase
                           hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
                           transition-all duration-300 w-full sm:w-auto"
                >
                  Continue Exploring
                </motion.button>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C59D5F]/30" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C59D5F]/30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C59D5F]/30" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C59D5F]/30" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
