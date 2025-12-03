import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoDocumentary: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 relative flex items-center justify-center overflow-hidden">
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-video w-full border border-gold/20 bg-black relative group cursor-pointer overflow-hidden shadow-2xl rounded-3xl"
        >
          {/* Video Thumbnail with Zoom Effect */}
          <img
            src="https://picsum.photos/1280/720?grayscale&blur=2"
            alt="Video cover"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-1000 ease-out"
          />

          {/* Center Play Button with Artistic Effects */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
              {/* Pulsing Rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-gold/40"
              />
              <motion.div
                animate={{ scale: [1, 2], opacity: [0.15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                className="absolute inset-0 rounded-full border border-gold/20"
              />

              {/* Main Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-gold/60 flex items-center justify-center relative z-20 transition-all duration-500 group-hover:bg-gold group-hover:border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <Play
                  className="w-8 h-8 md:w-10 md:h-10 text-gold fill-gold group-hover:text-charcoal group-hover:fill-charcoal transition-all duration-500 ml-1"
                  strokeWidth={1.5}
                />
              </motion.div>
            </div>

            {/* Text Below Button - Reveal on Hover */}
            <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
              <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase block mb-3 drop-shadow-lg">Xem Demo</span>
              <h4 className="font-serif text-2xl md:text-4xl text-white italic drop-shadow-md">"Tương lai của Tự động hóa"</h4>
            </div>
          </div>

          {/* Cinematic Corner Decor */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-white/20 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:border-gold/50"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-white/20 transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:border-gold/50"></div>

          {/* Time Badge */}
          <div className="absolute top-6 right-6 font-sans text-[10px] tracking-widest text-white/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm group-hover:border-gold/30 group-hover:text-gold transition-colors duration-500">
            02:35
          </div>

        </motion.div>
      </div>
    </section>
  );
};