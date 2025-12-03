import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

interface FormData {
   name: string;
   phone: string;
   email: string;
   message: string;
}

interface FormErrors {
   name?: string;
   phone?: string;
   email?: string;
}

export const ContactForm: React.FC = () => {
   const [selectedInterest, setSelectedInterest] = useState<string>('');
   const [focusedField, setFocusedField] = useState<string | null>(null);

   const [formData, setFormData] = useState<FormData>({
      name: '',
      phone: '',
      email: '',
      message: ''
   });

   const [errors, setErrors] = useState<FormErrors>({});

   const interests = [
      { id: 'ai-training', label: 'Đào tạo AI' },
      { id: 'automation', label: 'Tư vấn Automation' },
      { id: 'digital-transform', label: 'Chuyển đổi số' },
      { id: 'other', label: 'Khác' }
   ];

   const handleFocus = (field: string) => setFocusedField(field);
   const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!e.target.value) {
         setFocusedField(null);
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
      // Clear error when user starts typing
      if (errors[id as keyof FormErrors]) {
         setErrors(prev => ({ ...prev, [id]: undefined }));
      }
   };

   const validateForm = (): boolean => {
      const newErrors: FormErrors = {};
      let isValid = true;

      if (!formData.name.trim()) {
         newErrors.name = 'Vui lòng nhập họ và tên';
         isValid = false;
      }

      if (!formData.phone.trim()) {
         newErrors.phone = 'Vui lòng nhập số điện thoại';
         isValid = false;
      } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
         newErrors.phone = 'Số điện thoại không hợp lệ';
         isValid = false;
      }

      if (!formData.email.trim()) {
         newErrors.email = 'Vui lòng nhập địa chỉ email';
         isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         newErrors.email = 'Email không hợp lệ';
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
         console.log('Form submitted:', { ...formData, selectedInterest });
         // TODO: Implement actual submission logic here
         alert('Gửi thông tin thành công!');
         setFormData({ name: '', phone: '', email: '', message: '' });
         setSelectedInterest('');
         setFocusedField(null);
      }
   };

   return (
      <section id="contact-form" className="py-32 bg-cream relative overflow-hidden">
         {/* Background Ambience */}
         <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">

            {/* Left Content - Inspirational */}
            <div className="lg:col-span-5 sticky top-32">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-ink mb-8 leading-tight">
                     Sẵn sàng <br />
                     <span className="text-gold italic">Chuyển đổi số?</span>
                  </h2>
                  <p className="font-sans text-stone-600 font-light mb-10 leading-relaxed text-justify">
                     Để lại thông tin và đội ngũ của Harry sẽ liên hệ để tư vấn giải pháp AI và tự động hóa phù hợp nhất.
                  </p>
               </motion.div>

               {/* Abstract Art Element */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative h-96 w-full overflow-hidden hidden lg:block rounded-3xl shadow-lg"
               >
                  <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 z-0 rounded-3xl"></div>
                  <img
                     src="/image/anh1.jpeg"
                     alt="Consultation Art"
                     className="relative z-10 w-full h-full object-cover filter brightness-100 contrast-100"
                  />
               </motion.div>
            </div>

            {/* Right Form Card - Advanced Glassmorphism */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="lg:col-span-7 bg-white/60 backdrop-blur-2xl border border-white/40 p-8 md:p-12 relative shadow-2xl rounded-3xl overflow-hidden group"
            >
               {/* Subtle Noise Texture Overlay */}
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

               {/* Glow effect on hover */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px] group-hover:bg-gold/20 transition-colors duration-1000"></div>

               <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {/* Name Input */}
                     <div className="relative">
                        <input
                           type="text"
                           id="name"
                           value={formData.name}
                           onChange={handleChange}
                           className={`peer block w-full bg-transparent border-b py-3 text-ink focus:outline-none transition-colors placeholder-transparent ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-gold'}`}
                           placeholder="Name"
                           onFocus={() => handleFocus('name')}
                           onBlur={handleBlur}
                        />
                        <label
                           htmlFor="name"
                           className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? '-top-4 text-xs text-gold' : 'top-3 text-sm text-stone-400'}`}
                        >
                           Họ và tên
                        </label>
                        {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.name}</span>}
                        {/* Animated Underline */}
                        <div className={`absolute bottom-0 left-0 w-full h-[1px] ${errors.name ? 'bg-red-200' : 'bg-stone-200'}`}></div>
                        <div className={`absolute bottom-0 left-1/2 h-[1px] ${errors.name ? 'bg-red-500' : 'bg-gold'} transition-all duration-500 ease-out transform -translate-x-1/2 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                     </div>

                     {/* Phone Input */}
                     <div className="relative">
                        <input
                           type="tel"
                           id="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           className={`peer block w-full bg-transparent border-b py-3 text-ink focus:outline-none transition-colors placeholder-transparent ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-gold'}`}
                           placeholder="Phone"
                           onFocus={() => handleFocus('phone')}
                           onBlur={handleBlur}
                        />
                        <label
                           htmlFor="phone"
                           className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'phone' || formData.phone ? '-top-4 text-xs text-gold' : 'top-3 text-sm text-stone-400'}`}
                        >
                           Số điện thoại
                        </label>
                        {errors.phone && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.phone}</span>}
                        {/* Animated Underline */}
                        <div className={`absolute bottom-0 left-0 w-full h-[1px] ${errors.phone ? 'bg-red-200' : 'bg-stone-200'}`}></div>
                        <div className={`absolute bottom-0 left-1/2 h-[1px] ${errors.phone ? 'bg-red-500' : 'bg-gold'} transition-all duration-500 ease-out transform -translate-x-1/2 ${focusedField === 'phone' ? 'w-full' : 'w-0'}`}></div>
                     </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                     <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`peer block w-full bg-transparent border-b py-3 text-ink focus:outline-none transition-colors placeholder-transparent ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-gold'}`}
                        placeholder="Email"
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                     />
                     <label
                        htmlFor="email"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? '-top-4 text-xs text-gold' : 'top-3 text-sm text-stone-400'}`}
                     >
                        Địa chỉ Email
                     </label>
                     {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.email}</span>}
                     {/* Animated Underline */}
                     <div className={`absolute bottom-0 left-0 w-full h-[1px] ${errors.email ? 'bg-red-200' : 'bg-stone-200'}`}></div>
                     <div className={`absolute bottom-0 left-1/2 h-[1px] ${errors.email ? 'bg-red-500' : 'bg-gold'} transition-all duration-500 ease-out transform -translate-x-1/2 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                  </div>

                  {/* Interest Selection Chips */}
                  <div className="space-y-4">
                     <label className="text-xs text-stone-400 uppercase tracking-widest block font-bold opacity-80">Chương trình quan tâm</label>
                     <div className="flex flex-wrap gap-3">
                        {interests.map((item) => (
                           <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedInterest(item.id)}
                              className={`px-5 py-2 text-sm font-sans border transition-all duration-500 ease-out rounded-full ${selectedInterest === item.id ? 'bg-gold text-white border-gold font-medium shadow-md' : 'border-stone-200 text-stone-500 hover:border-gold/30 hover:text-gold bg-white'}`}
                           >
                              {item.label}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                     <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="peer block w-full bg-transparent border-b border-stone-300 py-3 text-ink focus:outline-none focus:border-gold transition-colors placeholder-transparent resize-none"
                        placeholder="Message"
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                     />
                     <label
                        htmlFor="message"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? '-top-4 text-xs text-gold' : 'top-3 text-sm text-stone-400'}`}
                     >
                        Lời nhắn gửi (Nếu có)
                     </label>
                     {/* Animated Underline */}
                     <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-200"></div>
                     <div className={`absolute bottom-0 left-1/2 h-[1px] bg-gold transition-all duration-500 ease-out transform -translate-x-1/2 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                     <button
                        type="submit"
                        className="group relative w-full py-4 bg-transparent border border-gold text-gold font-sans text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-gold hover:text-white rounded-full"
                     >
                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>

                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white text-gold transition-colors duration-300">
                           Gửi Thông Tin <Send size={14} className="transition-transform duration-300 group-hover:stroke-white" />
                        </span>
                     </button>
                  </div>

               </form>
            </motion.div>
         </div>
      </section>
   );
}