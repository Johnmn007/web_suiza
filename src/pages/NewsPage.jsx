import React, { useState } from 'react';
import { Calendar, Tag, ChevronRight, Share2, Heart, Search } from 'lucide-react';

export default function NewsPage({ t }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [likes, setLikes] = useState({});

  const toggleLike = (idx) => {
    setLikes(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredNews = t.news.items.filter(item => {
    const matchesFilter = filter === 'All' || 
      (filter === 'Infraestructura' && (
        item.tag.toLowerCase().includes('licita') || 
        item.tag.toLowerCase().includes('infra') || 
        item.tag.toLowerCase().includes('finan') ||
        item.tag.toLowerCase().includes('tender') ||
        item.tag.toLowerCase().includes('fund') ||
        item.tag.toLowerCase().includes('modul')
      )) ||
      (filter === 'Historia' && (
        item.tag.toLowerCase().includes('hist')
      ));
    
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase()) ||
      item.tag.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
      <div className="bg-circle-1 top-20 left-10"></div>
      <div className="bg-circle-2 bottom-10 right-10"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
          {t.news.title}
        </h2>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          {t.news.subtitle}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 w-full">
        {/* News Categories Filters */}
        <div className="flex bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 p-1.5 rounded-2xl shadow-sm overflow-x-auto w-full md:w-auto scrollbar-none">
          {['All', 'Infraestructura', 'Historia'].map((cat) => {
            let label = cat;
            if (cat === 'All') {
              label = t.nav.news === 'News' ? 'All' : t.nav.news === 'Joibo' ? 'Jatibi' : 'Todas';
            } else if (cat === 'Infraestructura') {
              label = t.nav.news === 'News' ? 'Infrastructure' : t.nav.news === 'Joibo' ? 'Tee Xobo' : 'Infraestructura';
            } else if (cat === 'Historia') {
              label = t.nav.news === 'News' ? 'History' : t.nav.news === 'Joibo' ? 'Historia' : 'Historia';
            }
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-text/70 dark:text-dark-text/70 hover:text-primary dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[320px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-text/40 dark:text-dark-text/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar noticias..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white text-sm outline-none shadow-sm transition-all"
          />
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-dark-border/40 overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(75,122,244,0.06)] dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
          >
            {/* Real image of the news article with dark overlay */}
            <div className="w-full h-48 relative overflow-hidden flex flex-col justify-between text-white p-6">
              {/* Zoom effect on card hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                style={{ 
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75) 30%, rgba(0, 0, 0, 0.25) 100%), url(${item.image || '/suiza_campus.png'})` 
                }}
              />
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wider uppercase self-start z-10">
                <Tag className="w-3.5 h-3.5" />
                <span>{item.tag}</span>
              </span>

              {/* Decorative branding elements */}
              <div className="absolute right-6 bottom-4 opacity-15 z-0">
                <span className="text-4xl font-extrabold tracking-tighter">SUIZA</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-white/90 z-10 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-secondary" />
                <span>{item.date}</span>
              </div>
            </div>

            {/* Content info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-text dark:text-white mb-2 leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed mb-6 line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* Action buttons footer */}
              <div className="border-t border-primary/5 pt-4 flex justify-between items-center text-xs">
                <a
                  href={item.link || "https://www.gob.pe/institucion/regionucayali/noticias"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-primary dark:text-secondary hover:translate-x-0.5 transition-transform"
                >
                  <span>{t.news.readMore}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleLike(idx)}
                    className={`flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer ${likes[idx] ? 'text-rose-500 font-semibold' : 'text-slate-text/50 dark:text-dark-text/50'}`}
                  >
                    <Heart className={`w-4 h-4 ${likes[idx] ? 'fill-rose-500' : ''}`} />
                    <span>{likes[idx] ? 'Liked' : 'Like'}</span>
                  </button>
                  <button className="flex items-center gap-1 text-slate-text/50 dark:text-dark-text/50 hover:text-primary transition-colors cursor-pointer">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredNews.length === 0 && (
        <div className="text-center py-16 text-slate-text/50 dark:text-dark-text/50">
          No se encontraron artículos con los criterios especificados.
        </div>
      )}
    </div>
  );
}
