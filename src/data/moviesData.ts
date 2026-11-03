import { Movie } from '../types';

export const MOVIES_DATABASE: Movie[] = [
  {
    id: 'kito-sky-quest',
    title: "Kito's Sky Quest: Beyond the Clouds",
    description: "Captain Kito the brave lion cub guides his enchanted flying airship across floating sky islands to awaken the Sun Crystal.",
    synopsis: "Captain Kito the brave lion cub charts an enchanted flying airship over the floating sky islands in search of the legendary Sun Crystal that powers all animated imagination. Along with Stella the winged light sprite, Kito faces whimsical windstorms, friendly cloud giants, and flying mechanical wonders in a heartwarming story of courage and teamwork.",
    category: 'Family',
    duration: '1h 28m',
    releaseYear: 2026,
    rating: 'G',
    posterUrl: '/src/assets/images/kito_toons_hero_1793709114340.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    isFeatured: true,
    isPopular: true,
    isRecentlyAdded: true,
    director: 'Kitooke & Animation Guild',
    funFact: "Kito's goggles were modeled after vintage aeronautical brass glasses from 1920s airmail scouts!",
    characters: [
      { name: 'Captain Kito', role: 'The Brave Adventurer Lion' },
      { name: 'Stella', role: 'The Luminous Winged Sprite' },
      { name: 'Barnaby', role: 'Airship Chief Engineer' }
    ]
  },
  {
    id: 'forest-of-whispers',
    title: 'Forest of Whispers',
    description: 'A clever fox with a brass compass and an inquisitive owl journey to rekindle the ancient starlight of the enchanted woods.',
    synopsis: "Deep in an ancient glowing woodland, Finnegan the red fox and Professor Hoot discover that the sacred starlight is dimming. Guided by Lumina, a glowing starlight deer, the duo crosses mystical mossy bridges, solves riddles whispered by giant sentient oaks, and learns that even the smallest creature can shine bright in the dark.",
    category: 'Fantasy',
    duration: '1h 34m',
    releaseYear: 2025,
    rating: 'PG',
    posterUrl: '/src/assets/images/forest_whispers_poster_1793709096762.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    isFeatured: true,
    isPopular: true,
    director: 'Amara Vance',
    funFact: 'Over 12,000 individually painted fireflies were rendered to illuminate the enchanted bridge scene.',
    characters: [
      { name: 'Finnegan', role: 'Curious Fox Explorer' },
      { name: 'Professor Hoot', role: 'Spectacled Scholar Owl' },
      { name: 'Lumina', role: 'Celestial Spirit Deer' }
    ]
  },
  {
    id: 'robo-squad-gizmo-gang',
    title: 'Robo-Squad & The Gizmo Gang',
    description: 'An inventive girl and her lovable eccentric robot squad team up to save Neo-Clockwork from anti-gravity mayhem.',
    synopsis: "When a runaway magnetic pulse causes city rails to loop into sky rollercoasters, young engineer Maya rallies her homemade robotic crew: Bolt the heavy-lifting tread bot, Ratchet the springy acrobat, and Sparky the propeller drone. Together they pull off thrilling stunts and slapstick rescues to save their colorful cyber metropolis.",
    category: 'Action',
    duration: '1h 22m',
    releaseYear: 2025,
    rating: 'PG',
    posterUrl: '/src/assets/images/robo_squad_poster_1793709097375.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    isFeatured: true,
    isPopular: true,
    isRecentlyAdded: true,
    director: 'Marcus Sterling',
    funFact: 'Sparky the helicopter drone communicates entirely through playful synthesizer beeps and whistle tones.',
    characters: [
      { name: 'Maya Gizmo', role: 'Master Tinkerer' },
      { name: 'Bolt', role: 'Tread-Wheel Gentle Giant' },
      { name: 'Sparky', role: 'Spitfire Propeller Drone' }
    ]
  },
  {
    id: 'tiny-dino-safari',
    title: 'Tiny Dino Safari',
    description: 'Two adorable baby dinosaurs splash through tropical lagoons and discover the joy of sharing and discovery.',
    synopsis: "Rexy the bouncy orange toddler T-Rex and Trixie the cheerful green triceratops spend their sunny mornings splashing in crystalline jungle waters, collecting fruit with tropical butterflies, and playing hide-and-seek among colossal fern canopies. A heartwarming, vibrant delight crafted specifically for younger viewers and families.",
    category: 'Kids Animation',
    duration: '48m',
    releaseYear: 2025,
    rating: 'G',
    posterUrl: '/src/assets/images/dino_safari_poster_1793709097173.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    isPopular: true,
    isRecentlyAdded: true,
    director: 'Elena Chen',
    funFact: 'The cheerful dinosaur giggles were recorded by children playing at a Montessori nature school!',
    characters: [
      { name: 'Rexy', role: 'Playful Baby T-Rex' },
      { name: 'Trixie', role: 'Giggling Triceratops' },
      { name: 'Flutter', role: 'Rainbow Butterfly Guide' }
    ]
  },
  {
    id: 'cosmic-cadets',
    title: 'Cosmic Cadets: Starlight Pals',
    description: 'Young astronaut Leo and a cuddly glowing alien pet navigate shimmering asteroid belts on a heartfelt rescue voyage.',
    synopsis: "Cadet Leo always dreamed of venturing beyond Saturn's rings. When he rescues Pip, an orphaned alien ball of fur with anti-gravity sneezes, the unlikely duo embarks on a whimsical journey through swirling nebulae and planetary swings, proving that kindness transcends galaxies.",
    category: 'Adventure',
    duration: '1h 30m',
    releaseYear: 2026,
    rating: 'G',
    posterUrl: '/src/assets/images/cosmic_cadets_poster_1793709132439.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    isFeatured: true,
    isRecentlyAdded: true,
    director: 'David O. Fletcher',
    funFact: "Pip the alien's fur glows a gentle cyan when happy and sparkles with golden stars when laughing.",
    characters: [
      { name: 'Cadet Leo', role: 'Junior Starlight Pilot' },
      { name: 'Pip', role: 'Cosmic Fur-Pet' },
      { name: 'EVA', role: 'Friendly Ship Computer' }
    ]
  },
  {
    id: 'dragons-little-bakery',
    title: "The Dragon's Little Bakery",
    description: 'A gentle purple dragon dreams of baking towering sweet cupcakes instead of terrifying knights.',
    synopsis: "Barnaby is not your typical dragon. While his ancestors guarded treasure hoards and breathed fire, Barnaby uses his gentle warmth to bake fluffy vanilla sponge cakes and rainbow macarons. When the kingdom hosts the Annual Grand Bake-Off, Barnaby sets out with pastry chef Clementine to prove that baking brings everyone together.",
    category: 'Comedy',
    duration: '1h 18m',
    releaseYear: 2025,
    rating: 'G',
    posterUrl: '/src/assets/images/dragon_bakery_poster_1793709149069.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    isFeatured: true,
    isPopular: true,
    director: 'Sophie Dubois',
    funFact: 'Over 200 virtual cupcake recipes were designed by the animation culinary department.',
    characters: [
      { name: 'Barnaby', role: 'Master Baker Dragon' },
      { name: 'Clementine', role: 'Royal Pastry Apprentice' },
      { name: 'Sir Buttercrust', role: 'The Grumpy Bakery Critic' }
    ]
  },
  {
    id: 'numbers-shapes-toytown',
    title: 'Numbers & Shapes in Toytown',
    description: 'Sing-along animated musical where toy blocks, trains, and clockwork friends teach mathematics and colors.',
    synopsis: "Step into Toytown, where vibrant building blocks stack themselves into castles and numbers come to life in catchy musical numbers. Children learn counting, spatial reasoning, and colors alongside friendly conductor Toby and Penelope the polygon painter.",
    category: 'Educational Cartoons',
    duration: '52m',
    releaseYear: 2025,
    rating: 'G',
    posterUrl: '/src/assets/images/dino_safari_poster_1793709097173.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    isRecentlyAdded: true,
    director: 'Arthur Pendelton',
    funFact: 'Features 8 original educational sing-alongs written by certified childhood learning specialists.',
    characters: [
      { name: 'Toby the Train', role: 'The Counting Conductor' },
      { name: 'Penelope', role: 'The Shape Sorcerer' }
    ]
  },
  {
    id: 'llama-drama-adventure',
    title: 'Caminandes: Highland Hoppers',
    description: 'A hilarious high-altitude comedy following a determined llama attempting to cross the grand desert highway.',
    synopsis: "Koro the comical and stubborn Patagonian llama discovers that crossing an asphalt highway isn't as simple as it looks. Packed with physical slapstick comedy, cartoon timing, and endless laughs as Koro battles traffic barriers, tumbleweeds, and desert critters.",
    category: 'Comedy',
    duration: '42m',
    releaseYear: 2024,
    rating: 'G',
    posterUrl: '/src/assets/images/robo_squad_poster_1793709097375.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    isPopular: true,
    director: 'Pablo Vazquez',
    funFact: 'Inspired by classic Warner Bros Road Runner and Coyote cartoon physics.',
    characters: [
      { name: 'Koro', role: 'The Determined Llama' },
      { name: 'Armadillo Armando', role: 'The Highway Spectator' }
    ]
  }
];

export const CATEGORIES_LIST = [
  'All',
  'Adventure',
  'Comedy',
  'Fantasy',
  'Action',
  'Family',
  'Educational Cartoons',
  'Kids Animation',
] as const;
