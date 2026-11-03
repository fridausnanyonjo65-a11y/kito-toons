import React, { useState } from 'react';
import { Sparkles, Music, Heart } from 'lucide-react';

interface DancingSpongeBobProps {
  statusText?: string;
  isDancingFast?: boolean;
  onCheer?: () => void;
  interactive?: boolean;
}

export const DancingSpongeBob: React.FC<DancingSpongeBobProps> = ({
  statusText,
  isDancingFast = false,
  onCheer,
  interactive = true,
}) => {
  const [danceStyle, setDanceStyle] = useState<'jellyfish' | 'krabby' | 'cha-cha'>('jellyfish');
  const [showHeart, setShowHeart] = useState(false);

  const handleSpongeBobClick = () => {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1200);
    onCheer?.();
  };

  return (
    <div className="flex flex-col items-center select-none relative">
      {/* Cartoon Speech Bubble */}
      <div className="relative mb-2 px-3 py-1.5 rounded-2xl bg-[#FFF3E9] text-[#2E083B] border-2 border-[#FFA175] shadow-lg max-w-[260px] text-center transform hover:scale-105 transition-transform duration-200 animate-gentle-bounce">
        <p className="text-xs font-black tracking-tight leading-snug">
          {statusText || "I'm ready! I brought the sign-in form! 🍍"}
        </p>
        {/* Little Speech Bubble Tail pointing down */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#FFF3E9]" />
      </div>

      {/* Floating Heart reaction when clicked */}
      {showHeart && (
        <div className="absolute -top-6 text-[#FFA175] animate-ping flex items-center gap-1 z-30">
          <Heart className="w-6 h-6 fill-current text-rose-500" />
          <span className="text-xs font-black text-rose-300">BAHAHAHA!</span>
        </div>
      )}

      {/* Floating Bubbles & Musical Notes */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <span className="absolute -left-6 top-8 text-cyan-300/80 animate-bounce text-sm">🫧</span>
        <span className="absolute -right-6 top-4 text-cyan-200/90 animate-pulse text-base">🫧</span>
        <span className="absolute -right-8 top-16 text-yellow-300 animate-spin text-sm">🎵</span>
        <span className="absolute -left-8 top-20 text-[#FFA175] text-xs">✨</span>
      </div>

      {/* The Animated SpongeBob Character SVG */}
      <div
        onClick={handleSpongeBobClick}
        title="Click SpongeBob to tickle him!"
        className={`relative cursor-pointer transition-transform duration-300 ${
          isDancingFast ? 'scale-105' : ''
        } ${interactive ? 'hover:scale-108 active:scale-95' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 260"
          className={`w-36 h-40 sm:w-44 sm:h-48 drop-shadow-[0_12px_20px_rgba(255,161,117,0.35)] ${
            danceStyle === 'krabby'
              ? 'animate-gentle-bounce'
              : danceStyle === 'cha-cha'
              ? 'animate-spongebob-body'
              : 'animate-spongebob-body'
          }`}
        >
          <defs>
            {/* Sponge Body Yellow Gradient */}
            <linearGradient id="sbYellow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#FFF253" />
              <stop offset="60%" stop-color="#FED000" />
              <stop offset="100%" stop-color="#EAB308" />
            </linearGradient>

            {/* Sponge Pores Olive Shadow */}
            <radialGradient id="sbPore" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#A16207" stop-opacity="0.45" />
              <stop offset="100%" stop-color="#854D0E" stop-opacity="0.8" />
            </radialGradient>

            {/* Eye Blue Gradient */}
            <radialGradient id="sbEyeBlue" cx="45%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="70%" stop-color="#0284C7" />
              <stop offset="100%" stop-color="#0369A1" />
            </radialGradient>

            {/* Tie Red Gradient */}
            <linearGradient id="sbTieRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#EF4444" />
              <stop offset="100%" stop-color="#B91C1C" />
            </linearGradient>
          </defs>

          {/* === LEGS & DANCING FEET (Tapping alternating) === */}
          <g>
            {/* Left Leg & Shoe (Tap Dancing) */}
            <g className="animate-spongebob-leg-left">
              {/* Skinny Yellow Leg */}
              <rect x="78" y="180" width="8" height="42" fill="#FED000" stroke="#854D0E" stroke-width="1.5" rx="3" />
              {/* White Sock with Blue & Red Stripes */}
              <rect x="75" y="198" width="14" height="22" fill="#FFFFFF" stroke="#18181B" stroke-width="1.2" rx="2" />
              <line x1="75" y1="204" x2="89" y2="204" stroke="#3B82F6" stroke-width="2.5" />
              <line x1="75" y1="210" x2="89" y2="210" stroke="#EF4444" stroke-width="2.5" />
              {/* Shiny Black Dress Shoe */}
              <path
                d="M 62 222 Q 60 216 75 216 L 90 216 Q 96 220 96 228 L 64 228 Q 62 226 62 222 Z"
                fill="#18181B"
                stroke="#000000"
                stroke-width="1.5"
              />
              <circle cx="68" cy="218" r="2.5" fill="#FFFFFF" opacity="0.6" />
              <rect x="86" y="228" width="8" height="4" fill="#18181B" rx="1" />
            </g>

            {/* Right Leg & Shoe (Kicking Tap) */}
            <g className="animate-spongebob-leg-right">
              {/* Skinny Yellow Leg */}
              <rect x="154" y="180" width="8" height="42" fill="#FED000" stroke="#854D0E" stroke-width="1.5" rx="3" />
              {/* White Sock with Blue & Red Stripes */}
              <rect x="151" y="198" width="14" height="22" fill="#FFFFFF" stroke="#18181B" stroke-width="1.2" rx="2" />
              <line x1="151" y1="204" x2="165" y2="204" stroke="#3B82F6" stroke-width="2.5" />
              <line x1="151" y1="210" x2="165" y2="210" stroke="#EF4444" stroke-width="2.5" />
              {/* Shiny Black Dress Shoe */}
              <path
                d="M 148 222 Q 146 216 161 216 L 176 216 Q 182 220 182 228 L 150 228 Q 148 226 148 222 Z"
                fill="#18181B"
                stroke="#000000"
                stroke-width="1.5"
              />
              <circle cx="154" cy="218" r="2.5" fill="#FFFFFF" opacity="0.6" />
              <rect x="172" y="228" width="8" height="4" fill="#18181B" rx="1" />
            </g>
          </g>

          {/* === WAVING LEFT ARM (Swinging up & down) === */}
          <g className="animate-spongebob-arm-left">
            {/* White Shirt Sleeve */}
            <path d="M 40 120 L 22 135 L 30 148 L 46 132 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
            {/* Noodly Yellow Arm */}
            <path
              d="M 26 142 Q 10 160 16 178"
              fill="none"
              stroke="#FED000"
              stroke-width="7"
              stroke-linecap="round"
            />
            {/* Sponge Hand / Golden Spatula */}
            <circle cx="17" cy="183" r="8" fill="#FED000" stroke="#854D0E" stroke-width="1.5" />
            <ellipse cx="12" cy="180" rx="3" ry="5" fill="#FED000" />
            <ellipse cx="15" cy="188" rx="3" ry="5" fill="#FED000" />
            <ellipse cx="20" cy="188" rx="3" ry="5" fill="#FED000" />
            {/* Golden Krusty Krab Spatula in Left Hand! */}
            <rect x="4" y="150" width="4" height="42" fill="#71717A" rx="2" transform="rotate(-15 6 170)" />
            <rect x="0" y="140" width="16" height="18" rx="2" fill="#E4E4E7" stroke="#3F3F46" stroke-width="1" transform="rotate(-15 6 170)" />
          </g>

          {/* === WAVING RIGHT ARM (Holding the Form Platter / Waving) === */}
          <g className="animate-spongebob-arm-right">
            {/* White Shirt Sleeve */}
            <path d="M 195 120 L 214 135 L 206 148 L 189 132 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
            {/* Noodly Yellow Arm pointing excitedly at the sign-in form */}
            <path
              d="M 210 142 Q 228 158 220 178"
              fill="none"
              stroke="#FED000"
              stroke-width="7"
              stroke-linecap="round"
            />
            {/* Sponge Hand with thumbs up */}
            <circle cx="218" cy="182" r="8" fill="#FED000" stroke="#854D0E" stroke-width="1.5" />
            <ellipse cx="224" cy="178" rx="4" ry="7" fill="#FED000" />
            <ellipse cx="221" cy="188" rx="3" ry="5" fill="#FED000" />
            <ellipse cx="216" cy="189" rx="3" ry="5" fill="#FED000" />
          </g>

          {/* === SPONGEBOB MAIN RECTANGULAR BODY === */}
          <g id="spongebob-torso">
            {/* Wavy sponge outer border and yellow fill */}
            <path
              d="M 45 42
                 Q 50 38 65 42 Q 85 38 105 42 Q 130 38 155 42 Q 175 38 195 42
                 Q 198 65 195 90 Q 198 115 195 140
                 L 45 140
                 Q 42 115 45 90 Q 42 65 45 42 Z"
              fill="url(#sbYellow)"
              stroke="#854D0E"
              stroke-width="3"
              stroke-linejoin="round"
            />

            {/* Characteristic Olive Sponge Pores / Dimples */}
            <ellipse cx="60" cy="56" rx="9" ry="7" fill="url(#sbPore)" />
            <ellipse cx="55" cy="85" rx="6" ry="8" fill="url(#sbPore)" />
            <ellipse cx="62" cy="122" rx="8" ry="6" fill="url(#sbPore)" />
            <ellipse cx="180" cy="58" rx="10" ry="8" fill="url(#sbPore)" />
            <ellipse cx="185" cy="94" rx="7" ry="9" fill="url(#sbPore)" />
            <ellipse cx="178" cy="126" rx="9" ry="6" fill="url(#sbPore)" />
            <ellipse cx="120" cy="48" rx="6" ry="5" fill="url(#sbPore)" />

            {/* === SPONGEBOB'S EXPRESSIVE FACE === */}
            {/* Left Eye */}
            <g id="left-eye">
              {/* 3 Eyelashes */}
              <line x1="88" y1="52" x2="84" y2="40" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
              <line x1="97" y1="50" x2="97" y2="38" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
              <line x1="106" y1="52" x2="110" y2="40" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
              {/* Big White Sclera */}
              <circle cx="97" cy="72" r="22" fill="#FFFFFF" stroke="#18181B" stroke-width="2.5" />
              {/* Sky Blue Iris */}
              <circle cx="102" cy="72" r="11" fill="url(#sbEyeBlue)" />
              {/* Black Pupil & White Highlight */}
              <circle cx="103" cy="72" r="6" fill="#18181B" />
              <circle cx="105" cy="69" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Right Eye */}
            <g id="right-eye">
              {/* 3 Eyelashes */}
              <line x1="134" y1="52" x2="130" y2="40" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
              <line x1="143" y1="50" x2="143" y2="38" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
              <line x1="152" y1="52" x2="156" y2="40" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" />
              {/* Big White Sclera */}
              <circle cx="143" cy="72" r="22" fill="#FFFFFF" stroke="#18181B" stroke-width="2.5" />
              {/* Sky Blue Iris */}
              <circle cx="138" cy="72" r="11" fill="url(#sbEyeBlue)" />
              {/* Black Pupil & White Highlight */}
              <circle cx="137" cy="72" r="6" fill="#18181B" />
              <circle cx="139" cy="69" r="2.5" fill="#FFFFFF" />
            </g>

            {/* Protruding Long Cute Nose */}
            <path
              d="M 120 72 C 120 62 124 58 120 54 C 116 54 116 72 120 78 Z"
              fill="#FED000"
              stroke="#854D0E"
              stroke-width="2"
            />

            {/* Rosy Cheeks with 3 Red Freckles */}
            {/* Left Cheek */}
            <ellipse cx="70" cy="88" rx="14" ry="10" fill="#FDA4AF" opacity="0.85" stroke="#E11D48" stroke-width="1.2" />
            <circle cx="66" cy="86" r="1.5" fill="#BE123C" />
            <circle cx="70" cy="90" r="1.5" fill="#BE123C" />
            <circle cx="74" cy="86" r="1.5" fill="#BE123C" />

            {/* Right Cheek */}
            <ellipse cx="170" cy="88" rx="14" ry="10" fill="#FDA4AF" opacity="0.85" stroke="#E11D48" stroke-width="1.2" />
            <circle cx="166" cy="86" r="1.5" fill="#BE123C" />
            <circle cx="170" cy="90" r="1.5" fill="#BE123C" />
            <circle cx="174" cy="86" r="1.5" fill="#BE123C" />

            {/* Huge Joyful Grin */}
            <path
              d="M 68 85 Q 120 135 172 85 Q 120 120 68 85 Z"
              fill="#991B1B"
              stroke="#18181B"
              stroke-width="2.5"
            />
            {/* Pink Tongue inside mouth */}
            <path
              d="M 98 116 Q 120 102 142 116 Q 120 132 98 116 Z"
              fill="#F472B6"
              stroke="#BE185D"
              stroke-width="1.2"
            />
            {/* Two Front White Buck Teeth with Gap */}
            <rect x="105" y="94" width="12" height="14" fill="#FFFFFF" stroke="#18181B" stroke-width="2" rx="1.5" />
            <rect x="123" y="94" width="12" height="14" fill="#FFFFFF" stroke="#18181B" stroke-width="2" rx="1.5" />

            {/* Chin Dimple */}
            <path d="M 112 134 Q 120 138 128 134" stroke="#854D0E" stroke-width="2" fill="none" stroke-linecap="round" />

            {/* === WHITE COLLARED SHIRT === */}
            <rect x="46" y="140" width="148" height="20" fill="#FFFFFF" stroke="#18181B" stroke-width="2.5" />
            {/* Left Shirt Collar Point */}
            <polygon points="90,140 110,140 105,154 85,145" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
            {/* Right Shirt Collar Point */}
            <polygon points="150,140 130,140 135,154 155,145" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />

            {/* Fluttering Red Tie */}
            <g className="animate-spongebob-tie">
              <polygon points="115,142 125,142 128,150 120,154 112,150" fill="url(#sbTieRed)" stroke="#991B1B" stroke-width="1.2" />
              <polygon points="116,152 124,152 128,176 120,184 112,176" fill="url(#sbTieRed)" stroke="#991B1B" stroke-width="1.2" />
            </g>

            {/* === BROWN SQUARE PANTS === */}
            <rect x="46" y="160" width="148" height="24" fill="#78350F" stroke="#18181B" stroke-width="2.5" />
            {/* Black Belt Dashes */}
            <rect x="54" y="163" width="18" height="5" fill="#18181B" rx="1" />
            <rect x="84" y="163" width="20" height="5" fill="#18181B" rx="1" />
            <rect x="136" y="163" width="20" height="5" fill="#18181B" rx="1" />
            <rect x="168" y="163" width="18" height="5" fill="#18181B" rx="1" />

            {/* Pants Leg Openings */}
            <rect x="72" y="180" width="20" height="8" fill="#78350F" stroke="#18181B" stroke-width="1.5" rx="1" />
            <rect x="148" y="180" width="20" height="8" fill="#78350F" stroke="#18181B" stroke-width="1.5" rx="1" />
          </g>
        </svg>
      </div>

      {/* Dance Groove Selector Buttons */}
      {interactive && (
        <div className="flex items-center gap-1.5 mt-2 bg-[#190222]/80 p-1 rounded-xl border border-[#FFA175]/30">
          <button
            type="button"
            onClick={() => setDanceStyle('jellyfish')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              danceStyle === 'jellyfish'
                ? 'bg-[#FFA175] text-[#2E083B] shadow-sm'
                : 'text-[#FFF3E9]/70 hover:text-[#FFA175]'
            }`}
          >
            🪼 Jellyfish Jam
          </button>
          <button
            type="button"
            onClick={() => setDanceStyle('krabby')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              danceStyle === 'krabby'
                ? 'bg-[#FFA175] text-[#2E083B] shadow-sm'
                : 'text-[#FFF3E9]/70 hover:text-[#FFA175]'
            }`}
          >
            🍔 Krabby Step
          </button>
          <button
            type="button"
            onClick={() => setDanceStyle('cha-cha')}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              danceStyle === 'cha-cha'
                ? 'bg-[#FFA175] text-[#2E083B] shadow-sm'
                : 'text-[#FFF3E9]/70 hover:text-[#FFA175]'
            }`}
          >
            🍍 Pineapple Cha-Cha
          </button>
        </div>
      )}
    </div>
  );
};
