import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Heart,
  ArrowLeft,
  Share2,
  Sparkles,
  Check,
  Film,
  Users,
} from 'lucide-react';
import { Movie } from '../types';
import { useAuth } from '../context/AuthContext';
import { MovieCard } from '../components/MovieCard';

interface WatchViewProps {
  movie: Movie;
  allMovies: Movie[];
  onBack: () => void;
  onSelectMovie: (movie: Movie) => void;
  onOpenAuthRequired: () => void;
}

export const WatchView: React.FC<WatchViewProps> = ({
  movie,
  allMovies,
  onBack,
  onSelectMovie,
  onOpenAuthRequired,
}) => {
  const { isFavorite, toggleFavorite, recordWatchProgress, currentUser } = useAuth();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const favorited = isFavorite(movie.id);

  // Auto record initial start and reset video on movie change
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setVideoLoaded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [movie.id]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.log('Autoplay policy caught:', e));
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    // Periodically record progress every ~10s or 15%
    if (currentUser && Math.floor(current) % 12 === 0) {
      const pct = (current / total) * 100;
      recordWatchProgress(movie, pct);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    setVideoLoaded(true);
    // Record watch start in history
    if (currentUser) {
      recordWatchProgress(movie, 5);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const target = parseFloat(e.target.value);
    videoRef.current.currentTime = target;
    setCurrentTime(target);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Recommended movies (same category or others, excluding current)
  const recommendedMovies = allMovies
    .filter((m) => m.id !== movie.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#5C0702] text-[#FFF3E9] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3E0401]/90 border border-[#FFA175]/30 hover:border-[#FFA175] text-[#FFA175] hover:text-[#FFF3E9] transition-all cursor-pointer font-semibold text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collection</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3E0401]/90 border border-[#FFA175]/30 hover:border-[#FFA175] text-xs font-semibold text-[#FFF3E9] transition-all cursor-pointer"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-[#FFA175]" />}
              <span>{copiedShare ? 'Copied Link!' : 'Share'}</span>
            </button>

            <button
              onClick={() => {
                if (!currentUser) {
                  onOpenAuthRequired();
                  return;
                }
                toggleFavorite(movie);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer text-xs font-semibold ${
                favorited
                  ? 'bg-[#FFA175] text-[#5C0702] border-[#FFA175]'
                  : 'bg-[#3E0401]/90 text-[#FFF3E9] border-[#FFA175]/30 hover:border-[#FFA175]'
              }`}
            >
              <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
              <span>{favorited ? 'Favorited' : 'Favorite'}</span>
            </button>
          </div>
        </div>

        {/* Large Cinematic Video Player */}
        <div className="relative rounded-3xl overflow-hidden bg-black border-2 border-[#FFA175]/40 shadow-2xl shadow-black/80 aspect-video max-h-[72vh] w-full flex items-center justify-center group">
          <video
            ref={videoRef}
            src={movie.videoUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            playsInline
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Big Center Overlay Play Button when paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFA175] text-[#5C0702] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-current ml-1" />
            </button>
          )}

          {/* Custom Video Controls Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Progress Bar */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 rounded-lg appearance-none bg-white/30 accent-[#FFA175] cursor-pointer"
            />

            {/* Controls row */}
            <div className="flex items-center justify-between text-white text-xs pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 hover:text-[#FFA175] transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  onClick={handleRestart}
                  className="p-1.5 hover:text-[#FFA175] transition-colors cursor-pointer"
                  aria-label="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 hover:text-[#FFA175] transition-colors cursor-pointer"
                    aria-label="Mute"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 sm:w-20 h-1 bg-white/30 accent-[#FFA175] cursor-pointer"
                  />
                </div>

                <span className="font-mono text-[11px] text-[#FFF3E9]/80 ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] text-[#FFA175] font-semibold">
                  Authorized HD Stream
                </span>
                <button
                  onClick={handleFullscreen}
                  className="p-1.5 hover:text-[#FFA175] transition-colors cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Metadata & Storyline Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div>
              {/* Unboxed metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#FFA175] mb-2">
                <span>{movie.category}</span>
                <span aria-hidden="true">·</span>
                <span>{movie.duration}</span>
                <span aria-hidden="true">·</span>
                <span>Released {movie.releaseYear}</span>
                <span aria-hidden="true">·</span>
                <span>Rated {movie.rating}</span>
                <span aria-hidden="true">·</span>
                <span>Directed by {movie.director}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-black text-[#FFF3E9] tracking-tight">
                {movie.title}
              </h1>
            </div>

            {/* Storyline / Synopsis */}
            <div className="p-6 rounded-3xl bg-[#3E0401]/90 border border-[#FFA175]/25 space-y-3">
              <h3 className="font-display font-bold text-lg text-[#FFA175] flex items-center gap-2">
                <Film className="w-5 h-5" />
                <span>Storyline</span>
              </h3>
              <p className="text-sm sm:text-base text-[#FFF3E9]/90 leading-relaxed">
                {movie.synopsis || movie.description}
              </p>
            </div>

            {/* Fun Animation Fact */}
            {movie.funFact && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#7E0A04]/40 to-[#3E0401]/60 border border-[#FFA175]/30 flex items-start gap-3.5">
                <Sparkles className="w-5 h-5 text-[#FFA175] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#FFA175] uppercase tracking-wider">Animation Studio Trivia</p>
                  <p className="text-xs text-[#FFF3E9]/85 mt-0.5 leading-relaxed">{movie.funFact}</p>
                </div>
              </div>
            )}

            {/* Characters Spotlight */}
            {movie.characters && movie.characters.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-[#FFF3E9] flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#FFA175]" />
                  <span>Featured Characters</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {movie.characters.map((char, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[#3E0401] border border-[#FFA175]/20 flex flex-col"
                    >
                      <p className="font-display font-bold text-sm text-[#FFA175]">{char.name}</p>
                      <p className="text-xs text-[#FFF3E9]/70 mt-0.5">{char.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Poster Snapshot & Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl overflow-hidden border-2 border-[#FFA175]/40 bg-[#3E0401] p-4 text-center">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-display font-bold text-base text-[#FFF3E9]">{movie.title}</p>
              <p className="text-xs text-[#FFA175] mt-1">Official Authorized Kito's Toons Release</p>
              <p className="text-[11px] text-[#FFF3E9]/60 mt-2">
                All animation movies streamed here adhere strictly to authorized distribution licenses and family safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Animation Movies */}
        <div className="mt-16 pt-12 border-t border-[#FFA175]/20 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#FFF3E9]">
                Recommended Animated Movies
              </h2>
              <p className="text-xs text-[#FFA175]">More cartoons you'll love watching next</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedMovies.map((recMovie) => (
              <MovieCard
                key={recMovie.id}
                movie={recMovie}
                onWatch={(m) => onSelectMovie(m)}
                onOpenAuthRequired={onOpenAuthRequired}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
