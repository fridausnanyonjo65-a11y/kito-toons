import React from 'react';
import { MovieCategory } from '../types';
import { Sparkles, Compass, Laugh, Wand2, Swords, HeartHandshake, GraduationCap, Baby, Layers } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

interface CategoryMeta {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const CATEGORIES_METADATA: CategoryMeta[] = [
  { name: 'All', icon: Layers, description: 'Complete Animation Collection' },
  { name: 'Adventure', icon: Compass, description: 'Epic Quests & Explorations' },
  { name: 'Comedy', icon: Laugh, description: 'Laughs, Giggles & Slapstick' },
  { name: 'Fantasy', icon: Wand2, description: 'Magic, Dragons & Myths' },
  { name: 'Action', icon: Swords, description: 'High-Energy Animated Thrills' },
  { name: 'Family', icon: HeartHandshake, description: 'Heartwarming Stories For All' },
  { name: 'Educational Cartoons', icon: GraduationCap, description: 'Curious Minds & Science' },
  { name: 'Kids Animation', icon: Baby, description: 'Gentle Fun for Little Ones' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full space-y-4">
      {/* Scrollable category pill/tab bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES_METADATA.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.name;
          const count = categoryCounts[cat.name] || 0;

          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#FFA175] text-[#5C0702] border-[#FFA175] shadow-lg shadow-[#FFA175]/25 scale-102'
                  : 'bg-[#3E0401]/80 text-[#FFF3E9]/80 border-[#FFA175]/30 hover:border-[#FFA175] hover:text-[#FFF3E9] hover:bg-[#3E0401]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-[#5C0702] text-[#FFA175]' : 'bg-[#5C0702]/80 text-[#FFA175]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
