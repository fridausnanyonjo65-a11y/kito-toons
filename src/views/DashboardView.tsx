import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Movie } from '../types';
import {
  User,
  Heart,
  Clock,
  Edit3,
  LogOut,
  Play,
  Film,
  Sparkles,
  Check,
  Trash2,
  Bookmark,
} from 'lucide-react';

interface DashboardViewProps {
  allMovies: Movie[];
  onWatchMovie: (movie: Movie) => void;
  onExploreMovies: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  allMovies,
  onWatchMovie,
  onExploreMovies,
}) => {
  const {
    currentUser,
    userProfile,
    favorites,
    watchHistory,
    updateUserProfileData,
    logOut,
    toggleFavorite,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'favorites' | 'history'>('favorites');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [bio, setBio] = useState(userProfile?.bio || '');
  const [favoriteCategory, setFavoriteCategory] = useState(userProfile?.favoriteCategory || 'Adventure');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#3E0401] border-2 border-[#FFA175] flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-[#FFA175]" />
        </div>
        <h2 className="font-display text-2xl font-bold text-[#FFF3E9]">Sign In to View Dashboard</h2>
        <p className="text-sm text-[#FFF3E9]/70 mt-2 max-w-md mx-auto">
          Create an account or sign in to save your favorite animation films and track your watch history!
        </p>
      </div>
    );
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      await updateUserProfileData({
        displayName: displayName.trim(),
        bio: bio.trim(),
        favoriteCategory,
      });
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setIsEditingProfile(false);
      }, 1200);
    } catch (err) {
      console.error('Failed to update profile:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const getFullMovie = (movieId: string): Movie | undefined => {
    return allMovies.find((m) => m.id === movieId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* User Profile Header Card */}
      <div className="rounded-3xl bg-[#3E0401] border-2 border-[#FFA175]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Soft decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFA175]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-3 border-[#FFA175] bg-[#5C0702] shadow-xl">
              <img
                src={userProfile?.photoURL || '/src/assets/images/kito_mascot_avatar_1793709129479.jpg'}
                alt={userProfile?.displayName || 'User'}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#FFA175] text-[#5C0702] text-[10px] font-black uppercase tracking-wider shadow">
              Explorer
            </span>
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-black text-[#FFF3E9]">
                  {userProfile?.displayName || 'Cartoon Fan'}
                </h1>
                <p className="text-xs text-[#FFA175] font-semibold">{currentUser.email}</p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-center md:justify-end gap-2.5">
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#5C0702] border border-[#FFA175]/40 hover:border-[#FFA175] text-xs font-bold text-[#FFA175] transition-all cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditingProfile ? 'Cancel' : 'Edit Profile'}</span>
                </button>

                <button
                  onClick={logOut}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-950/60 border border-red-500/40 hover:border-red-400 text-xs font-bold text-red-200 transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            <p className="text-sm text-[#FFF3E9]/85 max-w-2xl leading-relaxed pt-1">
              {userProfile?.bio || 'Animation movie fanatic & cartoon enthusiast exploring Kito’s Toons!'}
            </p>

            {/* User Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-[#FFF3E9]/70 font-medium">
              <div className="flex items-center gap-1.5 text-[#FFA175]">
                <Sparkles className="w-4 h-4" />
                <span>Fav Genre: {userProfile?.favoriteCategory || 'Adventure'}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#FFA175]" />
                <span>{favorites.length} Saved Movies</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FFA175]" />
                <span>{watchHistory.length} Recently Watched</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Form Drawer */}
        {isEditingProfile && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-[#FFA175]/20 space-y-4 animate-in fade-in">
            <h3 className="font-display font-bold text-sm text-[#FFA175]">Update Your Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#FFF3E9]/80 mb-1">Display Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 text-xs text-[#FFF3E9] focus:border-[#FFA175] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF3E9]/80 mb-1">Favorite Category</label>
                <select
                  value={favoriteCategory}
                  onChange={(e) => setFavoriteCategory(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 text-xs text-[#FFF3E9] focus:border-[#FFA175] outline-none"
                >
                  <option value="Adventure">Adventure</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Action">Action</option>
                  <option value="Family">Family</option>
                  <option value="Educational Cartoons">Educational Cartoons</option>
                  <option value="Kids Animation">Kids Animation</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#FFF3E9]/80 mb-1">Bio / Story</label>
                <textarea
                  rows={2}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 text-xs text-[#FFF3E9] focus:border-[#FFA175] outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={isSaving}
                className="px-5 py-2 rounded-xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] transition-all cursor-pointer flex items-center gap-2"
              >
                {saveSuccess ? <Check className="w-4 h-4" /> : null}
                <span>{saveSuccess ? 'Changes Saved!' : isSaving ? 'Saving...' : 'Save Profile'}</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Tabs Switcher: Favorites vs Watch History */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#FFA175]/20 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeTab === 'favorites'
                  ? 'bg-[#FFA175] text-[#5C0702] border-[#FFA175] shadow-lg'
                  : 'bg-[#3E0401] text-[#FFF3E9]/80 border-[#FFA175]/30 hover:border-[#FFA175]'
              }`}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Favorite Movies ({favorites.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeTab === 'history'
                  ? 'bg-[#FFA175] text-[#5C0702] border-[#FFA175] shadow-lg'
                  : 'bg-[#3E0401] text-[#FFF3E9]/80 border-[#FFA175]/30 hover:border-[#FFA175]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Watch History ({watchHistory.length})</span>
            </button>
          </div>

          <button
            onClick={onExploreMovies}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#FFA175] hover:underline cursor-pointer"
          >
            <Film className="w-4 h-4" />
            <span>Browse More Movies</span>
          </button>
        </div>

        {/* Tab 1: Favorites */}
        {activeTab === 'favorites' && (
          <div>
            {favorites.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#3E0401]/50 border border-[#FFA175]/20 space-y-3">
                <Heart className="w-12 h-12 text-[#FFA175]/50 mx-auto" />
                <h3 className="font-display font-bold text-lg text-[#FFF3E9]">No Favorite Movies Saved Yet</h3>
                <p className="text-xs text-[#FFF3E9]/70 max-w-sm mx-auto">
                  Click the heart icon on any animation movie card to save it here for instant access!
                </p>
                <button
                  onClick={onExploreMovies}
                  className="mt-3 px-5 py-2.5 rounded-xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] transition-all cursor-pointer"
                >
                  Explore Animation Catalog
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((fav) => {
                  const fullMovie = getFullMovie(fav.movieId);
                  return (
                    <div
                      key={fav.id}
                      className="group bg-[#3E0401] rounded-2xl overflow-hidden border border-[#FFA175]/30 hover:border-[#FFA175] shadow-lg flex flex-col justify-between"
                    >
                      <div className="aspect-[3/4] w-full overflow-hidden relative bg-black">
                        <img
                          src={fav.moviePoster}
                          alt={fav.movieTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3">
                          <button
                            onClick={() => fullMovie && toggleFavorite(fullMovie)}
                            className="p-2 rounded-full bg-[#5C0702]/90 text-[#FFA175] hover:text-red-400 border border-[#FFA175]/40 transition-colors cursor-pointer"
                            title="Remove from favorites"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <p className="text-[11px] font-semibold text-[#FFA175]">{fav.movieCategory}</p>
                        <h4 className="font-display font-bold text-sm text-[#FFF3E9] truncate">
                          {fav.movieTitle}
                        </h4>

                        <button
                          onClick={() => fullMovie && onWatchMovie(fullMovie)}
                          className="w-full mt-2 py-2 px-3 rounded-xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Now</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Watch History */}
        {activeTab === 'history' && (
          <div>
            {watchHistory.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#3E0401]/50 border border-[#FFA175]/20 space-y-3">
                <Clock className="w-12 h-12 text-[#FFA175]/50 mx-auto" />
                <h3 className="font-display font-bold text-lg text-[#FFF3E9]">No Watch History Yet</h3>
                <p className="text-xs text-[#FFF3E9]/70 max-w-sm mx-auto">
                  Start watching movies and we'll remember your progress right here so you can pick up where you left off.
                </p>
                <button
                  onClick={onExploreMovies}
                  className="mt-3 px-5 py-2.5 rounded-xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] transition-all cursor-pointer"
                >
                  Start Watching
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {watchHistory.map((hist) => {
                  const fullMovie = getFullMovie(hist.movieId);
                  return (
                    <div
                      key={hist.id}
                      className="group bg-[#3E0401] rounded-2xl overflow-hidden border border-[#FFA175]/30 hover:border-[#FFA175] shadow-lg flex flex-col justify-between"
                    >
                      <div className="aspect-[3/4] w-full overflow-hidden relative bg-black">
                        <img
                          src={hist.moviePoster}
                          alt={hist.movieTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Progress Bar at bottom of poster */}
                        <div className="absolute inset-x-0 bottom-0 h-2 bg-black/60">
                          <div
                            className="h-full bg-[#FFA175]"
                            style={{ width: `${Math.min(100, Math.max(5, hist.progressPercentage))}%` }}
                          />
                        </div>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-[#FFA175]">
                          <span>{hist.movieCategory}</span>
                          <span className="font-mono">{hist.progressPercentage}% Watched</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-[#FFF3E9] truncate">
                          {hist.movieTitle}
                        </h4>

                        <button
                          onClick={() => fullMovie && onWatchMovie(fullMovie)}
                          className="w-full mt-2 py-2 px-3 rounded-xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Resume Movie</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
