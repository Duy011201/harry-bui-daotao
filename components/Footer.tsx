import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer className="bg-ink pt-24 pb-12 border-t border-white/10">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
               <h2 className="font-serif text-3xl text-gold mb-6">HARRY BUI</h2>
               <p className="font-sans text-xs text-stone-400 leading-relaxed">
                  Tiên phong trong lĩnh vực đào tạo, chuyển đổi số tư vấn giải pháp AI cho doanh nghiệp.
               </p>
            </div>

            <div>
               <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-6">Liên Hệ</h4>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-stone-400 text-sm hover:text-gold transition-colors cursor-pointer">
                     <Phone size={16} /> (+84) 0923 896 89
                  </li>
                  <li className="flex items-center gap-3 text-stone-400 text-sm hover:text-gold transition-colors cursor-pointer">
                     <Mail size={16} /> buitiepbds@gmail.com
                  </li>
                  <li className="flex items-center gap-3 text-stone-400 text-sm hover:text-gold transition-colors cursor-pointer">
                     <MapPin size={16} /> Tầng 6, Số 35 Ngõ 570 Kim Giang, Phường Thanh Liệt, Quận Hoàng Mai, TP Hà Nội
                  </li>
               </ul>
            </div>

            <div className="flex flex-col items-start lg:items-end">
               <h4 className="text-gold text-xs uppercase tracking-widest mb-6">Kết nối</h4>
               <div className="flex gap-4 mb-8">
                  <a href="https://www.facebook.com/tiepbuiai" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white hover:border-white hover:text-charcoal transition-all duration-300">
                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5" viewBox="0 0 600.000000 601.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,601.000000) scale(0.100000,-0.100000)"
                           fill="#0166FF" stroke="none">
                           <path d="M2780 5999 c-1205 -85 -2254 -908 -2631 -2064 -192 -588 -193 -1246
