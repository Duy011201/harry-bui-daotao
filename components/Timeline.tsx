import React from 'react';
import { motion } from 'framer-motion';

const AchievementItem: React.FC<{ number: string; label: string; desc: string; delay: number }> = ({ number, label, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group text-center p-6 border border-stone-200 bg-white hover:border-gold/30 transition-all duration-500 rounded-3xl shadow-sm hover:shadow-lg"
  >
    <h3 className="font-serif text-5xl md:text-6xl text-gold mb-4 group-hover:scale-110 transition-transform duration-500">{number}</h3>
    <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-4 group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
    <p className="font-sans text-xs font-bold uppercase tracking-widest text-ink mb-2">{label}</p>
    <p className="font-sans text-xs text-stone-500 font-light">{desc}</p>
  </motion.div>
);

export const Timeline: React.FC = () => {
  const achievements = [
    { number: "500+", label: "Học Viên", desc: "Đã tốt nghiệp" },
    { number: "50+", label: "Doanh Nghiệp", desc: "Được tư vấn & Đào tạo" },
    { number: "100+", label: "Quy Trình", desc: "Được tự động hóa" },
    { number: "5000+", label: "Giờ Đào Tạo", desc: "Thực chiến AI" }
  ];

  return (
    <section className="bg-stone-50 py-20 relative overflow-hidden bg-noise">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50 pointer-events-none"></div>

      {/* Key Achievements Section */}
      <div className="mt-10 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-3 block">Dấu ấn hành trình</span>
          <h3 className="font-serif font-bold text-3xl md:text-4xl text-ink">Những Con Số Biết Nói</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <AchievementItem key={idx} {...item} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};