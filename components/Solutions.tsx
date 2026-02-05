import React, { useState } from 'react';
import { SOLUTIONS } from '../constants';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

const Solutions: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSolution = SOLUTIONS[activeIdx];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:flex justify-between items-end">
             <div>
                <h2 className="text-sm font-bold text-isanpi-blue uppercase tracking-[0.3em] mb-4">Treatment Protocols</h2>
                <h3 className="text-4xl font-black text-slate-900">黄金搭档 · 联合治疗方案</h3>
             </div>
             <p className="mt-4 md:mt-0 text-slate-500 text-sm max-w-sm text-right">
                将产品植入光电、注射及日常管理全流程，<br/>提升治疗效果，降低术后客诉。
             </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            
            {/* Selection Panel */}
            <div className="lg:w-1/4 flex flex-col gap-4">
                {SOLUTIONS.map((s, idx) => (
                    <button 
                        key={s.id}
                        onClick={() => setActiveIdx(idx)}
                        className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${
                            activeIdx === idx 
                            ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
                            : 'bg-white border-transparent text-slate-500 hover:bg-white hover:border-slate-200'
                        }`}
                    >
                        <div className="text-xs font-bold opacity-60 mb-2 uppercase tracking-wider">方案 {String.fromCharCode(65 + idx)}</div>
                        <div className={`text-xl font-bold mb-1 ${activeIdx === idx ? 'text-white' : 'text-slate-800'}`}>{s.title}</div>
                        <div className="text-xs opacity-70 truncate">{s.subTitle}</div>
                    </button>
                ))}
                
                {/* Marketing Tip */}
                <div className="mt-auto p-6 bg-gradient-to-br from-isanpi-red to-red-600 rounded-2xl text-white shadow-lg relative overflow-hidden hidden lg:block">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <div className="font-bold text-lg mb-2">业绩增长点</div>
                        <p className="text-xs opacity-90 leading-relaxed">
                            建议将“术后即刻修复包”作为项目标配赠送或搭售，提升客户体验感的同时，培养使用习惯。
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Panel */}
            <div className="lg:w-3/4 flex flex-col gap-6">
                
                {/* Header Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h4 className="text-2xl font-black text-slate-900 mb-2">{activeSolution.subTitle}</h4>
                        <div className="flex gap-2">
                            {activeSolution.painPoints.map((p, i) => (
                                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-bold">
                                    <AlertCircle size={12} /> {p}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-sm text-slate-400 font-bold uppercase">Total Duration</div>
                        <div className="text-xl font-black text-slate-900">7 Days+</div>
                    </div>
                </div>

                {/* Steps Layout */}
                <div className="grid md:grid-cols-3 gap-6 flex-1">
                    {activeSolution.steps.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:border-blue-200 transition-colors">
                            {/* Step Number Background */}
                            <div className="absolute -right-4 -bottom-8 text-[120px] font-black text-slate-50 opacity-50 group-hover:text-blue-50 transition-colors select-none">
                                {idx + 1}
                            </div>
                            
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="text-xs font-bold text-isanpi-blue uppercase tracking-widest mb-4">Phase 0{idx + 1}</div>
                                <h5 className="text-xl font-bold text-slate-900 mb-4 h-14 flex items-center">{step.phase}</h5>
                                
                                <div className="mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <span className="text-xs font-bold text-slate-400 block mb-1">使用产品</span>
                                    <span className="text-sm font-bold text-isanpi-blue">{step.product}</span>
                                </div>
                                
                                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                                    {step.action}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default Solutions;