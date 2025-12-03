import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, BookOpen, Zap, Globe, Brain, Compass } from 'lucide-react';

const ExpertiseCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number }> = ({ title, desc, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="group relative p-8 border border-stone-200 bg-white rounded-3xl hover:border-gold/50 transition-all duration-500 h-full flex flex-col justify-start hover:shadow-xl hover:-translate-y-2 shadow-sm"
  >
    <div className="mb-6 w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-gold group-hover:border-gold/50 transition-all duration-300 shadow-sm">
      {icon}
    </div>
    <h4 className="font-serif font-bold text-2xl text-ink mb-4 group-hover:text-gold transition-colors">{title}</h4>
    <p className="font-sans text-stone-500 font-light text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export const Services: React.FC = () => {
  const expertises = [
    {
      title: "Đào tạo Chuyển đổi số",
      desc: "Trang bị tư duy và chiến lược số hóa toàn diện cho lãnh đạo và quản lý.",
      icon: <Compass size={40} strokeWidth={1.5} />
    },
    {
      title: "Ứng dụng AI Thực chiến",
      desc: "Nhân sự đang kiệt sức vì những việc lặp lại? Hãy để AI gánh vác 80% tác vụ Marketing & Sales, giải phóng đội ngũ.",
      icon: <Brain size={40} strokeWidth={1.5} />
    },
    {
      title: "Tự động hóa Vận hành",
      desc: "Xóa bỏ quy trình thủ công rườm rà và sai sót của con người. Xây dựng hệ thống tự vận hành trơn tru, giúp doanh nghiệp tiết kiệm chi phí nhân sự.",
      icon: <Zap size={40} strokeWidth={1.5} />
    },
    {
      title: "Tư vấn Giải pháp",
      desc: "Tư vấn lộ trình công nghệ phù hợp với mô hình và mục tiêu kinh doanh.",
      icon: <Users size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="bg-cream bg-grid-subtle py-24 relative">
      {/* Expertise Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          {/* Updated Icon/Graphic Element */}
          <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase block mb-3">Giải pháp Cốt lõi</span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink">Công Nghệ Tiên Phong</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((item, idx) => (
            <ExpertiseCard key={idx} index={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};