import React from 'react';
import { TECH_FEATURES } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Dark modern background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-isanpi-blue opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-isanpi-red opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-isanpi-blue uppercase tracking-[0.3em] mb-4">Core Technology</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              源自生物医学的<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">硬核修护科技</span>
            </h3>
          </div>
          <div className="text-slate-400 text-sm max-w-sm border-l-2 border-slate-700 pl-4">
             我们的产品不仅是简单的保湿，更是基于细胞生物学原理的结构性修复工具。
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TECH_FEATURES.map((tech, idx) => (
            <div key={idx} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-isanpi-blue to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">{tech.title}</h4>
              <p className="text-blue-400 font-mono text-sm mb-4">{tech.desc}</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                {tech.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Small S-R-T-R Mention */}
        <div className="mt-20 border-t border-slate-800 pt-10 text-center">
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Powered by Scientific Model</p>
            <div className="inline-flex flex-wrap justify-center gap-4 md:gap-12 opacity-70">
                <span className="font-black text-2xl text-slate-600 hover:text-white transition-colors cursor-default">STOP <span className="text-sm font-normal align-middle">阻断</span></span>
                <span className="font-black text-2xl text-slate-600 hover:text-white transition-colors cursor-default">REBUILD <span className="text-sm font-normal align-middle">重构</span></span>
                <span className="font-black text-2xl text-slate-600 hover:text-white transition-colors cursor-default">TRAIN <span className="text-sm font-normal align-middle">训练</span></span>
                <span className="font-black text-2xl text-slate-600 hover:text-white transition-colors cursor-default">RELEASE <span className="text-sm font-normal align-middle">放飞</span></span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;