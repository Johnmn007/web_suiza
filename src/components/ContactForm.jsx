import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ t }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-3xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border p-6 md:p-8 shadow-[0_20px_50px_rgba(75,122,244,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-text dark:text-white">
          {t.contact.title}
        </h3>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">
          {t.contact.subtitle}
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-lg font-semibold text-slate-text dark:text-white mb-2">
            ¡Mensaje Enviado!
          </h4>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 max-w-sm">
            {t.contact.success}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-5 py-2 rounded-xl bg-slate-light dark:bg-dark-border hover:bg-primary/10 dark:hover:bg-primary/20 text-primary dark:text-secondary text-sm font-semibold transition-all"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 uppercase tracking-wider">
              {t.contact.nameLabel}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.contact.placeholderName}
              className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-dark-border focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 uppercase tracking-wider">
              {t.contact.emailLabel}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.contact.placeholderEmail}
              className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-dark-border focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-text/80 dark:text-dark-text/80 mb-1.5 uppercase tracking-wider">
              {t.contact.messageLabel}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contact.placeholderMsg}
              className="w-full px-4 py-3 rounded-xl bg-slate-light/60 dark:bg-dark-border/30 border border-primary/5 dark:border-dark-border focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white placeholder-slate-text/40 dark:placeholder-dark-text/30 outline-none text-sm transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 rounded-xl bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold text-sm tracking-widest shadow-lg shadow-primary/25 hover:shadow-primary-dark/30 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>{t.contact.sendButton}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
