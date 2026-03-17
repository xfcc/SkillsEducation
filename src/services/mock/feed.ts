import type { FeedItem, CarouselItem, HeroItem, ClinicalFrontierItem, LiveNowItem } from '../types'

export const mockCarousel: CarouselItem[] = [
  { id: 'carousel-1', title: '房颤消融入门', link: '/subpackages/theory-course/course/index' },
  { id: 'carousel-2', title: '室早定位精讲', link: '/subpackages/theory-course/course/index' },
]

export const mockHero: HeroItem = {
  id: 'hero-1',
  badge: '核心训练营',
  title: '室早导管操作实战演练',
  meta: '12课时 · 已有 342 名医生加入',
  link: '/subpackages/theory-course/camp/index',
}

export const mockHeroList: HeroItem[] = [
  mockHero,
  {
    id: 'hero-2',
    badge: '精选课程',
    title: '房颤消融系统精讲',
    meta: '8课时 · 从入门到实战',
    link: '/subpackages/theory-course/course/index',
  },
]

export const mockClinicalFrontier: ClinicalFrontierItem[] = [
  { id: 'cf1', category: '指南解读', date: '2026.03.15', title: '2024 ESC 室性心律失常管理指南核心要点', excerpt: '指南在室性心律失常的风险分层、导管消融适应证及植入式心律转复除颤器（ICD）的应用方面进行了重大更新...', link: '' },
  { id: 'cf2', category: '经典病例', date: '2026.03.14', title: '持续性房颤个体化消融：基于 AIFV 的标测推演', excerpt: '一例 65 岁男性持续性房颤患者，伴随左心房中度扩大。术中通过高密度标测揭示了局灶驱动机制...', link: '' },
  { id: 'cf3', category: '术式精讲', date: '2026.03.12', title: '心脏介入常见血管穿刺技巧', excerpt: '结合超声引导与解剖标志，详细讲解股静脉、颈内静脉及锁骨下静脉的规范化穿刺流程，降低并发症风险。', link: '' },
  { id: 'cf4', category: '前沿文献', date: '2026.03.10', title: '冷冻球囊消融术后复发预测模型研究', excerpt: '基于大规模多中心随访数据，分析影响远期成功率的独立危险因素，构建并在临床验证风险预测模型...', link: '' },
  { id: 'cf5', category: '病例复盘', date: '2026.03.08', title: '右室流出道（RVOT）起源室早的标测与消融', excerpt: '心电图提示典型左束支阻滞图形伴电轴极度右偏。通过激动标测结合起搏标测，精准定位靶点...', link: '' },
]

export const mockLiveNow: LiveNowItem = {
  id: 'live-now-1',
  title: '左心耳封堵术实操...',
  link: '',
  liveId: 'live-001',
}

export const mockRadarFeed: FeedItem[] = [
  { id: 'f1', type: 'literature', title: '2024 ESC 室性心律失常管理指南要点解读', time: '2024-03-15', link: '' },
  { id: 'f2', type: 'live', title: '房颤冷冻球囊消融手术直播', cover: '', time: '2024-03-16 14:00', liveId: 'live-001' },
  { id: 'f3', type: 'literature', title: '持续性房颤个体化消融策略：最新循证', time: '2024-03-14', link: '' },
]
