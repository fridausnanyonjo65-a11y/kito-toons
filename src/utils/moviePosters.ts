/**
 * Beautifully crafted vector SVG poster data URIs for all Kito's Toons movies.
 * Crisp, ultra-vibrant 3:4 aspect ratio posters that render with zero network latency.
 */

function createPosterDataUri(svgContent: string): string {
  const cleaned = svgContent.replace(/\s+/g, ' ').trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(cleaned)}`;
}

export const POSTERS: Record<string, string> = {
  // 1. The Minions
  minions: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="minionBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2E083B" />
          <stop offset="50%" stop-color="#4A0E4E" />
          <stop offset="100%" stop-color="#190222" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#FCD34D" stop-opacity="0.8" />
          <stop offset="45%" stop-color="#F59E0B" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#2E083B" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="bodyYellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFE043" />
          <stop offset="100%" stop-color="#F59E0B" />
        </linearGradient>
        <linearGradient id="overallsBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#minionBg)" />
      <circle cx="300" cy="340" r="280" fill="url(#sunGlow)" />

      <!-- Top Header -->
      <rect x="180" y="32" width="240" height="28" rx="14" fill="#FFA175" />
      <text x="300" y="51" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="12" text-anchor="middle" letter-spacing="2">KITO'S TOONS EXCLUSIVE</text>

      <!-- Banana Silhouettes background -->
      <path d="M 120 180 Q 150 140 190 150 Q 160 180 120 180 Z" fill="#FDE047" opacity="0.3" transform="rotate(-20 150 160)" />
      <path d="M 450 190 Q 480 150 520 160 Q 490 190 450 190 Z" fill="#FDE047" opacity="0.3" transform="rotate(30 480 170)" />

      <!-- Minion Bob (Small with Bear) -->
      <g transform="translate(140, 360)">
        <rect x="0" y="0" width="90" height="130" rx="45" fill="url(#bodyYellow)" />
        <rect x="0" y="45" width="90" height="14" fill="#1F2937" />
        <!-- Dual Eyes with Goggles -->
        <circle cx="28" cy="52" r="19" fill="#9CA3AF" />
        <circle cx="28" cy="52" r="14" fill="#FFFFFF" />
        <circle cx="28" cy="52" r="7" fill="#10B981" />
        <circle cx="62" cy="52" r="19" fill="#9CA3AF" />
        <circle cx="62" cy="52" r="14" fill="#FFFFFF" />
        <circle cx="62" cy="52" r="7" fill="#8B5CF6" />
        <!-- Smile -->
        <path d="M 32 80 Q 45 92 58 80" stroke="#92400E" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Overalls -->
        <path d="M 10 90 L 80 90 L 80 130 L 10 130 Z" fill="url(#overallsBlue)" />
        <circle cx="45" cy="110" r="8" fill="#1E3A8A" />
      </g>

      <!-- Center Minion Kevin (Tall Leader) -->
      <g transform="translate(245, 230)">
        <!-- Sprout Hair -->
        <path d="M 55 0 Q 55 -25 45 -35 M 55 0 Q 60 -30 65 -32 M 55 0 Q 50 -20 35 -25" stroke="#1F2937" stroke-width="4" stroke-linecap="round" fill="none" />
        <rect x="0" y="0" width="110" height="230" rx="55" fill="url(#bodyYellow)" />
        <!-- Goggle Band -->
        <rect x="0" y="55" width="110" height="20" fill="#1F2937" />
        <circle cx="55" cy="65" r="32" fill="#D1D5DB" stroke="#4B5563" stroke-width="4" />
        <circle cx="55" cy="65" r="22" fill="#FFFFFF" />
        <circle cx="55" cy="65" r="11" fill="#78350F" />
        <circle cx="58" cy="62" r="4" fill="#FFFFFF" />
        <!-- Big Smile -->
        <path d="M 35 115 Q 55 140 75 115" stroke="#92400E" stroke-width="4" fill="#FFFFFF" />
        <!-- Overalls with G pocket -->
        <path d="M 12 145 L 98 145 L 98 230 L 12 230 Z" fill="url(#overallsBlue)" />
        <rect x="35" y="165" width="40" height="30" rx="6" fill="#1D4ED8" />
        <circle cx="55" cy="180" r="10" fill="#1E3A8A" />
        <text x="55" y="184" fill="#FDE047" font-weight="900" font-size="12" text-anchor="middle">G</text>
      </g>

      <!-- Stuart (Guitar one-eye) -->
      <g transform="translate(370, 340)">
        <rect x="0" y="0" width="96" height="150" rx="48" fill="url(#bodyYellow)" />
        <rect x="0" y="48" width="96" height="16" fill="#1F2937" />
        <circle cx="48" cy="56" r="26" fill="#9CA3AF" />
        <circle cx="48" cy="56" r="18" fill="#FFFFFF" />
        <circle cx="48" cy="56" r="9" fill="#92400E" />
        <circle cx="51" cy="53" r="3" fill="#FFFFFF" />
        <!-- Half smirk -->
        <path d="M 36 90 Q 56 102 66 92" stroke="#92400E" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 10 100 L 86 100 L 86 150 L 10 150 Z" fill="url(#overallsBlue)" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 600)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="64" text-anchor="middle" letter-spacing="4">THE MINIONS</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="6">YELLOW • CRAZY • BANANAS!</text>
        <text x="0" y="60" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="14" text-anchor="middle">Featuring Kevin, Stuart and Bob</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">STREAMING NOW ON KITO'S TOONS</text>
      </g>
    </svg>
  `),

  // 2. Kung Fu Panda
  kungFuPanda: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="pandaBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#14532D" />
          <stop offset="45%" stop-color="#064E3B" />
          <stop offset="100%" stop-color="#022C22" />
        </linearGradient>
        <radialGradient id="dragonScrollGlow" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#D97706" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#064E3B" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#pandaBg)" />
      <circle cx="300" cy="320" r="260" fill="url(#dragonScrollGlow)" />

      <!-- Chinese Cloud & Mountain Silhouettes -->
      <path d="M 0 450 Q 150 350 300 440 Q 450 320 600 430 L 600 800 L 0 800 Z" fill="#022C22" opacity="0.6" />
      <circle cx="300" cy="200" r="140" stroke="#FDE68A" stroke-width="3" fill="none" opacity="0.4" stroke-dasharray="10 8" />

      <!-- Yin-Yang Golden Seal -->
      <g transform="translate(300, 180)">
        <circle cx="0" cy="0" r="42" fill="#F59E0B" opacity="0.8" />
        <path d="M 0 -40 A 40 40 0 0 1 0 40 A 20 20 0 0 1 0 0 A 20 20 0 0 0 0 -40" fill="#2E083B" />
        <circle cx="0" cy="-20" r="6" fill="#2E083B" />
        <circle cx="0" cy="20" r="6" fill="#F59E0B" />
      </g>

      <!-- Po the Panda Hero Silhouettes / Martial Arts Pose -->
      <g transform="translate(300, 350)">
        <!-- Panda Body -->
        <ellipse cx="0" cy="70" rx="100" ry="85" fill="#FFFFFF" />
        <path d="M -70 85 Q 0 120 70 85 L 75 140 L -75 140 Z" fill="#78350F" />
        <!-- Head -->
        <circle cx="0" cy="-25" r="80" fill="#FFFFFF" />
        <!-- Ears -->
        <circle cx="-65" cy="-85" r="28" fill="#18181B" />
        <circle cx="65" cy="-85" r="28" fill="#18181B" />
        <!-- Eye Patches -->
        <ellipse cx="-32" cy="-30" rx="20" ry="26" fill="#18181B" transform="rotate(-15 -32 -30)" />
        <ellipse cx="32" cy="-30" rx="20" ry="26" fill="#18181B" transform="rotate(15 32 -30)" />
        <circle cx="-30" cy="-28" r="7" fill="#10B981" />
        <circle cx="30" cy="-28" r="7" fill="#10B981" />
        <circle cx="-28" cy="-30" r="3" fill="#FFFFFF" />
        <circle cx="32" cy="-30" r="3" fill="#FFFFFF" />
        <!-- Nose and mouth -->
        <polygon points="-12,-8 12,-8 0,4" fill="#18181B" />
        <path d="M -18 8 Q 0 24 18 8" stroke="#18181B" stroke-width="4" fill="none" stroke-linecap="round" />
        <!-- Kung Fu Strike Paws -->
        <circle cx="-110" cy="-20" r="32" fill="#18181B" />
        <circle cx="115" cy="50" r="32" fill="#18181B" />
      </g>

      <!-- Golden Dragon Flourish -->
      <path d="M 80 120 Q 200 40 300 100 Q 450 60 520 140" stroke="#FBBF24" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 595)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="58" text-anchor="middle" letter-spacing="3">KUNG FU PANDA</text>
        <text x="0" y="32" fill="#FDE68A" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">THE DRAGON WARRIOR RISES</text>
        <text x="0" y="60" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="14" text-anchor="middle">Master Shifu • The Furious Five • Po</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">AWARD WINNING ACTION</text>
      </g>
    </svg>
  `),

  // 3. Zootopia
  zootopia: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="zooBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E1B4B" />
          <stop offset="50%" stop-color="#312E81" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>
        <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#06B6D4" />
          <stop offset="50%" stop-color="#F43F5E" />
          <stop offset="100%" stop-color="#FBBF24" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#zooBg)" />

      <!-- Metropolis Skyline -->
      <path d="M 60 480 L 60 300 L 110 300 L 110 480 Z M 130 480 L 130 220 L 190 180 L 250 220 L 250 480 Z M 270 480 L 270 260 L 330 260 L 330 480 Z M 350 480 L 350 200 L 420 160 L 490 200 L 490 480 Z M 510 480 L 510 320 L 560 320 L 560 480 Z" fill="#1F2937" opacity="0.6" />

      <!-- Glowing ZPD Police Badge -->
      <g transform="translate(300, 240)">
        <polygon points="0,-90 65,-40 50,55 0,90 -50,55 -65,-40" fill="#F59E0B" stroke="#FDE68A" stroke-width="4" />
        <polygon points="0,-75 50,-35 38,45 0,72 -38,45 -50,-35" fill="#1E3A8A" />
        <text x="0" y="-10" fill="#FDE68A" font-family="system-ui, sans-serif" font-weight="900" font-size="24" text-anchor="middle" letter-spacing="3">ZPD</text>
        <text x="0" y="18" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">OFFICER</text>
        <circle cx="0" cy="38" r="6" fill="#F59E0B" />
      </g>

      <!-- Judy Hopps Ears & Nick Wilde Fox Silhouette -->
      <g transform="translate(300, 420)">
        <!-- Judy Bunny Silhouette Left -->
        <g transform="translate(-80, 0)">
          <!-- Long Bunny Ears -->
          <ellipse cx="-15" cy="-120" rx="14" ry="50" fill="#9CA3AF" transform="rotate(-10 -15 -120)" />
          <ellipse cx="-15" cy="-120" rx="8" ry="40" fill="#F472B6" transform="rotate(-10 -15 -120)" />
          <ellipse cx="20" cy="-120" rx="14" ry="50" fill="#9CA3AF" transform="rotate(10 20 -120)" />
          <ellipse cx="20" cy="-120" rx="8" ry="40" fill="#F472B6" transform="rotate(10 20 -120)" />
          <circle cx="0" cy="-45" r="42" fill="#9CA3AF" />
          <circle cx="-12" cy="-50" r="7" fill="#8B5CF6" />
          <circle cx="12" cy="-50" r="7" fill="#8B5CF6" />
          <!-- Blue ZPD Vest -->
          <rect x="-35" y="-5" width="70" height="60" rx="16" fill="#2563EB" />
          <circle cx="0" cy="15" r="8" fill="#F59E0B" />
        </g>
        <!-- Nick Wilde Fox Silhouette Right -->
        <g transform="translate(80, 10)">
          <!-- Fox Ears -->
          <polygon points="-35,-80 -15,-130 -5,-70" fill="#EA580C" />
          <polygon points="5,-70 15,-130 35,-80" fill="#EA580C" />
          <circle cx="0" cy="-45" r="44" fill="#EA580C" />
          <polygon points="-12,-35 12,-35 0,-15" fill="#FFFFFF" />
          <polygon points="-5,-25 5,-25 0,-18" fill="#18181B" />
          <!-- Green Hawaiian Shirt and Tie -->
          <rect x="-35" y="-5" width="70" height="60" rx="16" fill="#10B981" />
          <polygon points="-6,0 6,0 4,40 -4,40" fill="#4338CA" />
        </g>
      </g>

      <!-- Neon Baseline Banner -->
      <rect x="50" y="555" width="500" height="4" fill="url(#neonGlow)" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 620)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="62" text-anchor="middle" letter-spacing="4">ZOOTOPIA</text>
        <text x="0" y="30" fill="#38BDF8" font-family="system-ui, sans-serif" font-weight="800" font-size="15" text-anchor="middle" letter-spacing="4">WHERE ANYONE CAN BE ANYTHING</text>
        <text x="0" y="56" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Officer Judy Hopps &amp; Nick Wilde</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">DISNEY ANIMATION HIT</text>
      </g>
    </svg>
  `),

  // 4. Rango
  rango: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="rangoSunset" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7C2D12" />
          <stop offset="40%" stop-color="#C2410C" />
          <stop offset="70%" stop-color="#EA580C" />
          <stop offset="100%" stop-color="#451A03" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#rangoSunset)" />

      <!-- Huge Desert Sun -->
      <circle cx="300" cy="300" r="160" fill="#FEF08A" opacity="0.9" />

      <!-- Saguaro Cacti Silhouettes -->
      <g fill="#451A03">
        <!-- Left Cactus -->
        <rect x="70" y="260" width="22" height="200" rx="11" />
        <path d="M 50 320 L 70 320 L 70 340 L 50 340 L 50 300 L 60 300 L 60 320 Z" />
        <path d="M 92 340 L 115 340 L 115 290 L 105 290 L 105 325 L 92 325 Z" />
        <!-- Right Cactus -->
        <rect x="490" y="280" width="24" height="180" rx="12" />
        <path d="M 470 330 L 490 330 L 490 350 L 470 350 L 470 310 L 480 310 L 480 330 Z" />
      </g>

      <!-- Rango Chameleon with Cowboy Hat & Hawaiian Shirt -->
      <g transform="translate(300, 360)">
        <!-- Big Cowboy Hat -->
        <ellipse cx="0" cy="-110" rx="120" ry="25" fill="#78350F" />
        <path d="M -60 -110 Q 0 -170 60 -110 Z" fill="#92400E" />
        <!-- Long skinny green chameleon neck and head -->
        <path d="M -25 -95 Q 0 -60 25 -95 L 35 10 L -35 10 Z" fill="#84CC16" />
        <!-- Big Googly Chameleon Eyes sticking out -->
        <ellipse cx="-45" cy="-80" rx="28" ry="32" fill="#65A30D" />
        <ellipse cx="45" cy="-80" rx="28" ry="32" fill="#65A30D" />
        <circle cx="-42" cy="-80" r="12" fill="#FACC15" />
        <circle cx="42" cy="-80" r="12" fill="#FACC15" />
        <circle cx="-42" cy="-80" r="5" fill="#18181B" />
        <circle cx="42" cy="-80" r="5" fill="#18181B" />
        <!-- Quirky crooked smile -->
        <path d="M -20 -40 Q 5 -30 20 -45" stroke="#365314" stroke-width="4" fill="none" stroke-linecap="round" />
        <!-- Red Hawaiian shirt with yellow palm trees -->
        <path d="M -50 20 L 50 20 L 65 140 L -65 140 Z" fill="#DC2626" />
        <circle cx="-15" cy="60" r="8" fill="#FBBF24" opacity="0.8" />
        <circle cx="20" cy="100" r="9" fill="#FBBF24" opacity="0.8" />
        <!-- Sheriff Star Badge -->
        <polygon points="0,50 6,65 22,65 10,75 14,90 0,80 -14,90 -10,75 -22,65 -6,65" fill="#FACC15" stroke="#78350F" stroke-width="2" />
      </g>

      <!-- Dusty Mesa Ground -->
      <path d="M 0 540 Q 300 500 600 540 L 600 800 L 0 800 Z" fill="#2E083B" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 610)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="68" text-anchor="middle" letter-spacing="6">RANGO</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="15" text-anchor="middle" letter-spacing="4">WE DIE IN THE DESERT • WE LIVE AS HEROES</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Directed by Gore Verbinski • Academy Award Winner</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">BEST ANIMATED FEATURE</text>
      </g>
    </svg>
  `),

  // 5. The Smurfs
  smurfs: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="smurfBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="50%" stop-color="#0369A1" />
          <stop offset="100%" stop-color="#1E1B4B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#smurfBg)" />

      <!-- Magical Mushroom Village in Background -->
      <g transform="translate(300, 220)">
        <!-- Giant Red Polka Dot Mushroom House -->
        <path d="M -160 120 Q 0 -60 160 120 Z" fill="#DC2626" />
        <circle cx="-70" cy="50" r="18" fill="#FFFFFF" />
        <circle cx="70" cy="60" r="22" fill="#FFFFFF" />
        <circle cx="0" cy="20" r="24" fill="#FFFFFF" />
        <rect x="-70" y="115" width="140" height="80" rx="12" fill="#FFFBEB" />
        <path d="M -20 195 L -20 150 Q 0 135 20 150 L 20 195 Z" fill="#78350F" />
      </g>

      <!-- Papa Smurf (Red Hat) and Smurfette (Blonde) Center -->
      <g transform="translate(300, 390)">
        <!-- Papa Smurf -->
        <g transform="translate(-70, 0)">
          <!-- Red Phrygian Cap -->
          <path d="M -40 -30 Q -50 -100 0 -90 Q 50 -120 30 -50 Q 40 -30 40 -20 Z" fill="#DC2626" />
          <!-- Blue Head -->
          <circle cx="0" cy="0" r="38" fill="#38BDF8" />
          <!-- White Beard -->
          <path d="M -35 0 Q 0 65 35 0 Q 25 35 -25 35 Z" fill="#FFFFFF" />
          <!-- Big Blue Round Nose -->
          <ellipse cx="0" cy="-6" rx="12" ry="9" fill="#0284C7" />
          <circle cx="-14" cy="-14" r="5" fill="#18181B" />
          <circle cx="14" cy="-14" r="5" fill="#18181B" />
          <!-- Red Pants -->
          <rect x="-30" y="45" width="60" height="50" rx="14" fill="#DC2626" />
        </g>
        <!-- Smurfette -->
        <g transform="translate(70, 5)">
          <!-- Long Golden Hair -->
          <path d="M -45 -10 Q -60 60 -30 90 L 30 90 Q 60 60 45 -10 Z" fill="#FACC15" />
          <!-- White Cap -->
          <path d="M -38 -30 Q -45 -95 0 -85 Q 45 -115 28 -50 Q 38 -30 38 -20 Z" fill="#FFFFFF" />
          <!-- Blue Face -->
          <circle cx="0" cy="0" r="35" fill="#38BDF8" />
          <ellipse cx="0" cy="-4" rx="10" ry="7" fill="#0284C7" />
          <!-- Big pretty eyes -->
          <ellipse cx="-12" cy="-14" rx="6" ry="8" fill="#FFFFFF" />
          <ellipse cx="12" cy="-14" rx="6" ry="8" fill="#FFFFFF" />
          <circle cx="-12" cy="-14" r="4" fill="#0369A1" />
          <circle cx="12" cy="-14" r="4" fill="#0369A1" />
          <!-- White Dress -->
          <path d="M -25 40 L 25 40 L 35 95 L -35 95 Z" fill="#FFFFFF" />
        </g>
      </g>

      <!-- Sparkles and Stars -->
      <circle cx="120" cy="180" r="4" fill="#FEF08A" />
      <circle cx="480" cy="140" r="5" fill="#FEF08A" />
      <circle cx="180" cy="520" r="3" fill="#FEF08A" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 610)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="62" text-anchor="middle" letter-spacing="4">THE SMURFS</text>
        <text x="0" y="32" fill="#38BDF8" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="4">SMURF-TASTIC MAGICAL ADVENTURE</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Papa Smurf • Smurfette • Clumsy • Brainy</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">BELOVED FAMILY CLASSIC</text>
      </g>
    </svg>
  `),

  // 6. Alvin and the Chipmunks
  alvin: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="alvinBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#991B1B" />
          <stop offset="50%" stop-color="#450A0A" />
          <stop offset="100%" stop-color="#18181B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#alvinBg)" />

      <!-- Musical Notes Floating -->
      <path d="M 80 180 L 110 170 L 110 200 M 80 210 L 80 180 M 80 210 A 10 8 0 1 1 65 210 M 110 200 A 10 8 0 1 1 95 200" stroke="#FDE047" stroke-width="4" fill="#FDE047" opacity="0.6" />
      <path d="M 480 160 L 510 150 L 510 180 M 480 190 L 480 160 M 480 190 A 10 8 0 1 1 465 190 M 510 180 A 10 8 0 1 1 495 180" stroke="#FDE047" stroke-width="4" fill="#FDE047" opacity="0.6" />

      <!-- The 3 Chipmunks in Hoodies -->
      <!-- Simon (Blue, Glasses) Left -->
      <g transform="translate(160, 360)">
        <!-- Head -->
        <circle cx="0" cy="-20" r="38" fill="#92400E" />
        <circle cx="-32" cy="-45" r="16" fill="#78350F" />
        <circle cx="32" cy="-45" r="16" fill="#78350F" />
        <!-- Glasses -->
        <circle cx="-16" cy="-20" r="14" stroke="#18181B" stroke-width="4" fill="#FFFFFF" />
        <circle cx="16" cy="-20" r="14" stroke="#18181B" stroke-width="4" fill="#FFFFFF" />
        <line x1="-2" y1="-20" x2="2" y2="-20" stroke="#18181B" stroke-width="4" />
        <circle cx="-16" cy="-20" r="4" fill="#18181B" />
        <circle cx="16" cy="-20" r="4" fill="#18181B" />
        <!-- Blue Hoodie -->
        <rect x="-35" y="20" width="70" height="90" rx="16" fill="#2563EB" />
      </g>

      <!-- Alvin (Center Red with Big Yellow 'A') -->
      <g transform="translate(300, 310)">
        <circle cx="0" cy="-25" r="45" fill="#92400E" />
        <!-- Cap -->
        <path d="M -40 -35 Q 0 -85 40 -35 Z" fill="#DC2626" />
        <polygon points="20,-35 70,-45 40,-25" fill="#B91C1C" />
        <!-- Ears -->
        <circle cx="-40" cy="-45" r="18" fill="#78350F" />
        <circle cx="40" cy="-45" r="18" fill="#78350F" />
        <!-- Eyes & Cool Smirk -->
        <ellipse cx="-16" cy="-22" rx="7" ry="9" fill="#FFFFFF" />
        <ellipse cx="16" cy="-22" rx="7" ry="9" fill="#FFFFFF" />
        <circle cx="-14" cy="-22" r="5" fill="#78350F" />
        <circle cx="18" cy="-22" r="5" fill="#78350F" />
        <path d="M -15 -2 Q 0 12 18 -2" stroke="#451A03" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Red Hoodie with Yellow A -->
        <rect x="-45" y="22" width="90" height="120" rx="20" fill="#DC2626" />
        <text x="0" y="95" fill="#FDE047" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="52" text-anchor="middle">A</text>
      </g>

      <!-- Theodore (Right Green, Cute Chubby) -->
      <g transform="translate(440, 370)">
        <circle cx="0" cy="-15" r="42" fill="#92400E" />
        <circle cx="-32" cy="-40" r="16" fill="#78350F" />
        <circle cx="32" cy="-40" r="16" fill="#78350F" />
        <!-- Big Sweet Eyes -->
        <circle cx="-15" cy="-18" r="9" fill="#FFFFFF" />
        <circle cx="15" cy="-18" r="9" fill="#FFFFFF" />
        <circle cx="-15" cy="-18" r="5" fill="#15803D" />
        <circle cx="15" cy="-18" r="5" fill="#15803D" />
        <!-- Chubby Cheeks -->
        <ellipse cx="-22" cy="-4" rx="10" ry="7" fill="#FCA5A5" opacity="0.6" />
        <ellipse cx="22" cy="-4" rx="10" ry="7" fill="#FCA5A5" opacity="0.6" />
        <!-- Green Hoodie -->
        <rect x="-40" y="24" width="80" height="85" rx="18" fill="#16A34A" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="46" text-anchor="middle" letter-spacing="2">ALVIN AND THE CHIPMUNKS</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="15" text-anchor="middle" letter-spacing="5">ALVINNN! • ROCKSTAR SENSATIONS</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Alvin • Simon • Theodore • Dave</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">MUSICAL HIT COMEDY</text>
      </g>
    </svg>
  `),

  // 7. Ice Age
  iceAge: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="iceBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="45%" stop-color="#0369A1" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#iceBg)" />

      <!-- Jagged Glacier Peaks -->
      <polygon points="0,380 90,240 180,390" fill="#E0F2FE" opacity="0.6" />
      <polygon points="140,410 260,180 380,410" fill="#BAE6FD" opacity="0.8" />
      <polygon points="340,390 470,220 590,400" fill="#7DD3FC" opacity="0.7" />

      <!-- Giant Woolly Mammoth Manny Silhouette with Curved Ivory Tusks -->
      <g transform="translate(300, 360)">
        <!-- Mammoth Body & Shaggy Fur -->
        <ellipse cx="0" cy="50" rx="140" ry="110" fill="#451A03" />
        <!-- Head -->
        <ellipse cx="0" cy="-40" rx="80" ry="90" fill="#78350F" />
        <!-- Big Curved Ivory Tusks -->
        <path d="M -70 20 Q -150 10 -140 -80 Q -125 -60 -60 10 Z" fill="#FEF08A" />
        <path d="M 70 20 Q 150 10 140 -80 Q 125 -60 60 10 Z" fill="#FEF08A" />
        <!-- Long Trunk -->
        <path d="M -20 10 Q -40 80 0 110 Q 20 120 15 90 Q 0 60 15 10 Z" fill="#451A03" />
        <!-- Little Eyes under fur -->
        <circle cx="-35" cy="-55" r="8" fill="#18181B" />
        <circle cx="35" cy="-55" r="8" fill="#18181B" />
        <circle cx="-33" cy="-57" r="3" fill="#FFFFFF" />
        <circle cx="37" cy="-57" r="3" fill="#FFFFFF" />

        <!-- Scrat holding the Acorn Top Left! -->
        <g transform="translate(-160, -110)">
          <!-- Squirrel Body -->
          <ellipse cx="0" cy="0" rx="22" ry="16" fill="#A16207" />
          <!-- Snout -->
          <polygon points="12,-5 35,0 15,10" fill="#CA8A04" />
          <circle cx="8" cy="-12" r="10" fill="#FFFFFF" />
          <circle cx="8" cy="-12" r="5" fill="#18181B" />
          <!-- Giant Acorn -->
          <ellipse cx="38" cy="15" rx="16" ry="18" fill="#78350F" />
          <path d="M 22 8 Q 38 -2 54 8 Z" fill="#451A03" />
        </g>
      </g>

      <!-- Ice Cracks & Crystals on Ground -->
      <path d="M 0 530 L 600 530 L 600 800 L 0 800 Z" fill="#1E293B" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 610)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="64" text-anchor="middle" letter-spacing="4">ICE AGE</text>
        <text x="0" y="32" fill="#7DD3FC" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">THE COOLEST HEROES IN HISTORY</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Manny • Sid • Diego • Scrat and the Acorn</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">SUB-ZERO PREHISTORIC FUN</text>
      </g>
    </svg>
  `),

  // 8. Dora the Explorer
  dora: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="doraBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#15803D" />
          <stop offset="50%" stop-color="#166534" />
          <stop offset="100%" stop-color="#14532D" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#doraBg)" />

      <!-- Tropical Vines and Rainbow Arch -->
      <path d="M 50 240 Q 300 60 550 240" stroke="#FDE047" stroke-width="8" fill="none" opacity="0.6" />
      <path d="M 65 240 Q 300 80 535 240" stroke="#FB923C" stroke-width="8" fill="none" opacity="0.6" />
      <path d="M 80 240 Q 300 100 520 240" stroke="#EC4899" stroke-width="8" fill="none" opacity="0.6" />

      <!-- Dora Silhouette & Boots the Monkey -->
      <g transform="translate(250, 350)">
        <!-- Dora's Bob Haircut -->
        <ellipse cx="0" cy="-60" rx="65" ry="55" fill="#451A03" />
        <!-- Face -->
        <circle cx="0" cy="-50" r="48" fill="#FBBF24" />
        <!-- Big Eyes -->
        <ellipse cx="-18" cy="-55" rx="8" ry="12" fill="#78350F" />
        <ellipse cx="18" cy="-55" rx="8" ry="12" fill="#78350F" />
        <!-- Bright Smile -->
        <path d="M -18 -32 Q 0 -15 18 -32" stroke="#B91C1C" stroke-width="4" fill="#FFFFFF" />
        <!-- Pink Shirt & Orange Shorts -->
        <rect x="-35" y="0" width="70" height="55" rx="14" fill="#EC4899" />
        <rect x="-32" y="55" width="64" height="35" rx="10" fill="#F97316" />
        <!-- Purple Backpack with Eyes -->
        <g transform="translate(45, 10)">
          <rect x="0" y="0" width="45" height="50" rx="12" fill="#A855F7" />
          <circle cx="15" cy="20" r="4" fill="#FFFFFF" />
          <circle cx="30" cy="20" r="4" fill="#FFFFFF" />
          <circle cx="15" cy="20" r="2" fill="#18181B" />
          <circle cx="30" cy="20" r="2" fill="#18181B" />
          <!-- Map rolled up sticking out -->
          <rect x="25" y="-15" width="14" height="22" rx="4" fill="#FEF08A" />
        </g>
      </g>

      <!-- Boots the Monkey Right -->
      <g transform="translate(420, 390)">
        <!-- Grey Blue Fur -->
        <circle cx="0" cy="-20" r="32" fill="#60A5FA" />
        <circle cx="-28" cy="-35" r="14" fill="#93C5FD" />
        <circle cx="28" cy="-35" r="14" fill="#93C5FD" />
        <circle cx="0" cy="-15" r="22" fill="#FEF08A" />
        <!-- Red Boots on Feet! -->
        <rect x="-24" y="45" width="20" height="30" rx="8" fill="#EF4444" />
        <rect x="4" y="45" width="20" height="30" rx="8" fill="#EF4444" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="52" text-anchor="middle" letter-spacing="3">DORA THE EXPLORER</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="4">¡VÁMONOS! • ADVENTURE &amp; LEARNING</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Dora • Boots the Monkey • Backpack • Map</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">TOP EDUCATIONAL CARTOON</text>
      </g>
    </svg>
  `),

  // 9. Toy Story
  toyStory: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="andySky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="60%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#andySky)" />

      <!-- Andy's Iconic Bedroom Clouds -->
      <g fill="#FFFFFF" opacity="0.85">
        <path d="M 80 140 A 25 25 0 0 1 120 120 A 35 35 0 0 1 180 135 A 25 25 0 0 1 175 165 L 85 165 Z" />
        <path d="M 400 110 A 30 30 0 0 1 450 90 A 40 40 0 0 1 520 110 A 30 30 0 0 1 510 145 L 405 145 Z" />
        <path d="M 230 230 A 25 25 0 0 1 270 210 A 35 35 0 0 1 330 225 A 25 25 0 0 1 325 255 L 235 255 Z" />
      </g>

      <!-- Sheriff Woody (Left) & Buzz Lightyear (Right) -->
      <g transform="translate(300, 360)">
        <!-- Woody Cowboy Hat & Badge -->
        <g transform="translate(-85, 0)">
          <!-- Brown Cowboy Hat -->
          <ellipse cx="0" cy="-110" rx="65" ry="18" fill="#78350F" />
          <path d="M -30 -110 Q 0 -145 30 -110 Z" fill="#92400E" />
          <!-- Head -->
          <circle cx="0" cy="-60" r="35" fill="#FED7AA" />
          <circle cx="-12" cy="-62" r="5" fill="#78350F" />
          <circle cx="12" cy="-62" r="5" fill="#78350F" />
          <!-- Yellow Checked Shirt -->
          <rect x="-35" y="-15" width="70" height="75" rx="14" fill="#FACC15" />
          <!-- Cowhide Vest -->
          <path d="M -35 -15 L -10 -15 L -10 60 L -35 60 Z M 10 -15 L 35 -15 L 35 60 L 10 60 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="1" />
          <circle cx="-25" cy="0" r="6" fill="#18181B" />
          <circle cx="22" cy="20" r="7" fill="#18181B" />
          <!-- Gold Sheriff Star -->
          <polygon points="-20,10 -16,20 -6,20 -14,26 -11,36 -20,30 -29,36 -26,26 -34,20 -24,20" fill="#F59E0B" />
        </g>

        <!-- Buzz Space Ranger Suit -->
        <g transform="translate(85, 10)">
          <!-- Purple Helmet Cowl -->
          <circle cx="0" cy="-65" r="38" fill="#7E22CE" />
          <circle cx="0" cy="-55" r="30" fill="#FED7AA" />
          <!-- Chin Swirl -->
          <circle cx="0" cy="-35" r="4" fill="#7E22CE" />
          <!-- White & Lime Green Chest Plate -->
          <rect x="-45" y="-15" width="90" height="75" rx="16" fill="#FFFFFF" />
          <rect x="-40" y="-10" width="80" height="25" rx="8" fill="#84CC16" />
          <!-- Red Button -->
          <circle cx="-22" cy="25" r="7" fill="#EF4444" />
          <circle cx="-2" cy="25" r="6" fill="#3B82F6" />
          <circle cx="18" cy="25" r="6" fill="#FACC15" />
          <!-- Space Wings -->
          <polygon points="45,0 95,-30 85,25" fill="#84CC16" stroke="#EF4444" stroke-width="3" />
        </g>
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="64" text-anchor="middle" letter-spacing="4">TOY STORY</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">TO INFINITY AND BEYOND!</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Sheriff Woody • Buzz Lightyear • Rex • Mr. Potato Head</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">PIXAR HISTORIC MASTERPIECE</text>
      </g>
    </svg>
  `),

  // 10. Tom and Jerry
  tomAndJerry: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="tjBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#DC2626" />
          <stop offset="50%" stop-color="#991B1B" />
          <stop offset="100%" stop-color="#450A0A" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#tjBg)" />

      <!-- Concentric Cartoon Circles (Classic MGM/WB style) -->
      <circle cx="300" cy="300" r="220" fill="#F97316" opacity="0.3" />
      <circle cx="300" cy="300" r="170" fill="#FBBF24" opacity="0.5" />
      <circle cx="300" cy="300" r="120" fill="#FEF08A" opacity="0.8" />

      <!-- Tom Cat (Grey with determined comedic look) -->
      <g transform="translate(240, 310)">
        <circle cx="0" cy="0" r="75" fill="#64748B" />
        <!-- Big Cat Ears with Pink Inner -->
        <polygon points="-65,-40 -50,-120 -15,-60" fill="#475569" />
        <polygon points="-55,-50 -45,-105 -22,-65" fill="#F472B6" />
        <polygon points="15,-60 50,-120 65,-40" fill="#475569" />
        <polygon points="22,-65 45,-105 55,-50" fill="#F472B6" />
        <!-- White Muzzle -->
        <ellipse cx="0" cy="20" rx="42" ry="32" fill="#F8FAFC" />
        <circle cx="0" cy="5" r="9" fill="#F43F5E" />
        <!-- Big Yellow Cat Eyes -->
        <ellipse cx="-22" cy="-15" rx="14" ry="18" fill="#FDE047" />
        <ellipse cx="22" cy="-15" rx="14" ry="18" fill="#FDE047" />
        <ellipse cx="-20" cy="-15" rx="5" ry="12" fill="#18181B" />
        <ellipse cx="20" cy="-15" rx="5" ry="12" fill="#18181B" />
      </g>

      <!-- Jerry Mouse (Brown, on Tom's head / smiling playfully) -->
      <g transform="translate(380, 240)">
        <!-- Giant Mouse Ears -->
        <circle cx="-28" cy="-28" r="24" fill="#B45309" />
        <circle cx="-28" cy="-28" r="15" fill="#FBCFE8" />
        <circle cx="28" cy="-28" r="24" fill="#B45309" />
        <circle cx="28" cy="-28" r="15" fill="#FBCFE8" />
        <!-- Brown Head -->
        <circle cx="0" cy="0" r="32" fill="#D97706" />
        <circle cx="0" cy="5" r="6" fill="#18181B" />
        <!-- Winking Clever Eyes -->
        <ellipse cx="-10" cy="-6" rx="6" ry="8" fill="#FFFFFF" />
        <circle cx="-10" cy="-6" r="4" fill="#18181B" />
        <path d="M 6 -6 Q 16 -12 16 -4" stroke="#18181B" stroke-width="3" fill="none" />
        <!-- Golden Triangle Swiss Cheese in Jerry's Hand -->
        <polygon points="25,10 65,0 55,35" fill="#FDE047" stroke="#CA8A04" stroke-width="2" />
        <circle cx="45" cy="15" r="4" fill="#CA8A04" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="58" text-anchor="middle" letter-spacing="4">TOM AND JERRY</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">CHASE • SLAPSTICK • LAUGHTER</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Seven-Time Academy Award Winning Duo</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">GREATEST SLAPSTICK DUO</text>
      </g>
    </svg>
  `),

  // 11. Goat
  goat: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="goatBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="45%" stop-color="#059669" />
          <stop offset="100%" stop-color="#064E3B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#goatBg)" />

      <!-- Alpine Mountain Peak -->
      <polygon points="100,420 300,160 500,420" fill="#E2E8F0" opacity="0.9" />
      <polygon points="260,210 300,160 340,210 320,240 280,240" fill="#FFFFFF" />

      <!-- Plucky Billy the Mountain Goat on the Summit -->
      <g transform="translate(300, 330)">
        <!-- Goat Curved Horns -->
        <path d="M -20 -80 Q -70 -120 -50 -160 Q -40 -120 -10 -90 Z" fill="#92400E" />
        <path d="M 20 -80 Q 70 -120 50 -160 Q 40 -120 10 -90 Z" fill="#92400E" />
        <!-- Head and Snout -->
        <polygon points="-30,-80 30,-80 15,0 -15,0" fill="#F8FAFC" />
        <!-- Goat Little Beard -->
        <path d="M -8 0 L 8 0 L 0 25 Z" fill="#E2E8F0" />
        <!-- Floppy Ears -->
        <ellipse cx="-45" cy="-70" rx="20" ry="10" fill="#E2E8F0" transform="rotate(-20 -45 -70)" />
        <ellipse cx="45" cy="-70" rx="20" ry="10" fill="#E2E8F0" transform="rotate(20 45 -70)" />
        <!-- Golden Eyes with Horizontal Slit Pupils -->
        <ellipse cx="-18" cy="-55" rx="8" ry="10" fill="#FBBF24" />
        <ellipse cx="18" cy="-55" rx="8" ry="10" fill="#FBBF24" />
        <rect x="-24" y="-57" width="12" height="4" rx="2" fill="#18181B" />
        <rect x="12" y="-57" width="12" height="4" rx="2" fill="#18181B" />
        <!-- Fluffy Wool Body & Climbing Hooves -->
        <ellipse cx="0" cy="55" rx="65" ry="45" fill="#FFFFFF" />
        <circle cx="-35" cy="95" r="12" fill="#475569" />
        <circle cx="35" cy="95" r="12" fill="#475569" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="64" text-anchor="middle" letter-spacing="4">GOAT</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">THE GREAT ALPINE CHAMPION</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Billy the Fearless Mountain Climber</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">HIGH-FLYING ADVENTURE</text>
      </g>
    </svg>
  `),

  // 12. Storks
  storks: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="storkSunset" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4F46E5" />
          <stop offset="45%" stop-color="#EC4899" />
          <stop offset="80%" stop-color="#F97316" />
          <stop offset="100%" stop-color="#1E1B4B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#storkSunset)" />

      <!-- Giant Sunset Sun -->
      <circle cx="300" cy="300" r="140" fill="#FEF08A" opacity="0.8" />

      <!-- Junior the Delivery Stork in Flight -->
      <g transform="translate(300, 310)">
        <!-- Long Orange Beak -->
        <polygon points="30,-15 140,5 30,10" fill="#F97316" />
        <!-- White Head -->
        <circle cx="0" cy="0" r="42" fill="#FFFFFF" />
        <circle cx="15" cy="-8" r="8" fill="#3B82F6" />
        <circle cx="17" cy="-9" r="3" fill="#FFFFFF" />
        <!-- Stork Wings Spread Wide -->
        <path d="M -20 -15 Q -140 -120 -220 -80 Q -140 20 -30 25 Z" fill="#FFFFFF" />
        <path d="M -180 -70 L -215 -75 L -190 -50 Z" fill="#18181B" />
        <path d="M 20 -15 Q 120 -140 210 -100 Q 140 10 30 25 Z" fill="#FFFFFF" />
        <path d="M 180 -90 L 210 -95 L 190 -70 Z" fill="#18181B" />
        <!-- Delivering Pink Swaddle Bundle -->
        <path d="M 90 20 Q 95 110 50 110 Q 5 110 10 20 Z" fill="#F472B6" />
        <!-- Baby Little Tuft of Pink Hair -->
        <circle cx="50" cy="55" r="22" fill="#FED7AA" />
        <circle cx="50" cy="35" r="8" fill="#EC4899" />
      </g>

      <!-- Fluffy White Clouds -->
      <ellipse cx="120" cy="460" rx="100" ry="40" fill="#FFFFFF" opacity="0.7" />
      <ellipse cx="480" cy="480" rx="120" ry="45" fill="#FFFFFF" opacity="0.7" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="64" text-anchor="middle" letter-spacing="6">STORKS</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="4">FIND YOUR FLOCK • DELIVERING JOY</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Junior &amp; Tulip • Warner Animation Group</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">HILARIOUS FAMILY ADVENTURE</text>
      </g>
    </svg>
  `),

  // 13. Puss in Boots
  pussInBoots: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="pussBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#450A0A" />
          <stop offset="50%" stop-color="#18181B" />
          <stop offset="100%" stop-color="#09090B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#pussBg)" />

      <!-- Golden Wishing Star Crest in Sky -->
      <polygon points="300,100 320,160 380,170 330,210 350,270 300,230 250,270 270,210 220,170 280,160" fill="#FBBF24" opacity="0.8" />

      <!-- Puss in Boots with his Cavalier Hat & Rapier -->
      <g transform="translate(300, 360)">
        <!-- Iconic Black Musketeer Hat with Yellow Feather -->
        <ellipse cx="0" cy="-90" rx="95" ry="24" fill="#18181B" />
        <path d="M -45 -90 Q 0 -130 45 -90 Z" fill="#27272A" />
        <!-- Big Golden Feather Plume -->
        <path d="M 30 -95 Q 110 -150 130 -110 Q 80 -80 35 -85 Z" fill="#F59E0B" />
        <!-- Orange Tabby Cat Head -->
        <circle cx="0" cy="-35" r="48" fill="#EA580C" />
        <!-- Enormous Big Heartwarming Kitten Eyes -->
        <ellipse cx="-20" cy="-40" rx="16" ry="20" fill="#10B981" />
        <ellipse cx="20" cy="-40" rx="16" ry="20" fill="#10B981" />
        <circle cx="-18" cy="-40" r="10" fill="#064E3B" />
        <circle cx="22" cy="-40" r="10" fill="#064E3B" />
        <circle cx="-14" cy="-44" r="5" fill="#FFFFFF" />
        <circle cx="26" cy="-44" r="5" fill="#FFFFFF" />
        <!-- Pink Nose and Whiskers -->
        <polygon points="-5,-20 5,-20 0,-14" fill="#F472B6" />
        <!-- Black Cape & Leather Belt -->
        <path d="M -50 15 L 50 15 L 75 140 L -75 140 Z" fill="#18181B" />
        <rect x="-45" y="40" width="90" height="16" fill="#78350F" />
        <rect x="-12" y="36" width="24" height="24" rx="4" fill="#FBBF24" />
        <!-- Shining Steel Rapier Sword -->
        <line x1="45" y1="50" x2="140" y2="-40" stroke="#E2E8F0" stroke-width="5" stroke-linecap="round" />
        <circle cx="50" cy="45" r="14" fill="#F59E0B" />
        <!-- Leather Boots with Folded Tops -->
        <rect x="-42" y="125" width="34" height="45" rx="8" fill="#78350F" />
        <rect x="8" y="125" width="34" height="45" rx="8" fill="#78350F" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="56" text-anchor="middle" letter-spacing="3">PUSS IN BOOTS</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">THE LAST WISH • FEARLESS HERO</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Puss in Boots • Kitty Softpaws • Perrito</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">CRITICALLY ACCLAIMED</text>
      </g>
    </svg>
  `),

  // 14. The Croods
  croods: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="croodBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7C2D12" />
          <stop offset="50%" stop-color="#C2410C" />
          <stop offset="100%" stop-color="#18181B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#croodBg)" />

      <!-- Prehistoric Giant Sun & Fiery Torch Glow -->
      <circle cx="300" cy="270" r="160" fill="#F59E0B" opacity="0.6" />
      <circle cx="300" cy="270" r="110" fill="#FDE047" opacity="0.8" />

      <!-- Cave Wall Painting Motifs and Handprints -->
      <g fill="#451A03" opacity="0.5">
        <circle cx="90" cy="180" r="14" />
        <circle cx="80" cy="150" r="6" />
        <circle cx="95" cy="145" r="6" />
        <circle cx="110" cy="155" r="6" />
        <circle cx="510" cy="180" r="14" />
        <circle cx="500" cy="150" r="6" />
        <circle cx="515" cy="145" r="6" />
        <circle cx="530" cy="155" r="6" />
      </g>

      <!-- Grug & Eep Crood Silhouette with Blazing Torch -->
      <g transform="translate(300, 370)">
        <!-- Giant Grug Strongman Silhouette -->
        <ellipse cx="0" cy="50" rx="90" ry="70" fill="#292524" />
        <ellipse cx="0" cy="-25" rx="50" ry="40" fill="#292524" />
        <circle cx="-45" cy="-20" r="28" fill="#292524" />
        <circle cx="45" cy="-20" r="28" fill="#292524" />
        <!-- Blazing Torch in Hand -->
        <rect x="75" y="-90" width="16" height="110" rx="6" fill="#78350F" />
        <circle cx="83" cy="-105" r="28" fill="#EF4444" />
        <circle cx="83" cy="-105" r="18" fill="#F59E0B" />
        <circle cx="83" cy="-105" r="10" fill="#FEF08A" />
      </g>

      <!-- Prehistoric Canyon Edge -->
      <path d="M 0 520 L 180 480 L 320 530 L 600 470 L 600 800 L 0 800 Z" fill="#1C1917" />

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="62" text-anchor="middle" letter-spacing="4">THE CROODS</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="4">NEVER HIDE • EXPLORE TOMORROW</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Grug • Eep • Guy • Gran • DreamWorks</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">PREHISTORIC COMEDY BLOCKBUSTER</text>
      </g>
    </svg>
  `),

  // 15. Cloudy with a Chance of Meatballs
  cloudy: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="cloudyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7" />
          <stop offset="50%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#7C2D12" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#cloudyBg)" />

      <!-- Giant Storm Cloud raining Spaghetti & Pancakes -->
      <g transform="translate(300, 190)">
        <ellipse cx="0" cy="0" rx="160" ry="70" fill="#FFFFFF" />
        <circle cx="-80" cy="-30" r="50" fill="#FFFFFF" />
        <circle cx="80" cy="-30" r="50" fill="#FFFFFF" />
        <circle cx="0" cy="-50" r="60" fill="#FFFFFF" />

        <!-- Falling Giant Meatballs! -->
        <circle cx="-110" cy="120" r="32" fill="#78350F" />
        <circle cx="-115" cy="115" r="4" fill="#92400E" />
        <circle cx="100" cy="150" r="36" fill="#78350F" />
        <circle cx="0" cy="180" r="45" fill="#92400E" />

        <!-- Spaghetti Swirl Lines -->
        <path d="M -80 60 Q -60 140 -90 220" stroke="#FDE047" stroke-width="6" fill="none" stroke-linecap="round" />
        <path d="M 60 60 Q 40 160 80 240" stroke="#FDE047" stroke-width="6" fill="none" stroke-linecap="round" />
        <path d="M 0 60 Q 30 120 -20 230" stroke="#FDE047" stroke-width="7" fill="none" stroke-linecap="round" />
      </g>

      <!-- Flint Lockwood with FLDSMDFR Controller -->
      <g transform="translate(300, 420)">
        <!-- White Lab Coat -->
        <rect x="-35" y="20" width="70" height="80" rx="16" fill="#FFFFFF" />
        <!-- Head with Crazy Wild Hair -->
        <circle cx="0" cy="-20" r="35" fill="#FED7AA" />
        <path d="M -35 -30 Q -40 -70 -10 -60 Q 0 -75 20 -60 Q 40 -65 35 -25 Z" fill="#451A03" />
        <!-- Big Round Nose and Safety Goggles -->
        <circle cx="0" cy="-18" r="10" fill="#F87171" />
        <circle cx="-14" cy="-25" r="10" stroke="#18181B" stroke-width="3" fill="#67E8F9" opacity="0.8" />
        <circle cx="14" cy="-25" r="10" stroke="#18181B" stroke-width="3" fill="#67E8F9" opacity="0.8" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="-12" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="44" text-anchor="middle" letter-spacing="2">CLOUDY WITH A CHANCE</text>
        <text x="0" y="24" fill="#FDE047" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="48" text-anchor="middle" letter-spacing="3">OF MEATBALLS</text>
        <text x="0" y="52" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Flint Lockwood • Sam Sparks • Sony Pictures</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">DELICIOUS FAMILY COMEDY</text>
      </g>
    </svg>
  `),

  // 16. Sing
  sing: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="singBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E1B4B" />
          <stop offset="50%" stop-color="#4C1D95" />
          <stop offset="100%" stop-color="#18181B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#singBg)" />

      <!-- Stage Spotlights crossing -->
      <polygon points="100,0 20,550 280,550" fill="#FDE047" opacity="0.25" />
      <polygon points="500,0 320,550 580,550" fill="#EC4899" opacity="0.25" />

      <!-- Neon Broadway Marquee Bulbs Arch -->
      <path d="M 80 260 Q 300 120 520 260" stroke="#FBBF24" stroke-width="4" fill="none" stroke-dasharray="16 16" />

      <!-- Buster Moon the Koala in Red Bowtie & Blue Suit -->
      <g transform="translate(300, 340)">
        <!-- Big Fluffy Koala Ears -->
        <circle cx="-55" cy="-40" r="32" fill="#9CA3AF" />
        <circle cx="-55" cy="-40" r="20" fill="#FBCFE8" />
        <circle cx="55" cy="-40" r="32" fill="#9CA3AF" />
        <circle cx="55" cy="-40" r="20" fill="#FBCFE8" />
        <!-- Head -->
        <circle cx="0" cy="-25" r="45" fill="#D1D5DB" />
        <!-- Big Black Koala Nose -->
        <ellipse cx="0" cy="-18" rx="18" ry="24" fill="#18181B" />
        <!-- Cheerful Smile -->
        <path d="M -18 8 Q 0 24 18 8" stroke="#18181B" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Little Eyes -->
        <circle cx="-22" cy="-30" r="6" fill="#18181B" />
        <circle cx="22" cy="-30" r="6" fill="#18181B" />
        <!-- Dapper Blue Suit & Red Bowtie -->
        <rect x="-35" y="20" width="70" height="90" rx="16" fill="#2563EB" />
        <!-- Red Bowtie -->
        <polygon points="-16,24 -2,32 -16,40" fill="#DC2626" />
        <polygon points="16,24 2,32 16,40" fill="#DC2626" />
        <circle cx="0" cy="32" r="5" fill="#B91C1C" />

        <!-- Vintage Silver Microphone on Stand -->
        <ellipse cx="0" cy="130" rx="16" ry="24" fill="#94A3B8" stroke="#E2E8F0" stroke-width="3" />
        <line x1="0" y1="154" x2="0" y2="200" stroke="#E2E8F0" stroke-width="5" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="76" text-anchor="middle" letter-spacing="8">SING</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">DON'T LET FEAR STOP YOU</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Buster Moon • Rosita • Johnny • Ash • Meena</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">ILLUMINATION MUSICAL SMASH</text>
      </g>
    </svg>
  `),

  // 17. Bolt
  bolt: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="boltBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E3A8A" />
          <stop offset="50%" stop-color="#2563EB" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#boltBg)" />

      <!-- Giant Yellow Lightning Bolt Graphic across background -->
      <polygon points="360,60 220,320 290,320 200,560 380,260 300,260" fill="#FACC15" opacity="0.9" />

      <!-- White German Shepherd Dog (Bolt) Hero Silhouette -->
      <g transform="translate(300, 360)">
        <!-- Pricked Dog Ears -->
        <polygon points="-40,-50 -55,-130 -15,-60" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
        <polygon points="-45,-60 -50,-115 -22,-65" fill="#FBCFE8" />
        <polygon points="15,-60 55,-130 40,-50" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
        <polygon points="22,-65 50,-115 45,-60" fill="#FBCFE8" />
        <!-- Head -->
        <circle cx="0" cy="-30" r="50" fill="#FFFFFF" />
        <!-- Black Dog Nose -->
        <polygon points="-12,-15 12,-15 0,-2" fill="#18181B" />
        <!-- Determined Hero Eyes -->
        <circle cx="-20" cy="-35" r="8" fill="#78350F" />
        <circle cx="20" cy="-35" r="8" fill="#78350F" />
        <circle cx="-18" cy="-37" r="3" fill="#FFFFFF" />
        <circle cx="22" cy="-37" r="3" fill="#FFFFFF" />
        <!-- Red Collar with Gold Lightning Tag -->
        <rect x="-42" y="15" width="84" height="18" rx="8" fill="#DC2626" />
        <circle cx="0" cy="38" r="12" fill="#F59E0B" />
        <polygon points="0,30 -3,38 2,38 -1,46" fill="#FFFFFF" />
        <!-- White Chest with Lightning Tattoo -->
        <ellipse cx="0" cy="80" rx="60" ry="50" fill="#FFFFFF" />
        <polygon points="10,65 0,85 8,85 -2,105 15,80 7,80" fill="#18181B" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="72" text-anchor="middle" letter-spacing="6">BOLT</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">FULLY AWESOME • CANINE HERO</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Bolt • Mittens the Cat • Rhino the Hamster</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">DISNEY SUPER-ACTION HERO</text>
      </g>
    </svg>
  `),

  // 18. Home
  home: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="homeBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4C1D95" />
          <stop offset="50%" stop-color="#7C3AED" />
          <stop offset="100%" stop-color="#1E1B4B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#homeBg)" />

      <!-- Glowing Alien Bubble Orbs -->
      <circle cx="120" cy="180" r="40" fill="#C084FC" opacity="0.4" />
      <circle cx="480" cy="220" r="55" fill="#F472B6" opacity="0.4" />
      <circle cx="300" cy="130" r="30" fill="#38BDF8" opacity="0.4" />

      <!-- Oh the Boov Alien (Purple with Curly Tentacle Feet & Huge Eyes) -->
      <g transform="translate(300, 350)">
        <!-- Boov Head with Snail-like Antennae Ears -->
        <circle cx="-35" cy="-80" r="16" fill="#A855F7" />
        <circle cx="35" cy="-80" r="16" fill="#A855F7" />
        <ellipse cx="0" cy="-30" rx="75" ry="60" fill="#C084FC" />
        <!-- Big Round Anime-like Eyes -->
        <circle cx="-25" cy="-35" r="22" fill="#FFFFFF" />
        <circle cx="25" cy="-35" r="22" fill="#FFFFFF" />
        <circle cx="-22" cy="-35" r="12" fill="#7E22CE" />
        <circle cx="28" cy="-35" r="12" fill="#7E22CE" />
        <circle cx="-18" cy="-38" r="4" fill="#FFFFFF" />
        <circle cx="32" cy="-38" r="4" fill="#FFFFFF" />
        <!-- Cute Little Smile -->
        <path d="M -15 -8 Q 0 8 15 -8" stroke="#581C87" stroke-width="4" fill="none" stroke-linecap="round" />
        <!-- Pear-shaped Boov Body in Yellow/Orange Vest -->
        <ellipse cx="0" cy="65" rx="60" ry="50" fill="#C084FC" />
        <rect x="-35" y="35" width="70" height="55" rx="14" fill="#FACC15" />
        <!-- 6 cute tentacle feet -->
        <circle cx="-40" cy="120" r="12" fill="#A855F7" />
        <circle cx="-24" cy="124" r="12" fill="#A855F7" />
        <circle cx="-8" cy="125" r="12" fill="#A855F7" />
        <circle cx="8" cy="125" r="12" fill="#A855F7" />
        <circle cx="24" cy="124" r="12" fill="#A855F7" />
        <circle cx="40" cy="120" r="12" fill="#A855F7" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="76" text-anchor="middle" letter-spacing="8">HOME</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">YOU CAN'T BLEND OUT</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Oh the Boov • Tip &amp; Pig the Cat • DreamWorks</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">INTERGALACTIC HEARTWARMING FUN</text>
      </g>
    </svg>
  `),

  // 19. Coco
  coco: createPosterDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">
      <defs>
        <linearGradient id="cocoBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#311042" />
          <stop offset="45%" stop-color="#581C87" />
          <stop offset="85%" stop-color="#C2410C" />
          <stop offset="100%" stop-color="#18181B" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#cocoBg)" />

      <!-- Glowing Bridge of Golden Cempasúchil (Marigold) Petals -->
      <ellipse cx="300" cy="450" rx="260" ry="80" fill="#F59E0B" opacity="0.4" />
      <g fill="#FBBF24" opacity="0.8">
        <circle cx="120" cy="430" r="6" />
        <circle cx="160" cy="450" r="5" />
        <circle cx="220" cy="425" r="7" />
        <circle cx="280" cy="445" r="8" />
        <circle cx="340" cy="435" r="6" />
        <circle cx="410" cy="450" r="7" />
        <circle cx="470" cy="430" r="5" />
      </g>

      <!-- Celebratory Calavera (Sugar Skull) Guitar Emblem -->
      <g transform="translate(300, 270)">
        <!-- Skull Silhouette with Floral Eyes -->
        <circle cx="0" cy="-35" r="65" fill="#FFFFFF" />
        <rect x="-35" y="0" width="70" height="40" rx="10" fill="#FFFFFF" />
        <!-- Big Sugar Skull Eyes with Petals -->
        <circle cx="-25" cy="-30" r="18" fill="#18181B" />
        <circle cx="25" cy="-30" r="18" fill="#18181B" />
        <circle cx="-25" cy="-30" r="10" fill="#EC4899" />
        <circle cx="25" cy="-30" r="10" fill="#06B6D4" />
        <!-- Inverted Heart Nose -->
        <polygon points="-8,-5 8,-5 0,-18" fill="#18181B" />
        <!-- Stitched Skeleton Teeth Smile -->
        <line x1="-25" y1="20" x2="25" y2="20" stroke="#18181B" stroke-width="4" />
        <line x1="-18" y1="12" x2="-18" y2="28" stroke="#18181B" stroke-width="3" />
        <line x1="-6" y1="12" x2="-6" y2="28" stroke="#18181B" stroke-width="3" />
        <line x1="6" y1="12" x2="6" y2="28" stroke="#18181B" stroke-width="3" />
        <line x1="18" y1="12" x2="18" y2="28" stroke="#18181B" stroke-width="3" />

        <!-- White Ornate Acoustic Guitar of Ernesto de la Cruz -->
        <g transform="translate(0, 110)">
          <path d="M -45 0 Q -55 50 -20 65 Q 0 70 20 65 Q 55 50 45 0 Q 30 -30 0 -25 Q -30 -30 -45 0 Z" fill="#F8FAFC" stroke="#CA8A04" stroke-width="3" />
          <circle cx="0" cy="18" r="16" fill="#18181B" />
          <!-- Guitar strings -->
          <line x1="0" y1="-80" x2="0" y2="55" stroke="#CA8A04" stroke-width="2" />
        </g>
      </g>

      <!-- Papel Picado Flags Top -->
      <g fill="#F43F5E">
        <polygon points="40,20 90,20 90,55 65,40 40,55" />
        <polygon points="100,20 150,20 150,55 125,40 100,55" fill="#38BDF8" />
        <polygon points="450,20 500,20 500,55 475,40 450,55" fill="#FACC15" />
        <polygon points="510,20 560,20 560,55 535,40 510,55" fill="#10B981" />
      </g>

      <!-- Movie Title Typography -->
      <g transform="translate(300, 605)">
        <text x="0" y="0" fill="#FFA175" font-family="system-ui, Impact, sans-serif" font-weight="900" font-size="74" text-anchor="middle" letter-spacing="8">COCO</text>
        <text x="0" y="32" fill="#FDE047" font-family="system-ui, sans-serif" font-weight="800" font-size="16" text-anchor="middle" letter-spacing="5">REMEMBER ME • MUSIC IN OUR HEARTS</text>
        <text x="0" y="58" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="500" font-size="13" text-anchor="middle">Miguel • Héctor • Mamá Imelda • Pixar</text>
      </g>

      <!-- Footer Badge -->
      <g transform="translate(300, 740)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#FFA175" />
        <text x="0" y="5" fill="#2E083B" font-family="system-ui, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">ACADEMY AWARD WINNING MASTERPIECE</text>
      </g>
    </svg>
  `),
};

export function getMoviePoster(key: keyof typeof POSTERS | string, fallbackUrl?: string): string {
  if (POSTERS[key]) {
    return POSTERS[key];
  }
  return fallbackUrl || '/src/assets/images/kito_toons_hero_1793709114340.jpg';
}
