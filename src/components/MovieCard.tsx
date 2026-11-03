import React, { useState } from 'react';
import { Play, Heart, Film, Tag } from 'lucide-react';
import { Movie } from '../types';
import { useAuth } from '../context/AuthContext';

interface MovieCardProps {
  movie: Movie;
  onWatch: (movie: Movie) => void;
  onOpenAuthRequired?: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onWatch,
  onOpenAuthRequired,
}) => {
  const { isFavorite, toggleFavorite, currentUser } = useAuth();
  const [imageError, setImageError] = useState(false);
  const [favLoading, setFavLoading] = useState(false);

  const favorited = isFavorite(movie.id);

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentUser) {
      onOpenAuthRequired?.();
      return;
    }
    try {
      setFavLoading(true);
      await toggleFavorite(movie);
    } catch (err) {
      console.error(err);
    } finally {
      setFavLoading(false);
    }
  };

  return (
    <div
      onClick={() => onWatch(movie)}
      className="group relative bg-[#2A0201] rounded-2xl overflow-hidden border-2 border-[#FFA175]/30 hover:border-[#FFA175] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFA175]/25 hover:-translate-y-1.5 flex flex-col cursor-pointer"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1D0100]">
        {!imageError ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#2A0201] to-[#120000]">
            <Film className="w-12 h-12 text-[#FFA175]/60 mb-2" />
            <p className="font-display font-bold text-sm text-[#FFA175]">{movie.title}</p>
          </div>
        )}

        {/* Poster Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A0201] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges: Price, Rating & Favorite */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            {/* Price Badge */}
            <span className="font-mono font-black text-xs px-2.5 py-0.5 rounded-lg bg-[#FFA175] text-[#2A0201] shadow-md border border-[#FFA175]">
              {movie.price}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-black/70 text-[#FFA175] border border-[#FFA175]/30 backdrop-blur-sm">
              {movie.rating}
            </span>
          </div>

          <button
            onClick={handleFavoriteClick}
            disabled={favLoading}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
            className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              favorited
                ? 'bg-[#FFA175] text-[#2A0201]'
                : 'bg-black/60 text-white hover:text-[#2A0201] hover:bg-[#FFA175]'
            }`}
          >
            <Heart
              className={`w-4 h-4 transition-transform ${favorited ? 'fill-current scale-110' : ''} ${
                favLoading ? 'animate-pulse' : ''
              }`}
            />
          </button>
        </div>

        {/* Hover Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-[#FFA175] text-[#2A0201] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-7 h-7 fill-current ml-1" />
          </div>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#2A0201]">
        <div>
          {/* Metadata clean unboxed text */}
          <div className="flex items-center gap-2 text-xs text-[#FFA175] font-semibold mb-1">
            <span>{movie.category}</span>
            <span aria-hidden="true">·</span>
            <span>{movie.duration}</span>
            <span aria-hidden="true">·</span>
            <span>{movie.releaseYear}</span>
          </div>

          <h3 className="font-display font-black text-base text-[#FFF3E9] group-hover:text-[#FFA175] transition-colors line-clamp-1">
            {movie.title}
          </h3>

          <p className="text-xs text-[#FFF3E9]/75 line-clamp-2 mt-1 leading-relaxed">
            {movie.description}
          </p>
        </div>

        {/* Bottom CTA Button with Price */}
        <div className="pt-2 border-t border-[#FFA175]/20 flex items-center justify-between">
          <div className="text-[11px] text-[#FFA175]/90 font-medium truncate max-w-[110px]">
            {movie.director}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onWatch(movie);
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black text-[#2A0201] bg-[#FFA175] hover:bg-[#ff8e5b] transition-all cursor-pointer whitespace-nowrap shadow-md hover:scale-103 active:scale-97"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch · {movie.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
