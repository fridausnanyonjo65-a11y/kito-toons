import React from 'react';
import { Play, Sparkles, Compass, Star, Heart } from 'lucide-react';
import { Movie } from '../types';

interface HeroSectionProps {
  featuredMovie: Movie;
  onWatchNow: (movie: Movie) => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredMovie,
  onWatchNow,
  onExplore,
}) => {
  return (
    <section className="relative pt-6 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Heading, Subtitle & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
          {/* Brand Slogan Ribbon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#190222]/90 border border-[#FFA175]/50 text-xs font-semibold text-[#FFA175] shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA175] animate-spin" style={{ animationDuration: '6s' }} />
            <span>KITO'S TOONS – WHERE ANIMATION COMES TO LIFE!</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFF3E9] tracking-tight leading-[1.08] [text-wrap:balance]">
            WELCOME TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA175] via-[#ffbe9e] to-[#FFF3E9] drop-shadow-md">
              KITO'S TOONS!
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#FFF3E9]/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0 [text-wrap:balance]">
            Your magical world of animation movies, cartoons, fun, and adventure!
          </p>

          <p className="text-sm text-[#FFF3E9]/75 max-w-xl leading-relaxed">
            Stream hand-crafted animated short films, feature-length cartoon adventures, and laugh-out-loud family stories in crystal-clear high definition.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => onWatchNow(featuredMovie)}
              className="group flex items-center gap-3 px-7 py-4 text-base font-black text-[#2A0201] bg-[#FFA175] hover:bg-[#ff8e5b] rounded-2xl shadow-xl shadow-[#FFA175]/30 hover:shadow-[#FFA175]/50 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#190222] text-[#FFA175] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>WATCH NOW</span>
            </button>

            <button
              onClick={onExplore}
              className="flex items-center gap-2.5 px-6 py-4 text-base font-bold text-white hover:text-[#FFA175] bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-[#FFA175] rounded-2xl transition-all cursor-pointer shadow-lg"
            >
              <Compass className="w-5 h-5 text-[#FFA175]" />
              <span>Explore Movies</span>
            </button>
          </div>

          {/* Quick Highlight Features */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#FFA175]/20 max-w-lg mx-auto lg:mx-0">
            <div>
              <p className="text-xl sm:text-2xl font-black font-display text-[#FFA175]">100% Free</p>
              <p className="text-xs text-[#FFF3E9]/70">Family Safe</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black font-display text-[#FFA175]">HD Audio</p>
              <p className="text-xs text-[#FFF3E9]/70">Cinematic Sound</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black font-display text-[#FFA175]">Kitooke</p>
              <p className="text-xs text-[#FFF3E9]/70">Original Creation</p>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Grand Artwork Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border-3 border-[#FFA175]/60 shadow-2xl shadow-[#190222]/90 bg-[#23052D] group">
            {/* Aspect Ratio Container */}
            <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden relative">
              <img
                src={featuredMovie.posterUrl}
                alt={featuredMovie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#190222] via-transparent to-black/20" />

              {/* Quick Play Overlay Button */}
              <button
                onClick={() => onWatchNow(featuredMovie)}
                aria-label={`Play ${featuredMovie.title}`}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFA175] text-[#2E083B] flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
              </button>

              {/* Category pill-free text kicker */}
              <div className="absolute top-4 left-4 bg-[#190222]/90 backdrop-blur-sm border border-[#FFA175]/40 rounded-xl px-3 py-1 text-xs font-bold text-[#FFA175]">
                Spotlight Feature
              </div>
            </div>

            {/* Bottom Card Bar */}
            <div className="p-5 bg-[#23052D] flex items-center justify-between border-t border-[#FFA175]/20">
              <div>
                <h3 className="font-display font-bold text-lg text-[#FFF3E9] truncate max-w-[240px] sm:max-w-xs">
                  {featuredMovie.title}
                </h3>
                <p className="text-xs text-[#FFA175]">
                  {featuredMovie.category} · {featuredMovie.duration} · {featuredMovie.releaseYear}
                </p>
              </div>

              <button
                onClick={() => onWatchNow(featuredMovie)}
                className="px-4 py-2 text-xs font-black text-[#2A0201] bg-[#FFA175] hover:bg-[#ff8e5b] rounded-xl transition-colors cursor-pointer shadow"
              >
                Watch Now
              </button>
            </div>
          </div>

          {/* Whimsical Mascot Floating Badge */}
          <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#23052D] border-2 border-[#FFA175] rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-gentle-bounce">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#FFA175]/50 shrink-0">
              <img
                src="/src/assets/images/kito_mascot_avatar_1793709129479.jpg"
                alt="Captain Kito"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#FFA175]">Meet Captain Kito</p>
              <p className="text-[11px] text-[#FFF3E9]/80">"Adventure awaits you!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
