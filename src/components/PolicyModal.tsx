import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#3E0401] border-2 border-[#FFA175]/50 shadow-2xl p-6 sm:p-8 text-[#FFF3E9] max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#FFF3E9]/70 hover:text-[#FFA175] hover:bg-[#5C0702] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#5C0702] border border-[#FFA175]/40 text-[#FFA175]">
            {type === 'privacy' ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h2 className="font-display text-2xl font-black text-[#FFF3E9]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </h2>
            <p className="text-xs text-[#FFA175]">Kito's Toons · Made by Kitooke</p>
          </div>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-[#FFF3E9]/85 leading-relaxed">
            <p>
              At <strong>Kito's Toons</strong>, we prioritize the privacy and digital well-being of animation fans, children, and families.
            </p>
            <h4 className="font-bold text-[#FFA175] text-sm pt-2">1. Child Safety & Data Minimization</h4>
            <p>
              We collect only the bare essential information required to provide account features such as bookmarked favorites and recently watched video progress. We never sell or monetize user personal data.
            </p>
            <h4 className="font-bold text-[#FFA175] text-sm pt-2">2. Secure Cloud Authentication</h4>
            <p>
              User authentication is powered securely via Google Firebase Authentication. Passwords and credentials are encrypted according to industry security standards.
            </p>
            <h4 className="font-bold text-[#FFA175] text-sm pt-2">3. Content Moderation</h4>
            <p>
              Every video stream and cartoon available on the website has undergone screening to ensure an age-appropriate, wholesome experience for all viewers.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-[#FFF3E9]/85 leading-relaxed">
            <p>
              Welcome to <strong>Kito's Toons</strong>. By exploring and enjoying our animation movies, you agree to these friendly terms.
            </p>
            <h4 className="font-bold text-[#FFA175] text-sm pt-2">1. Authorized Streaming License</h4>
            <p>
              All video assets, cartoon shorts, and open movie releases hosted or indexed on Kito's Toons are licensed under open animation distribution permissions (including Creative Commons open project distributions by the Blender Foundation) or original works created for Kito's Toons.
            </p>
            <h4 className="font-bold text-[#FFA175] text-sm pt-2">2. Respectful Community Standards</h4>
            <p>
              Users must refrain from attempting to bypass site security, scrape protected data, or misuse the contact communication channels.
            </p>
            <h4 className="font-bold text-[#FFA175] text-sm pt-2">3. Developer Attribution</h4>
            <p>
              Kito's Toons was proudly created and developed by <strong>Kitooke</strong>. Unauthorized reproduction of the platform's proprietary brand identity is prohibited.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#FFA175]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
