import React from 'react';
import { motion } from 'framer-motion';

const ProgramCard: React.FC<{ title: string; subtitle: string; img: string; index: number }> = ({ title, subtitle, img, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
    </div>

    {/* Content Frame */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
          Chuyên Sâu
        </span>
        <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-3 leading-tight">{title}</h3>
        <p className="font-sans text-stone-200 font-light text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

export const Programs: React.FC = () => {
  const programs = [
    { title: "AI for Leaders", subtitle: "Tư duy chiến lược và ra quyết định dựa trên dữ liệu cho cấp lãnh đạo.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
    { title: "AI Marketing & Sales", subtitle: "Tự động hóa sáng tạo nội dung và chăm sóc khách hàng.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
    { title: "Automation Masterclass", subtitle: "Làm chủ công cụ No-code để xây dựng quy trình tự động hóa từ A-Z.", img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="programs" className="py-32 bg-stone-100 bg-dots-subtle text-ink relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-serif font-bold text-4xl md:text-6xl"
          >
            Chương Trình <br /><span className="text-gold italic">Đào Tạo Chuyên Sâu</span>
          </motion.h2>
          <p className="font-sans text-stone-500 font-light max-w-sm text-right mt-6 md:mt-0">
            Các khóa học được thiết kế thực chiến, giúp doanh nghiệp làm chủ công nghệ và tối ưu vận hành.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <ProgramCard key={idx} index={idx} {...prog} />
          ))}
        </div>
      </div>
    </section>
  );
};