-3 -1836 154 -478 385 -853 748 -1214 374 -373 795 -618 1324 -769 l52 -15 0
995 0 994 -310 0 -310 0 0 460 0 460 309 0 308 0 6 328 c6 355 17 463 67 657
138 535 505 827 1122 894 138 15 409 13 573 -4 164 -17 323 -43 348 -56 16 -9
17 -40 17 -422 l0 -412 -272 0 c-221 0 -287 -4 -347 -17 -164 -38 -276 -118
-336 -241 -62 -128 -68 -163 -72 -459 l-5 -268 489 -2 489 -3 -57 -315 c-32
-173 -70 -379 -85 -457 l-26 -143 -404 0 -404 0 0 -1026 0 -1027 58 7 c182 21
471 98 679 182 396 158 732 382 1034 691 351 359 585 755 733 1247 83 272 119
530 119 846 0 478 -92 883 -297 1305 -161 331 -342 582 -607 841 -617 602
-1445 904 -2309 843z"/>
                        </g>
                     </svg>
                  </a>


                  <a
                     href="https://www.facebook.com/messages/t/100001785825866"
                     className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white border-white hover:text-charcoal transition-all duration-300"
                  >
                     <svg className="w-5 h-5" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_761_9815)"><path d="M79.07 38.8027C79.07 60.5762 62.0114 76.6954 40.005 76.6954C36.0529 76.6954 32.2607 76.1744 28.6964 75.1945C28.0037 75.003 27.2675 75.0573 26.6103 75.3465L18.8561 78.7696C16.8283 79.6656 14.5389 78.2229 14.4709 76.0066L14.2577 69.0567C14.2311 68.2011 13.8462 67.3998 13.2078 66.8305C5.60652 60.0325 0.940002 50.1922 0.940002 38.8027C0.940002 17.0302 17.9986 0.91 40.005 0.91C62.0114 0.91 79.07 17.0302 79.07 38.8027Z" fill="#0866FF" /><path d="M50.612 49.7107L64.2129 28.6911C65.5806 26.5784 63.0475 24.1193 60.9762 25.5481L46.7783 35.341C46.2997 35.6716 45.6691 35.6805 45.1817 35.3647L32.5804 27.2119C31.5137 26.5221 30.0897 26.827 29.4 27.8937L15.7981 48.9143C14.4304 51.027 16.9635 53.4861 19.0347 52.0572L33.2356 42.2634C33.7142 41.9328 34.3448 41.9239 34.8332 42.2397L47.4325 50.3925C48.4993 51.0823 49.9232 50.7774 50.613 49.7107H50.612Z" fill="white" /></g><defs><clipPath id="clip0_761_9815"><rect width="80" height="80" fill="white" /></clipPath></defs></svg>
                  </a>
                  <a
                     href="https://zalo.me/092389689"
                     className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white hover:border-white hover:text-charcoal transition-all duration-300"
                  >
                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5" viewBox="0 0 1200.000000 1200.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
                           fill="#0168FF" stroke="none">
                           <path d="M2492 11380 c-862 -446 -1484 -1080 -1907 -1945 -345 -704 -496
                      -1406 -535 -2490 -21 -584 -10 -1893 20 -2300 71 -963 271 -1678 658 -2354
                      408 -710 993 -1269 1734 -1656 716 -373 1459 -543 2568 -585 337 -13 1605 -13
                      1940 0 1308 50 2157 285 2975 825 376 248 695 541 974 894 128 163 181 240
                      151 220 -140 -90 -499 -275 -718 -368 -1506 -644 -3462 -777 -5167 -349 -507
                      127 -948 288 -1380 504 l-189 95 -116 -50 c-482 -209 -1102 -326 -1538 -292
                      -126 10 -168 20 -184 45 -13 19 -9 26 45 84 330 351 518 818 468 1163 -18 123
                      -57 211 -148 341 -355 500 -614 1038 -804 1666 -492 1629 -400 3552 243 5037
                      254 588 564 1063 972 1493 54 56 96 102 95 102 -2 0 -73 -36 -157 -80z"/>
                           <path d="M2600 7670 l0 -250 810 -2 810 -3 -786 -975 c-433 -536 -800 -992
                      -815 -1014 -53 -72 -71 -139 -77 -278 l-5 -128 1120 0 1119 0 52 26 c39 19 59
                      38 80 72 26 45 27 54 30 205 l4 157 -852 0 c-526 0 -850 4 -848 9 3 9 410 521
                      1244 1566 212 265 364 465 383 502 42 83 61 169 61 276 l0 87 -1165 0 -1165 0
                      0 -250z"/>
                           <path d="M7740 6537 l0 -1383 23 -44 c16 -33 34 -51 67 -67 41 -21 57 -23 227
                      -23 l183 0 0 1450 0 1450 -250 0 -250 0 0 -1383z"/>
                           <path d="M9538 7275 c-246 -40 -482 -165 -652 -346 -424 -449 -414 -1152 24
                      -1589 294 -295 723 -407 1117 -294 112 32 289 118 374 183 82 62 203 189 257
                      268 126 185 189 378 199 608 18 423 -200 814 -577 1035 -204 120 -503 174
                      -742 135z m381 -490 c201 -64 362 -219 434 -420 39 -106 48 -256 22 -370 -50
                      -228 -222 -420 -445 -496 -89 -30 -278 -38 -370 -15 -121 30 -226 90 -316 180
                      -90 91 -140 172 -176 286 -34 111 -32 283 5 395 118 358 491 552 846 440z"/>
                           <path d="M6005 7255 c-367 -69 -670 -295 -826 -620 -345 -715 110 -1536 901
                      -1626 249 -29 534 41 740 180 l45 31 14 -52 c18 -63 70 -118 127 -136 25 -7
                      101 -12 188 -12 l146 0 0 1095 0 1095 -235 0 -235 0 0 -75 c0 -41 -2 -75 -3
                      -75 -2 0 -41 22 -86 50 -96 57 -206 102 -324 131 -111 27 -341 34 -452 14z
                      m391 -479 c359 -114 553 -500 433 -859 -33 -98 -76 -166 -163 -253 -93 -92
                      -199 -153 -311 -179 -85 -20 -242 -20 -320 0 -189 48 -355 183 -438 356 -56
                      117 -71 179 -70 299 0 186 59 326 193 461 113 114 221 173 368 199 79 15 220
                      3 308 -24z"/>
                        </g>
                     </svg>
                  </a>
               </div>
               <button
                  onClick={scrollToTop}
                  className="group flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors"
               >
                  Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
               </button>
            </div>
         </div>

         <div className="border-t border-white/10 pt-8 text-center">
            <p className="font-serif italic text-stone-500 text-xl">"Hành trình phát triển kỹ năng của bạn bắt đầu từ đây."</p>
         </div>
      </footer>
   );
};