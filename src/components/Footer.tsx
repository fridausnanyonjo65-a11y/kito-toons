import React from 'react';
import { ActiveTab } from '../types';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: ActiveTab) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenPolicy }) => {
  return (
    <footer className="bg-[#350301] text-[#FFF3E9] border-t-2 border-[#FFA175]/30 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFA175]/20">
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#5C0702] border-2 border-[#FFA175] overflow-hidden flex items-center justify-center">
                <img
                  src="/src/assets/images/kito_mascot_avatar_1793709129479.jpg"
                  alt="Kito's Toons"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-2xl font-black text-[#FFF3E9] tracking-tight">
                KITO'S <span className="text-[#FFA175]">TOONS</span>
              </span>
            </div>

            <p className="text-sm font-bold text-[#FFA175] flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>KITO'S TOONS – WHERE ANIMATION COMES TO LIFE!</span>
            </p>

            <p className="text-xs text-[#FFF3E9]/75 max-w-sm leading-relaxed">
              Your magical world of animation movies, cartoons, fun, and adventure! Bringing families and cartoon lovers together with high-quality animated storytelling.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#FFA175] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#FFF3E9]/80">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('movies')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  Movies Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('categories')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  Animation Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Safety */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#FFA175] uppercase tracking-wider">
              Safety & Terms
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#FFF3E9]/80">
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
              <li className="pt-2 text-[11px] text-[#FFF3E9]/60 leading-relaxed">
                All animated media streamed on this platform complies with authorized open licenses and child safety regulations.
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Credit & Copyright Prominence */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-display text-sm font-black text-[#FFA175] tracking-wide">
              Proudly Created & Developed by KITOOKE.
            </p>
            <p className="text-xs text-[#FFF3E9]/80 font-medium">
              MADE WITH CREATIVITY BY KITOOKE.
            </p>
            <p className="text-xs text-[#FFA175] pt-0.5">
              Contact / WhatsApp: <a href="tel:+256750617186" className="hover:underline font-bold">+256-750-617-186</a>
            </p>
          </div>

          <div className="text-xs text-[#FFF3E9]/60">
            © {new Date().getFullYear()} Kito's Toons. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
