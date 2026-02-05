import React from 'react';
import { Phone, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-slate-800 pb-16">
          
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-isanpi-red rounded-lg flex items-center justify-center font-bold text-xl">爱</div>
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-widest uppercase">ISANPI</span>
                    <span className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">Medical Tech</span>
                </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              专注二类医疗器械研发与生产。<br/>
              致力于为医美机构提供标准化、更安全的术后修复解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-isanpi-red" />
                  <span>158 7376 9226</span>
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                   <MapPin className="w-4 h-4 text-isanpi-red" />
                   <span>湖南省长沙市·三皮生物科技</span>
                </li>
                 <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <Globe className="w-4 h-4 text-isanpi-red" />
                  <a href="http://www.isanpi.com" target="_blank" rel="noreferrer">www.isanpi.com</a>
                </li>
              </ul>
            </div>

            <div>
                 <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">WeChat</h4>
                 <div className="bg-white p-2 rounded-lg inline-block w-24 h-24">
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[8px] text-slate-400 text-center">
                        Scan QR Code
                    </div>
                 </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} ISANPI Technology Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;