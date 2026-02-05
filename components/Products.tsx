import React from 'react';
import { PRODUCTS } from '../constants';
import { Plus, ArrowUpRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-isanpi-red font-bold tracking-widest text-sm uppercase bg-red-50 px-3 py-1 rounded-full">Medical Devices Class II</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">全系二类械字号产品矩阵</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            严格遵循医疗器械GMP标准生产。从止血阻断到屏障重构，每一款产品都为解决特定临床痛点而生。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className="group relative bg-slate-50 rounded-[2rem] p-8 md:p-12 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-slate-100 overflow-hidden">
              
              {/* Decorative Circle */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl group-hover:bg-blue-100/50 transition-colors duration-500"></div>

              <div className="flex flex-col md:flex-row h-full gap-8 relative z-10">
                
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-white bg-slate-900 px-2 py-1 rounded">0{index + 1}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border ${
                            index === 0 ? 'text-isanpi-red border-red-200 bg-red-50' : 'text-isanpi-blue border-blue-200 bg-blue-50'
                        }`}>
                            {product.tag}
                        </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">{product.name}</h3>
                    <p className="text-sm font-bold text-slate-400 mb-6">{product.subName}</p>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {product.description}
                    </p>

                    <div className="space-y-3">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Features</div>
                        <div className="flex flex-wrap gap-2">
                            {product.features.map((f, i) => (
                                <span key={i} className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        <div className="w-2 h-2 rounded-full bg-isanpi-blue"></div>
                        {product.activeIngredients}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center justify-center">
                    <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full bg-white rounded-2xl shadow-inner overflow-hidden border border-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                        <img src={product.imagePlaceholder} alt={product.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 to-transparent pointer-events-none"></div>
                        
                        {/* Hover Action */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowUpRight size={18} />
                        </div>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;