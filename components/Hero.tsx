import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const brands = ["FPT", "VIETTEL", "Vinamilk", "VinGroup", "BIDV"];

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-cream flex flex-col pt-32 md:pt-0" style={{ paddingTop: "80px" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-10 mix-blend-multiply"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-electric/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex-1 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">

        {/* Left Content */}
        <motion.div
          style={{ opacity }}
          className="flex flex-col justify-center order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.9] mb-8">
              Đào Tạo & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-blue-600 to-electric-light animate-gradient bg-300%">Chuyển Đổi Số</span> <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-gold italic font-light">Thực Chiến</span>
            </h1>

            <p className="font-sans text-stone-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Giúp doanh nghiệp ứng dụng <span className="font-bold text-ink">AI</span> và <span className="font-bold text-ink">Tự động hóa</span> để tối ưu vận hành, đột phá hiệu suất và dẫn đầu thị trường.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Portrait */}
        <motion.div
          style={{ y: y1 }}
          className="relative h-[50vh] md:h-[80vh] w-full flex items-end justify-center order-1 md:order-2"
        >
          {/* Abstract Tech Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-stone-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-electric/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 h-full w-full flex items-end justify-center"
          >
            <img
              src="/public/image/anh1.jpeg"
              alt="Harry Bui Portrait"
              className="h-full object-contain drop-shadow-2xl mask-image-gradient-b"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted By Marquee */}
      <div className="relative z-30 w-full border-t border-stone-200 bg-white/50 backdrop-blur-sm py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-12">
          <div className="flex-1 overflow-hidden relative group">
            <div className="flex gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
              {[...brands, ...brands, ...brands].map((brand, idx) => (
                <span key={idx} className="text-xl font-serif font-bold text-stone-300 hover:text-gold transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};