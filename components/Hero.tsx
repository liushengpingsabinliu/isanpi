import React from 'react';
import { ArrowRight, Microscope, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-[0.03]"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-red-50 to-transparent rounded-full blur-[80px] opacity-40 -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="animate-fade-in-up flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-isanpi-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-isanpi-red"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">二类医疗器械 · 院线专供</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up [animation-delay:200ms] text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
            医美全场景<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-isanpi-blue via-blue-600 to-cyan-500">精准修复专家</span>
          </h1>
          
          <p className="animate-fade-in-up [animation-delay:400ms] text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-12 font-medium">
            以 <span className="text-slate-900 font-bold">MAP 物理封闭</span> 与 <span className="text-slate-900 font-bold">海藻糖细胞保鲜</span> 技术为核心，
            提供有创治疗、光电抗衰及敏感肌急救的<br className="hidden md:block"/>
            <span className="text-isanpi-blue font-bold">全周期联合治疗方案</span>。
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#products" className="group bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 hover:bg-isanpi-blue transition-all hover:scale-105 flex items-center justify-center gap-2">
              <Microscope className="w-5 h-5" />
              探索核心产品
            </a>
            <a href="#solutions" className="group bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:border-isanpi-blue hover:text-isanpi-blue transition-all flex items-center justify-center gap-2">
              查看临床方案
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Floating Product Cards Visualization */}
          <div className="animate-fade-in-up [animation-delay:800ms] mt-20 relative w-full max-w-5xl mx-auto h-[300px] md:h-[400px]">
             {/* Central visual - abstract representation of product cluster */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Card 1 */}
                    <div className="absolute top-0 left-10 md:left-20 w-48 md:w-64 aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-slate-100 rotate-[-6deg] hover:rotate-0 transition-transform duration-500 hover:z-20 p-4 animate-float">
                        <div className="w-full h-3/4 bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
                             <img src="https://picsum.photos/400/600?random=1" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Product" />
                             <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 font-bold">生物蛋白修护液</div>
                        </div>
                        <div className="font-bold text-slate-900">止血·封闭</div>
                        <div className="text-xs text-slate-500">械字号 2023xxxx</div>
                    </div>
                    {/* Card 2 - Center */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 md:w-72 aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-blue-100 z-10 p-5 transform hover:scale-105 transition-transform duration-500">
                        <div className="absolute -top-3 -right-3 bg-isanpi-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">STAR PRODUCT</div>
                        <div className="w-full h-3/4 bg-blue-50/50 rounded-lg mb-4 overflow-hidden relative flex items-center justify-center">
                             <img src="https://picsum.photos/400/600?random=2" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Product" />
                             <div className="absolute text-sm text-slate-500 font-bold">MAP 贻贝粘蛋白</div>
                        </div>
                        <div className="font-bold text-xl text-slate-900 mb-1">术后急救</div>
                        <div className="flex gap-2">
                             <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">止损</span>
                             <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">防色沉</span>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="absolute top-4 right-10 md:right-20 w-48 md:w-64 aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-slate-100 rotate-[6deg] hover:rotate-0 transition-transform duration-500 hover:z-20 p-4 animate-float [animation-delay:1s]">
                         <div className="w-full h-3/4 bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
                             <img src="https://picsum.photos/400/600?random=3" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Product" />
                             <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 font-bold">透明质酸敷料</div>
                         </div>
                        <div className="font-bold text-slate-900">降温·退红</div>
                        <div className="text-xs text-slate-500">无菌冷敷贴</div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;