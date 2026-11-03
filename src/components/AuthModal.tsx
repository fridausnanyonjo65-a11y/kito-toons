import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'signin' | 'signup';
  onClose: () => void;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'signin',
  onClose,
  onSuccess,
}) => {
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, sendResetEmail } = useAuth();

  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const resetFormState = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const handleSwitchMode = (newMode: 'signin' | 'signup' | 'forgot') => {
    resetFormState();
    setMode(newMode);
  };

  const mapAuthError = (err: any): string => {
    const code = err?.code || '';
    if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) {
      return 'Incorrect email or password. Please verify and try again.';
    }
    if (code.includes('email-already-in-use')) {
      return 'An account with this email already exists. Try signing in instead!';
    }
    if (code.includes('weak-password')) {
      return 'Password must be at least 6 characters long.';
    }
    if (code.includes('invalid-email')) {
      return 'Please enter a valid email address.';
    }
    return err?.message || 'An unexpected error occurred. Please try again.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetFormState();

    if (mode === 'forgot') {
      if (!email.trim()) {
        setErrorMsg('Please enter your account email address.');
        return;
      }
      try {
        setLoading(true);
        await sendResetEmail(email.trim());
        setSuccessMsg('Password reset link sent! Check your inbox.');
      } catch (err: any) {
        setErrorMsg(mapAuthError(err));
      } finally {
        setLoading(false);
      }
      return;
    }

    if (mode === 'signup') {
      if (!fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!email.trim()) {
        setErrorMsg('Please enter your email address.');
        return;
      }
      if (password.length < 6) {
        setErrorMsg('Password must be at least 6 characters long.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match. Please re-enter.');
        return;
      }
      try {
        setLoading(true);
        await signUpWithEmail(fullName.trim(), email.trim(), password);
        setSuccessMsg('Account created successfully! Welcome to Kito’s Toons.');
        setTimeout(() => {
          onSuccess?.();
          onClose();
        }, 1200);
      } catch (err: any) {
        setErrorMsg(mapAuthError(err));
      } finally {
        setLoading(false);
      }
      return;
    }

    // Sign In
    if (!email.trim() || !password) {
      setErrorMsg('Please enter both your email address and password.');
      return;
    }
    try {
      setLoading(true);
      await signInWithEmail(email.trim(), password);
      setSuccessMsg('Signed in successfully! Loading your favorites...');
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 1000);
    } catch (err: any) {
      setErrorMsg(mapAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    resetFormState();
    try {
      setLoading(true);
      await signInWithGoogle();
      onSuccess?.();
      onClose();
    } catch (err: any) {
      setErrorMsg(mapAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#23052D] border-2 border-[#FFA175]/50 shadow-2xl p-6 sm:p-8 text-[#FFF3E9] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#FFF3E9]/70 hover:text-[#FFA175] hover:bg-[#190222] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#190222] border-2 border-[#FFA175] shadow-lg mb-3">
            <img
              src="/src/assets/images/kito_mascot_avatar_1793709129479.jpg"
              alt="Kito Mascot"
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="font-display text-2xl font-black text-[#FFF3E9]">
            {mode === 'signup'
              ? 'Join Kito’s Toons!'
              : mode === 'forgot'
              ? 'Reset Password'
              : 'Welcome Back!'}
          </h2>
          <p className="text-xs text-[#FFA175] mt-1">
            {mode === 'signup'
              ? 'Unlock favorites, save watch progress & enjoy cartoons!'
              : mode === 'forgot'
              ? 'Enter your email to receive recovery instructions.'
              : 'Sign in to access your cartoon adventures.'}
          </p>
        </div>

        {/* Alert Messages */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-2xl bg-red-950/70 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-[#FFA175] mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#FFA175]/60 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Kitooke"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#190222]/90 border border-[#FFA175]/30 focus:border-[#FFA175] focus:ring-1 focus:ring-[#FFA175] text-sm text-[#FFF3E9] placeholder-[#FFF3E9]/40 outline-none transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#FFA175] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#FFA175]/60 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#190222]/90 border border-[#FFA175]/30 focus:border-[#FFA175] focus:ring-1 focus:ring-[#FFA175] text-sm text-[#FFF3E9] placeholder-[#FFF3E9]/40 outline-none transition-all"
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-[#FFA175]">
                  Password
                </label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => handleSwitchMode('forgot')}
                    className="text-[11px] text-[#FFA175]/80 hover:text-[#FFA175] transition-colors cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#FFA175]/60 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#190222]/90 border border-[#FFA175]/30 focus:border-[#FFA175] focus:ring-1 focus:ring-[#FFA175] text-sm text-[#FFF3E9] placeholder-[#FFF3E9]/40 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#FFF3E9]/60 hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-[#FFA175] mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#FFA175]/60 absolute left-3.5 top-3.5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#190222]/90 border border-[#FFA175]/30 focus:border-[#FFA175] focus:ring-1 focus:ring-[#FFA175] text-sm text-[#FFF3E9] placeholder-[#FFF3E9]/40 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-[#FFF3E9]/60 hover:text-[#FFA175] transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 rounded-2xl font-black text-sm text-[#2A0201] bg-[#FFA175] hover:bg-[#ff8e5b] shadow-xl shadow-[#FFA175]/30 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            {loading && <div className="w-4 h-4 border-2 border-[#2A0201] border-t-transparent rounded-full animate-spin" />}
            <span>
              {mode === 'signup'
                ? 'Create Account'
                : mode === 'forgot'
                ? 'Send Reset Link'
                : 'Sign In'}
            </span>
          </button>
        </form>

        {/* Divider & Google Login */}
        {mode !== 'forgot' && (
          <div className="mt-5 space-y-4">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-[#FFA175]/20 w-full" />
              <span className="bg-[#23052D] px-3 text-[11px] font-semibold text-[#FFA175]/80 uppercase tracking-wider absolute">
                or continue with
              </span>
            </div>

            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google Account</span>
            </button>
          </div>
        )}

        {/* Bottom Switch Links */}
        <div className="mt-6 text-center text-xs text-[#FFF3E9]/80 border-t border-[#FFA175]/15 pt-4">
          {mode === 'signup' ? (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => handleSwitchMode('signin')}
                className="font-bold text-[#FFA175] hover:underline cursor-pointer ml-1"
              >
                Sign In
              </button>
            </p>
          ) : mode === 'forgot' ? (
            <p>
              Remember your password?{' '}
              <button
                type="button"
                onClick={() => handleSwitchMode('signin')}
                className="font-bold text-[#FFA175] hover:underline cursor-pointer ml-1"
              >
                Back to Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => handleSwitchMode('signup')}
                className="font-bold text-[#FFA175] hover:underline cursor-pointer ml-1"
              >
                Create Account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
