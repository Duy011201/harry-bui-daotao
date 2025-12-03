import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="font-serif text-xl text-ink group-hover:text-gold transition-colors">{question}</span>
                <span className="text-gold">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="font-sans text-stone-600 font-light pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Tôi không rành công nghệ có học được không?",
            answer: "Hoàn toàn được. Các chương trình của chúng tôi tập trung vào tư duy ứng dụng và sử dụng các công cụ trực quan, không yêu cầu kỹ năng lập trình chuyên sâu."
        },
        {
            question: "Đào tạo AI áp dụng cho những phòng ban nào?",
            answer: "AI có thể áp dụng cho hầu hết các phòng ban: Marketing (sáng tạo nội dung), Sales (CSKH tự động), HR (tuyển dụng, đào tạo), và Kế toán (xử lý hóa đơn, dữ liệu)."
        },
        {
            question: "Thời gian để thấy hiệu quả sau khi áp dụng Automation?",
            answer: "Với các quy trình đơn giản, bạn có thể thấy hiệu quả tiết kiệm thời gian ngay lập tức. Với hệ thống phức tạp hơn, thường mất từ 2-4 tuần để vận hành trơn tru."
        },
        {
            question: "Chi phí đào tạo và tư vấn được tính như thế nào?",
            answer: "Chúng tôi có các gói đào tạo public (cá nhân) và in-house (doanh nghiệp) được may đo theo nhu cầu. Hãy liên hệ để được tư vấn gói giải pháp phù hợp nhất với ngân sách của bạn."
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-3 block">Giải đáp thắc mắc</span>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink">Câu Hỏi <span className="text-gold italic">Thường Gặp</span></h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};
