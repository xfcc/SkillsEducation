import type { FeedItem, CarouselItem } from '../types'

export const mockCarousel: CarouselItem[] = [
  { id: 'carousel-1', title: '房颤消融入门', link: '/subpackages/theory-course/course/index' },
  { id: 'carousel-2', title: '室早定位精讲', link: '/subpackages/theory-course/course/index' },
]

export const mockRadarFeed: FeedItem[] = [
  {
    id: 'f1',
    type: 'literature',
    title: '2024 ESC 室性心律失常管理指南要点解读',
    time: '2024-03-15',
    link: '/subpackages/radar/detail?id=f1',
  },
  {
    id: 'f2',
    type: 'live',
    title: '房颤冷冻球囊消融手术直播',
    cover: '',
    time: '2024-03-16 14:00',
    liveId: 'live-001',
  },
  {
    id: 'f3',
    type: 'literature',
    title: '持续性房颤个体化消融策略：最新循证',
    time: '2024-03-14',
    link: '/subpackages/radar/detail?id=f3',
  },
]
