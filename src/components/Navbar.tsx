import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { useAuth } from '../context/AuthContext';
import { Film, User, LogOut, Bookmark, Play, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onSelectMovieForWatch?: (movieId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAuth,
}) => {
  const { currentUser, userProfile, logOut } = useAuth();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      setProfileDropdownOpen(false);
      setActiveTab('home');
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2E083B]/95 backdrop-blur-md border-b border-[#FFA175]/20 text-[#FFF3E9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Mascot */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA175]"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#190222] to-[#3B0E4C] border-2 border-[#FFA175] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/src/assets/images/kito_mascot_avatar_1793709129479.jpg"
                alt="Kito Mascot"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFA175] rounded-full animate-ping opacity-60" />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#FFF3E9] group-hover:text-[#FFA175] transition-colors whitespace-nowrap">
                KITO'S <span className="text-[#FFA175]">TOONS</span>
              </span>
              <p className="text-[10px] text-[#FFA175]/80 font-medium tracking-wider uppercase hidden sm:block">
                Animation World
              </p>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Nav Links (4-5 single line links) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#FFF3E9]/85">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer border-b-2 ${
              activeTab === 'home'
                ? 'text-[#FFA175] border-[#FFA175]'
                : 'border-transparent hover:text-[#FFA175] hover:border-[#FFA175]/50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('movies')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer border-b-2 ${
              activeTab === 'movies'
                ? 'text-[#FFA175] border-[#FFA175]'
                : 'border-transparent hover:text-[#FFA175] hover:border-[#FFA175]/50'
            }`}
          >
            Movies
          </button>
          <button
            onClick={() => handleNavClick('categories')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer border-b-2 ${
              activeTab === 'categories'
                ? 'text-[#FFA175] border-[#FFA175]'
                : 'border-transparent hover:text-[#FFA175] hover:border-[#FFA175]/50'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer border-b-2 ${
              activeTab === 'about'
                ? 'text-[#FFA175] border-[#FFA175]'
                : 'border-transparent hover:text-[#FFA175] hover:border-[#FFA175]/50'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`whitespace-nowrap transition-colors py-1 cursor-pointer border-b-2 ${
              activeTab === 'contact'
                ? 'text-[#FFA175] border-[#FFA175]'
                : 'border-transparent hover:text-[#FFA175] hover:border-[#FFA175]/50'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action / User Profile */}
        <div className="flex items-center gap-3 shrink-0">
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#FFA175]/60 hover:border-[#FFA175] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FFA175]"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#FFA175] bg-[#FFA175]/20 flex items-center justify-center text-xs font-bold text-[#FFA175]">
                  {userProfile?.photoURL ? (
                    <img
                      src={userProfile.photoURL}
                      alt={userProfile.displayName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    userProfile?.displayName?.charAt(0) || 'U'
                  )}
                </div>
                <span className="text-xs font-semibold text-[#FFF3E9] max-w-[120px] truncate hidden sm:inline">
                  {userProfile?.displayName || 'My Toon'}
                </span>
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#190222] border-2 border-[#FFA175]/40 shadow-2xl p-2 z-50 text-sm animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#FFA175]/15 mb-1">
                    <p className="text-xs font-bold text-[#FFA175] truncate">
                      {userProfile?.displayName || 'Animation Fan'}
                    </p>
                    <p className="text-[11px] text-[#FFF3E9]/60 truncate">
                      {currentUser.email}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      handleNavClick('dashboard');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-bold text-[#FFF3E9] hover:bg-[#FFA175] hover:text-[#2A0201] transition-colors cursor-pointer"
                  >
                    <User className="w-4 h-4 text-[#FFA175] group-hover:text-[#2A0201]" />
                    <span>My Dashboard & Favorites</span>
                  </button>

                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      handleNavClick('movies');
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-bold text-[#FFF3E9] hover:bg-[#FFA175] hover:text-[#2A0201] transition-colors cursor-pointer"
                  >
                    <Film className="w-4 h-4 text-[#FFA175]" />
                    <span>Browse Animation</span>
                  </button>

                  <div className="border-t border-[#FFA175]/15 my-1" />

                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-xs font-medium text-red-300 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => onOpenAuth('signin')}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-bold text-[#FFF3E9] hover:text-[#FFA175] transition-colors cursor-pointer whitespace-nowrap group"
              >
                <span className="text-sm group-hover:scale-125 transition-transform" title="SpongeBob will bring the form!">🧽</span>
                <span>Sign In</span>
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-4 sm:px-5 py-2 text-xs font-black text-[#2A0201] bg-[#FFA175] hover:bg-[#ff8e5b] rounded-xl shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#FFF3E9] hover:text-[#FFA175] hover:bg-white/10 focus-visible:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#23052D] border-b border-[#FFA175]/30 px-6 py-4 flex flex-col gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'home' ? 'text-[#FFA175]' : 'text-[#FFF3E9]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('movies')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'movies' ? 'text-[#FFA175]' : 'text-[#FFF3E9]'
            }`}
          >
            Movies
          </button>
          <button
            onClick={() => handleNavClick('categories')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'categories' ? 'text-[#FFA175]' : 'text-[#FFF3E9]'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'about' ? 'text-[#FFA175]' : 'text-[#FFF3E9]'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'contact' ? 'text-[#FFA175]' : 'text-[#FFF3E9]'
            }`}
          >
            Contact
          </button>
          {currentUser && (
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`text-left py-2 text-sm font-semibold ${
                activeTab === 'dashboard' ? 'text-[#FFA175]' : 'text-[#FFF3E9]'
              }`}
            >
              My Dashboard & Favorites
            </button>
          )}
        </div>
      )}
    </header>
  );
};
