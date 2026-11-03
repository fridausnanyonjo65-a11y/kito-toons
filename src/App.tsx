/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MOVIES_DATABASE } from './data/moviesData';
import { Movie, ActiveTab, MovieCategory } from './types';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MovieCard } from './components/MovieCard';
import { CategoryFilter } from './components/CategoryFilter';
import { WatchView } from './views/WatchView';
import { DashboardView } from './views/DashboardView';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { PolicyModal } from './components/PolicyModal';
import {
  Sparkles,
  Flame,
  Clock,
  Film,
  Search,
  SlidersHorizontal,
  Compass,
  ArrowRight,
} from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentUser } = useAuth();

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedMovieForWatch, setSelectedMovieForWatch] = useState<Movie | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  // Spotlight movie for hero
  const featuredHeroMovie = useMemo(() => {
    return MOVIES_DATABASE.find((m) => m.id === 'kito-sky-quest') || MOVIES_DATABASE[0];
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: MOVIES_DATABASE.length };
    MOVIES_DATABASE.forEach((m) => {
      counts[m.category] = (counts[m.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered movies based on category and search query
  const filteredMovies = useMemo(() => {
    return MOVIES_DATABASE.filter((m) => {
      const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.characters?.some((c) => c.name.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Specific lists
  const popularMovies = useMemo(() => {
    return MOVIES_DATABASE.filter((m) => m.isPopular);
  }, []);

  const recentlyAddedMovies = useMemo(() => {
    return MOVIES_DATABASE.filter((m) => m.isRecentlyAdded);
  }, []);

  const featuredMovies = useMemo(() => {
    return MOVIES_DATABASE.filter((m) => m.isFeatured);
  }, []);

  const handleStartWatch = (movie: Movie) => {
    setSelectedMovieForWatch(movie);
    setActiveTab('watch');
  };

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#2E083B] text-[#FFF3E9] flex flex-col relative selection:bg-[#FFA175] selection:text-[#2E083B]">
      {/* Animated Cartoon Background with floating bubbles, drifting clouds & stars */}
      <AnimatedBackground />

      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'watch') {
            setSelectedMovieForWatch(null);
          }
        }}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Body Switcher */}
      <main className="flex-1 relative z-10">
        {/* Dedicated Movie Watching Page */}
        {activeTab === 'watch' && selectedMovieForWatch && (
          <WatchView
            movie={selectedMovieForWatch}
            allMovies={MOVIES_DATABASE}
            onBack={() => {
              setActiveTab('home');
              setSelectedMovieForWatch(null);
            }}
            onSelectMovie={(movie) => setSelectedMovieForWatch(movie)}
            onOpenAuthRequired={() => handleOpenAuth('signin')}
          />
        )}

        {/* User Dashboard */}
        {activeTab === 'dashboard' && (
          <DashboardView
            allMovies={MOVIES_DATABASE}
            onWatchMovie={handleStartWatch}
            onExploreMovies={() => {
              setActiveTab('movies');
              setSelectedCategory('All');
            }}
          />
        )}

        {/* Full Movies Catalog View */}
        {activeTab === 'movies' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23052D] border border-[#FFA175]/40 text-xs font-bold text-[#FFA175]">
                <Film className="w-3.5 h-3.5" />
                <span>ALL ANIMATION MOVIES & CARTOONS</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-black text-[#FFF3E9]">
                Animation Movies Library
              </h1>
              <p className="text-sm text-[#FFF3E9]/80 max-w-xl">
                Explore our full library of vibrant cartoons, 3D animated films, and educational shorts.
              </p>
            </div>

            {/* Search and Category Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#FFA175]/70 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search cartoons by title, character, or director..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#23052D] border border-[#FFA175]/30 focus:border-[#FFA175] text-xs sm:text-sm text-[#FFF3E9] placeholder-[#FFF3E9]/40 outline-none"
                />
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-[#FFA175] text-[#FFA175] hover:text-[#2A0201] border border-[#FFA175]/60 text-xs font-bold transition-all cursor-pointer shadow"
                >
                  Clear Search
                </button>
              )}
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />

            {/* Movies Grid */}
            {filteredMovies.length === 0 ? (
              <div className="p-16 text-center rounded-3xl bg-[#23052D]/80 border border-[#FFA175]/30 space-y-3">
                <Film className="w-12 h-12 text-[#FFA175]/50 mx-auto" />
                <h3 className="font-display font-black text-lg text-[#FFF3E9]">No Cartoons Found</h3>
                <p className="text-xs text-[#FFF3E9]/70 max-w-sm mx-auto">
                  Try adjusting your search terms or picking another animation category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl font-black text-xs text-[#2A0201] bg-[#FFA175] hover:bg-[#ff8e5b] shadow-lg shadow-[#FFA175]/25 cursor-pointer"
                >
                  Show All Movies
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onWatch={handleStartWatch}
                    onOpenAuthRequired={() => handleOpenAuth('signin')}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Categories Dedicated View */}
        {activeTab === 'categories' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23052D] border border-[#FFA175]/40 text-xs font-bold text-[#FFA175]">
                <Compass className="w-3.5 h-3.5" />
                <span>EXPLORE BY GENRE</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-black text-[#FFF3E9]">
                Cartoon & Movie Categories
              </h1>
              <p className="text-sm text-[#FFF3E9]/80 max-w-xl">
                Find exactly what your family loves—from side-splitting comedies to mythical fantasies.
              </p>
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onWatch={handleStartWatch}
                  onOpenAuthRequired={() => handleOpenAuth('signin')}
                />
              ))}
            </div>
          </div>
        )}

        {/* About Us View */}
        {activeTab === 'about' && <AboutSection />}

        {/* Contact View */}
        {activeTab === 'contact' && <ContactSection />}

        {/* Homepage View (Default landing experience) */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              featuredMovie={featuredHeroMovie}
              onWatchNow={handleStartWatch}
              onExplore={() => {
                setActiveTab('movies');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Quick Filter Ribbon on Homepage */}
            <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="p-4 rounded-3xl bg-[#23052D]/90 border-2 border-[#FFA175]/35 shadow-xl">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    const el = document.getElementById('featured-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  categoryCounts={categoryCounts}
                />
              </div>
            </section>

            {/* Featured Animated Movies Section */}
            <section id="featured-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFA175]">
                    <Sparkles className="w-4 h-4" />
                    <span>HANDPICKED FOR YOU</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-[#FFF3E9]">
                    Featured Animated Movies
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('movies');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#FFA175] hover:text-[#FFF3E9] transition-colors cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {(selectedCategory === 'All' ? featuredMovies : filteredMovies).slice(0, 4).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onWatch={handleStartWatch}
                    onOpenAuthRequired={() => handleOpenAuth('signin')}
                  />
                ))}
              </div>
            </section>

            {/* Popular Cartoons Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFA175]">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>FAN FAVORITES</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-[#FFF3E9]">
                    Popular Cartoons
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('movies');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#FFA175] hover:text-[#FFF3E9] transition-colors cursor-pointer"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularMovies.slice(0, 4).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onWatch={handleStartWatch}
                    onOpenAuthRequired={() => handleOpenAuth('signin')}
                  />
                ))}
              </div>
            </section>

            {/* Recently Added Movies Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFA175]">
                    <Clock className="w-4 h-4 text-[#FFA175]" />
                    <span>FRESH RELEASES</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-[#FFF3E9]">
                    Recently Added Movies
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('movies');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#FFA175] hover:text-[#FFF3E9] transition-colors cursor-pointer"
                >
                  <span>Browse Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recentlyAddedMovies.slice(0, 4).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onWatch={handleStartWatch}
                    onOpenAuthRequired={() => handleOpenAuth('signin')}
                  />
                ))}
              </div>
            </section>

            {/* Integrated About Us Teaser on Homepage */}
            <AboutSection />

            {/* Integrated Contact Section on Homepage */}
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={() => {
          setAuthModalOpen(false);
        }}
      />

      {/* Privacy Policy & Terms Modal */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
