/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { PROJECTS, type Project } from './constants';
import { ArrowRight, Instagram, Twitter, Linkedin, Box, Layers, Monitor, Cpu, LayoutGrid, MessageCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { translations, type Language } from './i18n';

export default function App() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [activeCategory, setActiveCategory] = useState<'All' | 'UI Motion' | 'UI' | '3D Motion' | 'Visual'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  const categories = [
    { id: 'All', label: t.categories.All, icon: LayoutGrid },
    { id: 'UI Motion', label: t.categories['UI Motion'], icon: Layers },
    { id: 'UI', label: t.categories.UI, icon: Monitor },
    { id: '3D Motion', label: t.categories['3D Motion'], icon: Box },
    { id: 'Visual', label: t.categories.Visual, icon: Cpu },
  ] as const;

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black relative">
      {/* Cool Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-emerald-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <Navbar 
        onNavigate={() => setSelectedProject(null)} 
        lang={lang}
        setLang={setLang}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-between pt-32 pb-16 md:pb-24 px-4 max-w-[1600px] mx-auto">
          {/* Top category label */}
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/40 font-medium block">
              Creative Portfolio
            </span>
          </div>

          {/* Centered big display title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="my-auto py-12 md:py-20"
          >
            <span className="text-2xl md:text-3xl font-light tracking-[0.25em] text-white/50 block mb-6 uppercase">
              WELCOME TO
            </span>
            <h1 className="text-6xl md:text-[9.5rem] font-black tracking-tight leading-[0.95] uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                DO STUDIO
              </span>
            </h1>
          </motion.div>

          {/* Bottom aligned subtitle & call-to-action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/5"
          >
            <p className={`text-lg text-white/60 max-w-lg leading-relaxed ${lang === 'zh' ? 'tracking-wide' : ''}`}>
              {t.hero.subtitle}
            </p>
            <motion.a
              href="#work"
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 group self-start md:self-auto"
            >
              <span className="text-sm uppercase tracking-widest font-semibold">{t.nav.work}</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={18} />
              </div>
            </motion.a>
          </motion.div>
        </section>

        {/* Work Grid */}
        <section id="work" className="py-24 md:py-32 px-4 max-w-[1600px] mx-auto">
          <div className="mb-24">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 font-medium mb-12">{lang === 'en' ? 'Selected Works' : '精选作品'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-500 overflow-hidden group ${
                    activeCategory === cat.id 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <cat.icon className={`mb-4 transition-transform duration-500 ${activeCategory === cat.id ? 'scale-110' : 'group-hover:scale-110'}`} size={24} />
                  <span className="text-xs uppercase tracking-widest font-bold">{cat.label}</span>
                  {activeCategory === cat.id && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute inset-0 bg-white -z-10"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-end mb-12">
            <span className="text-xs font-mono text-white/20 uppercase tracking-widest">
              Filtered by: {activeCategory}
            </span>
            <span className="text-xs font-mono text-white/20">Showing {filteredProjects.length} Projects</span>
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onClick={setSelectedProject}
                  lang={lang}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          lang={lang}
          onUpdateProject={(updated) => {
            setProjects(prev => prev.map(p => p.id === updated.id ? updated : p));
            setSelectedProject(updated);
          }}
        />

        {/* About Section */}
        <section id="about" className="py-32 md:py-48 px-4 bg-brand-gray/30">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-brand-gray overflow-hidden rounded-2xl"
              >
                <img 
                  src="https://ais-dev-ftzcxlcebkmcjvdvmfztrw-466561077391.us-east1.run.app/api/attachments/466561077391_ais-dev-ftzcxlcebkmcjvdvmfztrw_1742384077676_image.png" 
                  alt="Zhao Weidong"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 font-medium mb-12">{t.about.title}</h2>
              <p className={`text-3xl md:text-4xl font-light mb-10 ${lang === 'en' ? 'leading-snug' : 'leading-relaxed tracking-wide'}`}>
                {t.about.p1}
              </p>
              <p className={`text-lg text-white/60 mb-16 ${lang === 'en' ? 'leading-relaxed' : 'leading-loose tracking-wide'}`}>
                {t.about.p2}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">{t.about.services}</h4>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li>{lang === 'en' ? 'Motion Design' : '动效设计'}</li>
                    <li>{lang === 'en' ? '3D Visuals' : '3D 视觉'}</li>
                    <li>{lang === 'en' ? 'UI/UX Design' : 'UI/UX 设计'}</li>
                    <li>{lang === 'en' ? 'AIGC Innovation' : 'AI 创新应用'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">{t.about.awards}</h4>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li>{lang === 'en' ? 'Pinduoduo Senior Designer' : '拼多多 资深设计师'}</li>
                    <li>{lang === 'en' ? 'Ximalaya Senior 3D' : '喜马拉雅 高级3D动效'}</li>
                    <li>{lang === 'en' ? 'Baitu Network 3D' : '白兔网络 3D动效'}</li>
                    <li>{lang === 'en' ? 'IHDT C4D Certified' : 'IHDT C4D 系统认证'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-48 px-4 max-w-[1600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 font-medium mb-12">{t.contact.title}</h2>
            <a 
              href="mailto:825324414@qq.com" 
              className="text-4xl md:text-7xl font-light tracking-tighter hover:text-white/60 transition-colors"
            >
              825324414@qq.com
            </a>
            <p className="mt-8 text-white/40 tracking-widest uppercase text-xs">
              {lang === 'en' ? 'Phone' : '电话'}: 17766053112
            </p>
            
            <div className="mt-24 flex justify-center space-x-12">
              {[
                { icon: ExternalLink, label: lang === 'en' ? 'Zcool' : '站酷', href: 'https://www.zcool.com.cn/u/16926202' },
                { icon: ExternalLink, label: lang === 'en' ? 'Portfolio' : '作品集', href: 'https://tvkba2gvy7q.feishu.cn/wiki/Lww8woVS0iIqvFkZj2zckjelnwf' },
                { icon: MessageCircle, label: lang === 'en' ? 'WeChat' : '微信', isWeChat: true }
              ].map((social) => (
                <div key={social.label} className="relative">
                  {social.isWeChat ? (
                    <>
                      <button 
                        onClick={() => setShowWeChatQR(!showWeChatQR)}
                        className="group flex flex-col items-center space-y-4"
                      >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                          <social.icon size={20} />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </button>
                      <AnimatePresence>
                        {showWeChatQR && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 p-3 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 w-40"
                          >
                            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-2">
                              <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChatID" 
                                alt="WeChat QR" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-[10px] text-black font-bold uppercase tracking-wider text-center">{t.contact.scan}</p>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a 
                      href={social.href} 
                      className="group flex flex-col items-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                        <social.icon size={20} />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/20 uppercase tracking-widest">
            © 2024 Zhao Weidong. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
