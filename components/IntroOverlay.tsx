import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream text-ink overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        >
          {/* Ambient Background Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cream via-stone-100 to-cream"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
          />

          <div className="relative z-10 text-center px-6">
            <motion.p
              className="font-serif text-2xl md:text-4xl italic text-gold tracking-wide"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              "Sự phát triển không đến từ kiến thức..."
            </motion.p>
            <motion.p
              className="font-serif text-2xl md:text-4xl italic text-ink mt-4 tracking-wide"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 2.0 }}
            >
              "...mà đến từ sự khai mở."
            </motion.p>

            <motion.div
              className="mt-12 h-[1px] bg-gold w-0 mx-auto"
              animate={{ w: 100 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};