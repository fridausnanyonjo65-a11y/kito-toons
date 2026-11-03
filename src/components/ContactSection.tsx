import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, Sparkles } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'messages'), {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim() || 'General Inquiries',
        message: message.trim(),
        createdAt: new Date().toISOString(),
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      console.error('Contact form error:', err);
      try {
        handleFirestoreError(err, OperationType.CREATE, 'messages');
      } catch (e) {
        setError('Message could not be sent. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Context & FAQs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E0401] border border-[#FFA175]/40 text-xs font-bold text-[#FFA175]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WE LOVE HEARING FROM FANS!</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#FFF3E9] tracking-tight">
            Get in Touch with Kito's Toons
          </h2>

          <p className="text-sm text-[#FFF3E9]/80 leading-relaxed">
            Have a question, feedback, movie suggestion, or cartoon partnership idea? Drop us a friendly note and our animation crew will get back to you swiftly!
          </p>

          <div className="space-y-4 pt-2">
            {/* Direct Phone & WhatsApp Contact */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#5C0702] to-[#7E0A04]/60 border-2 border-[#FFA175]/60 shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFA175] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Direct Developer Contact</span>
              </div>
              <h4 className="font-display font-black text-xl text-[#FFF3E9]">
                Kitooke's Direct Line
              </h4>
              <p className="text-xs text-[#FFF3E9]/80">
                Call, text, or WhatsApp for inquiries, cartoon collaborations, and streaming questions:
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <a
                  href="tel:+256750617186"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFA175] text-[#5C0702] font-bold text-xs hover:bg-[#ff8e5b] transition-all shadow-md cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 hidden" />
                  <span>📞 Call: +256-750-617-186</span>
                </a>
                <a
                  href="https://wa.me/256750617186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-all shadow-md cursor-pointer"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#3E0401] border border-[#FFA175]/20 space-y-1">
              <h4 className="font-display font-bold text-sm text-[#FFA175]">Animation Submissions</h4>
              <p className="text-xs text-[#FFF3E9]/70">
                Are you an independent 2D or 3D animator? We showcase authorized student and indie animated short films.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#3E0401] border border-[#FFA175]/20 space-y-1">
              <h4 className="font-display font-bold text-sm text-[#FFA175]">Family Safety Guarantee</h4>
              <p className="text-xs text-[#FFF3E9]/70">
                Every title on Kito's Toons is thoroughly vetted for children's safety and positive educational messaging.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-[#3E0401] border-2 border-[#FFA175]/40 p-6 sm:p-8 shadow-2xl relative">
            <h3 className="font-display text-xl font-bold text-[#FFF3E9] mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#FFA175]" />
              <span>Send a Message to Kitooke</span>
            </h3>
            <p className="text-xs text-[#FFA175] mb-6">We read every message from our tooners.</p>

            {success && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been safely delivered to the Kito's Toons team.</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-950/70 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#FFA175] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Tooner"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 focus:border-[#FFA175] outline-none text-xs text-[#FFF3E9] placeholder-[#FFF3E9]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FFA175] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 focus:border-[#FFA175] outline-none text-xs text-[#FFF3E9] placeholder-[#FFF3E9]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FFA175] mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Cartoon suggestion or general inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 focus:border-[#FFA175] outline-none text-xs text-[#FFF3E9] placeholder-[#FFF3E9]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FFA175] mb-1">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your friendly note here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#5C0702] border border-[#FFA175]/30 focus:border-[#FFA175] outline-none text-xs text-[#FFF3E9] placeholder-[#FFF3E9]/40 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl font-bold text-xs text-[#5C0702] bg-[#FFA175] hover:bg-[#ff8e5b] shadow-lg shadow-[#FFA175]/25 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? <div className="w-4 h-4 border-2 border-[#5C0702] border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
