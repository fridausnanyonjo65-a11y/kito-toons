import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Deep atmospheric plum purple radial glow */}
      <div className="absolute inset-0 bg-radial-[at_top_center] from-[#48125C]/40 via-[#2E083B]/75 to-[#16021F]/98" />

      {/* Floating Animated Cartoon Clouds */}
      <div className="absolute top-[8%] left-0 w-full opacity-20">
        <div className="animate-drift-slow flex items-center gap-96">
          <svg width="220" height="90" viewBox="0 0 220 90" fill="none" className="text-[#FFA175]/40 drop-shadow-lg">
            <path d="M40 70C25 70 10 58 10 40C10 24 24 14 40 16C50 6 70 2 88 12C98 2 125 0 140 18C155 12 178 18 182 35C198 36 210 50 208 65C206 72 195 72 190 70H40Z" fill="currentColor" />
          </svg>
          <svg width="180" height="75" viewBox="0 0 220 90" fill="none" className="text-white/30 drop-shadow-lg">
            <path d="M40 70C25 70 10 58 10 40C10 24 24 14 40 16C50 6 70 2 88 12C98 2 125 0 140 18C155 12 178 18 182 35C198 36 210 50 208 65C206 72 195 72 190 70H40Z" fill="currentColor" />
          </svg>
          <svg width="260" height="100" viewBox="0 0 220 90" fill="none" className="text-[#FFA175]/30 drop-shadow-lg">
            <path d="M40 70C25 70 10 58 10 40C10 24 24 14 40 16C50 6 70 2 88 12C98 2 125 0 140 18C155 12 178 18 182 35C198 36 210 50 208 65C206 72 195 72 190 70H40Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="absolute top-[38%] left-0 w-full opacity-15">
        <div className="animate-drift-reverse flex items-center gap-[30rem]">
          <svg width="190" height="80" viewBox="0 0 220 90" fill="none" className="text-white/20">
            <path d="M40 70C25 70 10 58 10 40C10 24 24 14 40 16C50 6 70 2 88 12C98 2 125 0 140 18C155 12 178 18 182 35C198 36 210 50 208 65C206 72 195 72 190 70H40Z" fill="currentColor" />
          </svg>
          <svg width="240" height="95" viewBox="0 0 220 90" fill="none" className="text-[#FFA175]/25">
            <path d="M40 70C25 70 10 58 10 40C10 24 24 14 40 16C50 6 70 2 88 12C98 2 125 0 140 18C155 12 178 18 182 35C198 36 210 50 208 65C206 72 195 72 190 70H40Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Floating Animated Bubbles */}
      <div className="absolute inset-0">
        <div
          className="animate-float-bubble absolute left-[8%] w-10 h-10 rounded-full border border-[#FFA175]/40 bg-radial from-[#FFF3E9]/30 to-transparent backdrop-blur-[1px]"
          style={{ animationDuration: '16s', animationDelay: '0s' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white/70 absolute top-2 left-2" />
        </div>

        <div
          className="animate-float-bubble absolute left-[22%] w-16 h-16 rounded-full border border-[#FFA175]/50 bg-radial from-[#FFA175]/25 to-transparent backdrop-blur-[1px]"
          style={{ animationDuration: '19s', animationDelay: '3s' }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white/80 absolute top-3 left-3" />
        </div>

        <div
          className="animate-float-bubble absolute left-[45%] w-8 h-8 rounded-full border border-white/40 bg-radial from-white/30 to-transparent"
          style={{ animationDuration: '14s', animationDelay: '7s' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/80 absolute top-1.5 left-1.5" />
        </div>

        <div
          className="animate-float-bubble absolute left-[68%] w-14 h-14 rounded-full border border-[#FFA175]/45 bg-radial from-[#FFA175]/30 to-transparent"
          style={{ animationDuration: '22s', animationDelay: '1.5s' }}
        >
          <div className="w-3 h-3 rounded-full bg-white/80 absolute top-2.5 left-2.5" />
        </div>

        <div
          className="animate-float-bubble absolute left-[88%] w-12 h-12 rounded-full border border-white/50 bg-radial from-white/25 to-transparent"
          style={{ animationDuration: '18s', animationDelay: '5s' }}
        >
          <div className="w-2 h-2 rounded-full bg-white/90 absolute top-2 left-2" />
        </div>
      </div>

      {/* Twinkling Magical Cartoon Stars */}
      <div className="absolute top-[12%] left-[15%] animate-star-twinkle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFA175" className="opacity-75">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[28%] right-[12%] animate-star-twinkle" style={{ animationDelay: '1.2s' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFF3E9" className="opacity-80">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[65%] left-[6%] animate-star-twinkle" style={{ animationDelay: '2.4s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFA175" className="opacity-70">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[80%] right-[20%] animate-star-twinkle" style={{ animationDelay: '0.8s' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFA175" className="opacity-60">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Floating Animated Character Silhouette / Companion Droid & Flying Spark */}
      <div className="absolute top-[20%] left-[4%] animate-gentle-bounce opacity-40 hover:opacity-80 transition-opacity">
        <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="text-[#FFA175]">
          {/* Whimsical mini spark sprite with little wings */}
          <circle cx="50" cy="50" r="22" fill="#FFA175" />
          <circle cx="43" cy="46" r="3.5" fill="#190222" />
          <circle cx="57" cy="46" r="3.5" fill="#190222" />
          <path d="M46 54C48 57 52 57 54 54" stroke="#190222" strokeWidth="2.5" strokeLinecap="round" />
          {/* Wings */}
          <path d="M28 46C18 36 14 50 26 56" fill="#FFF3E9" fillOpacity="0.8" />
          <path d="M72 46C82 36 86 50 74 56" fill="#FFF3E9" fillOpacity="0.8" />
          {/* Spark halo */}
          <path d="M50 18L52 24L58 26L52 28L50 34L48 28L42 26L48 24Z" fill="#FFF3E9" />
        </svg>
      </div>

      {/* Whimsical Rotating Film Reel Motif (top right) */}
      <div className="absolute -top-12 -right-12 w-64 h-64 opacity-15 pointer-events-none">
        <div className="w-full h-full animate-film-roll rounded-full border-4 border-dashed border-[#FFA175] flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-2 border-[#FFA175] flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#FFA175]/50" />
          </div>
        </div>
      </div>
    </div>
  );
};
