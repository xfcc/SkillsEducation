import type { TheoryCategory, TheoryCourse, TheoryCase, TheoryClass } from '../types'

export const mockCategories: TheoryCategory[] = [
  {
    id: 'cat-1',
    name: '房颤',
    courseCount: 120,
    children: [
      { id: 'cat-1-1', name: '基础原理', courseCount: 30 },
      { id: 'cat-1-2', name: '消融策略', courseCount: 90 },
    ],
  },
  {
    id: 'cat-2',
    name: '室早',
    courseCount: 85,
    children: [
      { id: 'cat-2-1', name: '定位诊断', courseCount: 40 },
      { id: 'cat-2-2', name: '导管操作', courseCount: 45 },
    ],
  },
]

export const mockCourses: TheoryCourse[] = [
  { id: 'c1', title: '房颤电生理基础', categoryId: 'cat-1-1', progress: 60, totalChapters: 10, locked: false },
  { id: 'c2', title: '肺静脉隔离术式精讲', categoryId: 'cat-1-2', progress: 0, totalChapters: 8, locked: false },
  { id: 'c3', title: '室早心电图定位', categoryId: 'cat-2-1', progress: 100, totalChapters: 12, locked: false },
  { id: 'c4', title: '高级病种：罕见起源', categoryId: 'cat-2-2', progress: 0, totalChapters: 6, locked: true },
]

export const mockCases: TheoryCase[] = [
  { id: 'case-1', title: '典型房扑消融一例', indication: '房扑', updatedAt: '2024-03-10' },
  { id: 'case-2', title: 'RVOT 室早导管消融', indication: '室早', updatedAt: '2024-03-12' },
  { id: 'case-3', title: '心外膜室速一例', indication: '室速', updatedAt: '2024-03-14' },
]

export const mockClasses: TheoryClass[] = [
  { id: 'cls-1', name: '华东区 EP 进阶班', memberCount: 48, nextActivity: '3月20日 文献带读' },
  { id: 'cls-2', name: '室早专题研讨', memberCount: 32, nextActivity: '3月22日 病例讨论' },
]
