import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, Calendar } from 'lucide-react';

interface GalleryItemProps {
  src: string;
  title: string;
  location: string;
  date: string;
  description: string;
  size: 'sm' | 'lg';
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, title, location, date, description, size }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative group overflow-hidden mb-4 break-inside-avoid ${size === 'lg' ? 'h-96' : 'h-64'}`}
  >
    {/* Image with zoom effect */}
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-50"
    />

    {/* Overlay Information */}
    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-charcoal/80 backdrop-blur-[2px] p-6 text-center cursor-default">

      {/* Title Slide Up */}
      <h3 className="font-serif font-bold text-2xl md:text-3xl italic text-gold mb-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        {title}
      </h3>

      {/* Divider Expand */}
      <div className="w-8 h-[1px] bg-white/40 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>

      {/* Meta Data Fade In */}
      <div className="flex items-center gap-4 text-[10px] md:text-xs font-sans text-gray-300 uppercase tracking-[0.15em] mb-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
        <span className="flex items-center gap-1"><Calendar size={12} className="text-gold" /> {date}</span>
        <span className="flex items-center gap-1"><MapPin size={12} className="text-gold" /> {location}</span>
      </div>

      {/* Description Fade In */}
      <p className="font-sans text-xs md:text-sm font-light text-gray-200 max-w-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const galleryItems: GalleryItemProps[] = [
    {
      src: "/public/image/anh2.jpg",
      title: "Tập huấn ứng dụng AI cho doanh nghiệp",
      location: "Quảng Trị",
      date: "May 2025",
      description: "Buổi đào tạo tập huấn ứng dụng AI-ChatGPT cho doanh nghiệp hợp tác xã trên địa bàn tỉnh Quảng Trị.",
      size: "lg"
    },
    {
      src: "/public/image/anh6.jpeg",
      title: "Automation Coaching",
      location: "Private Studio",
      date: "Nov 2024",
      description: "Tư vấn về tối ưu hóa quy trình vận hành bằng công cụ tự động.",
      size: "sm"
    },
    {
      src: "/public/image/anh5.jpg",
      title: "Đào tạo AI cho Trường Cao đẳng nghề Bộ Quốc Phòng",
      location: "Nam Định",
      date: "Nov 2025",
      description: "Đào tạo sử dụng công cụ AI cho Trường Cao đẳng nghề Bộ Quốc Phòng.",
      size: "lg"
    },
    {
      src: "/public/image/anh8.jpeg",
      title: "Chiến Lược Số",
      location: "Hà Nội",
      date: "Jan 2024",
      description: "Phân tích case-study thực tế và xây dựng lộ trình chuyển đổi số.",
      size: "sm"
    },
    {
      src: "/public/image/anh7.jpeg",
      title: "AI Summit",
      location: "White Palace",
      date: "Feb 2024",
      description: "Hội thảo chuyên đề về ứng dụng AI trong quản trị doanh nghiệp.",
      size: "lg"
    },
    {
      src: "/public/image/anh3.jpg",
      title: "Đào tạo sử dụng công cụ AI",
      location: "Quảng Trị",
      date: "Mar 2024",
      description: "Hướng dẫn sử dụng công cụ AI để áp dụng vào hoạt động kinh doanh, sản xuất",
      size: "sm"
    }
  ];

  const testimonials = [
    {
      quote: "Chương trình của Harry không chỉ dạy kỹ năng, mà thay đổi hoàn toàn cách tôi nhìn nhận về AI và tự động hóa trong doanh nghiệp.",
      name: "Nguyen Minh Tuan",
      role: "CEO TechStart",
      img: "https://picsum.photos/50/50?random=21"
    },
    {
      quote: "Sự tinh tế trong cách Harry tư vấn đã giúp chúng tôi tiết kiệm 40% chi phí vận hành nhờ áp dụng quy trình tự động hóa.",
      name: "Le Hoang Lan",
      role: "Founder ArtHouse",
      img: "https://picsum.photos/50/50?random=22"
    },
    {
      quote: "Một bước ngoặt thực sự cho đội ngũ của tôi. Tư duy về công nghệ được nâng tầm rõ rệt sau khóa đào tạo.",
      name: "Tran Van Hung",
      role: "Director GlobalCorp",
      img: "https://picsum.photos/50/50?random=23"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="gallery" className="py-24 bg-white bg-grid-subtle text-ink">
      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <h2 className="font-serif font-bold text-4xl text-center mb-16">Khoảnh Khắc <span className="text-gold">Đào Tạo</span></h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="bg-stone-100 py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-ink">Di sản của sự <br />thay đổi</h2>
          </div>

          <div className="relative">
            {/* Slider Content */}
            <div className="overflow-hidden relative min-h-[300px]">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 border border-stone-200 relative backdrop-blur-sm mx-auto max-w-3xl rounded-3xl shadow-xl"
              >
                <div className="absolute -top-3 -left-3 text-6xl font-serif text-stone-100 z-0">“</div>
                <p className="font-serif text-xl md:text-2xl italic text-stone-600 mb-8 leading-relaxed relative z-10 text-center">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full border border-gold object-cover" />
                  <div className="text-center">
                    <h5 className="font-sans font-bold text-ink text-sm uppercase tracking-wider">{testimonials[currentIndex].name}</h5>
                    <p className="font-sans text-[10px] text-gold uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 hover:border-gold hover:text-gold transition-all"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-gold w-6' : 'bg-stone-300 hover:bg-stone-400'}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 hover:border-gold hover:text-gold transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};