import React from 'react';
import { Shield, Zap, Droplets, Thermometer, Syringe, Activity, Microscope } from 'lucide-react';
import { Product, Solution } from './types';

export const NAV_LINKS = [
  { name: '首页', href: '#hero' },
  { name: '核心产品', href: '#products' },
  { name: '核心科技', href: '#tech' },
  { name: '联合治疗方案', href: '#solutions' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '生物蛋白修护液',
    subName: '液体创可贴 · 械字号',
    tag: '止血/抗炎',
    description: '核心成分贻贝粘蛋白（MAP）。具有高强度的生物粘附性，能在创面形成微观生物支架，物理封闭微小血管，实现快速止血与隔绝感染。',
    features: ['物理封闭微孔', '源头阻断色沉', '湿性愈合环境', '促上皮爬行'],
    imagePlaceholder: 'https://picsum.photos/500/500?random=101',
    activeIngredients: '重组贻贝粘蛋白 (MAP)'
  },
  {
    id: 'p2',
    name: '医用透明质酸皮肤修护敷料',
    subName: '冷敷贴 · 黄金窗口期',
    tag: '退红/降温',
    description: '专为光电术后急性期设计。快速物理降温，收缩扩张的毛细血管，阻断神经源性炎症。',
    features: ['术后即刻冷敷', '物理退红', '舒缓灼热感', '防止水疱形成'],
    imagePlaceholder: 'https://picsum.photos/500/500?random=102',
    activeIngredients: '医用透明质酸钠'
  },
  {
    id: 'p3',
    name: '医用透明质酸皮肤修护凝胶',
    subName: '一客一管 · 导入专用',
    tag: '舒敏/修护',
    description: '无菌单支灌装设计，杜绝交叉感染。专为舒敏导入项目研发，高纯度透明质酸复配，直达真皮层。',
    features: ['无菌次抛设计', '声光电伴侣', '深层补水', '重建砖墙结构'],
    imagePlaceholder: 'https://picsum.photos/500/500?random=103',
    activeIngredients: '复配透明质酸钠 + 神经酰胺'
  },
  {
    id: 'p4',
    name: '医用透明质酸皮肤修护液',
    subName: '修护喷雾 · 细胞保鲜',
    tag: '维稳/强韧',
    description: '海藻糖+透明质酸双重保障。在光热损伤下保护细胞蛋白质活性，防止细胞脱水，是光子/射频术中的最佳伴侣。',
    features: ['术中边照边喷', '海藻糖水化膜', '热休克保护', '日常维稳'],
    imagePlaceholder: 'https://picsum.photos/500/500?random=104',
    activeIngredients: '透明质酸钠 + 海藻糖 (Trehalose)'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'scheme_a',
    title: '有创治疗联合方案',
    subTitle: '微针 / 水光 / 点阵激光',
    painPoints: ['术后出血', '容易感染', '甚至色沉'],
    steps: [
      { phase: '术后即刻', product: '生物蛋白修护液 (MAP)', action: '直接滴涂全脸，利用高粘附性物理封闭创口，止血并隔绝外界刺激。' },
      { phase: '退红镇静', product: '医用冷敷贴', action: '冷敷20-30分钟，收缩血管，缓解疼痛与红肿。' },
      { phase: '居家前3天', product: '生物蛋白修护液', action: '每天早晚涂抹，创造湿性愈合环境，预防炎症性色沉(PIH)。' }
    ]
  },
  {
    id: 'scheme_b',
    title: '光电抗衰联合方案',
    subTitle: '热玛吉 / 超声炮 / 7D聚拉提',
    painPoints: ['皮下热损伤', '表皮极度干燥', '屏障功能暂时减弱'],
    steps: [
      { phase: '术中操作', product: '医用修护喷雾', action: '操作过程中随时喷洒，利用海藻糖保护细胞蛋白活性，减少热损伤。' },
      { phase: '术后导入', product: '修护凝胶 (次抛)', action: '配合冷锤或电穿孔导入，快速补充流失水分，降温退红。' },
      { phase: '日常维稳', product: '医用修护喷雾', action: '随身携带，随时补充水分，维持角质层含水量。' }
    ]
  },
  {
    id: 'scheme_c',
    title: '敏感肌急救方案',
    subTitle: '玫瑰痤疮 / 激素依赖性皮炎 / 换季过敏',
    painPoints: ['持续泛红', '灼热刺痛', '耐受力差'],
    steps: [
      { phase: '诊室治疗', product: '修护凝胶 + 黄光', action: '凝胶厚敷配合黄光照射，抗炎修复，安抚过度活跃的神经末梢。' },
      { phase: '物理封闭', product: '生物蛋白修护液', action: '对于急性炎症丘疹部位点涂，物理隔绝刺激源。' },
      { phase: '长期养护', product: 'S-R-T-R 疗程', action: '建立皮肤耐受度，逐步恢复屏障功能。' }
    ]
  }
];

export const TECH_FEATURES = [
  {
    title: "MAP 物理封闭技术",
    desc: "Mussel Adhesive Protein",
    detail: "源自海洋贻贝的强力粘附蛋白，带正电荷，由于皮肤表面受损后通常带负电荷，MAP能通过静电吸附在创面形成单分子层保护膜，物理性阻断细菌入侵与色素沉积。",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "海藻糖细胞保鲜技术",
    desc: "Trehalose Bio-Protection",
    detail: "在高温、干燥等极端环境下，海藻糖能在细胞表面形成特殊的玻璃态水化膜，代替水分子支撑生物大分子结构，保护细胞膜和蛋白质不发生变性。",
    icon: <Activity className="w-8 h-8" />
  },
  {
    title: "无菌次抛灌装工艺",
    desc: "Aseptic BFS/Filling",
    detail: "全线产品采用制药级无菌生产线。特别是修护凝胶采用单支次抛设计，不仅杜绝二次污染，更确保活性成分以最鲜活状态直达肌底。",
    icon: <Microscope className="w-8 h-8" />
  }
];