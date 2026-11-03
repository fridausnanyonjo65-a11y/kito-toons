import React from 'react';
import { Sparkles, Heart, Film, ShieldCheck, Award, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-[#3E0401] border-2 border-[#FFA175]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFA175]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5C0702] border border-[#FFA175]/50 text-xs font-bold text-[#FFA175]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KITO'S TOONS – WHERE ANIMATION COMES TO LIFE!</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFF3E9] tracking-tight">
              About Kito's Toons
            </h2>

            <p className="text-base sm:text-lg text-[#FFF3E9]/95 leading-relaxed font-normal">
              Welcome to Kito's Toons, your home of animated entertainment! We bring animation lovers together through exciting cartoons, creative storytelling, and entertaining animated movies. Our mission is to make entertainment enjoyable, accessible, and fun for everyone.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#5C0702]/80 border border-[#FFA175]/20 space-y-1.5">
                <Film className="w-5 h-5 text-[#FFA175]" />
                <h4 className="font-display font-bold text-sm text-[#FFF3E9]">Rich Animation</h4>
                <p className="text-xs text-[#FFF3E9]/70">Curated short films, 3D gems & classic adventures.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#5C0702]/80 border border-[#FFA175]/20 space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#FFA175]" />
                <h4 className="font-display font-bold text-sm text-[#FFF3E9]">100% Family Safe</h4>
                <p className="text-xs text-[#FFF3E9]/70">Wholesome humor and safe content for every age group.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#5C0702]/80 border border-[#FFA175]/20 space-y-1.5">
                <Heart className="w-5 h-5 text-[#FFA175]" />
                <h4 className="font-display font-bold text-sm text-[#FFF3E9]">Free For Everyone</h4>
                <p className="text-xs text-[#FFF3E9]/70">Streaming happiness without barriers or paywalls.</p>
              </div>
            </div>

            {/* Creator Spotlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#5C0702] to-[#7E0A04]/60 border border-[#FFA175]/40 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#FFA175] text-[#5C0702] flex items-center justify-center font-display font-black text-2xl shadow-lg shrink-0">
                K
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#FFA175] uppercase tracking-wider">Developer & Creator Vision</p>
                <p className="text-sm font-bold text-[#FFF3E9] mt-0.5">
                  Proudly Created & Developed by KITOOKE.
                </p>
                <p className="text-xs text-[#FFF3E9]/75 mt-0.5">
                  Crafted with passion to spark imagination in children and animation lovers across the world.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href="tel:+256750617186"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#3E0401] border border-[#FFA175]/40 text-xs font-bold text-[#FFA175] hover:bg-[#FFA175] hover:text-[#5C0702] transition-colors"
                  >
                    <span>📞 +256-750-617-186</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mascot Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-3 border-[#FFA175] bg-[#5C0702] p-4 text-center shadow-2xl shadow-[#3E0401]">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 border border-[#FFA175]/30">
                <img
                  src="/src/assets/images/kito_mascot_avatar_1793709129479.jpg"
                  alt="Captain Kito"
                  className="w-full h-full object-cover animate-gentle-bounce"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-display font-black text-xl text-[#FFF3E9]">
                Captain Kito
              </h3>
              <p className="text-xs text-[#FFA175] font-semibold mt-0.5">
                Chief Animation Explorer & Story Ambassador
              </p>
              <p className="text-xs text-[#FFF3E9]/70 mt-2 leading-relaxed">
                "Every cartoon is a little doorway into magic, friendship, and endless fun. Come explore with us!"
              </p>

              <div className="mt-4 pt-3 border-t border-[#FFA175]/20 flex items-center justify-center gap-1 text-[#FFA175]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
