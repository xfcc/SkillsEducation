import type { PracticeCamp, PracticeDay, QuizQuestion, LeaderboardEntry } from '../types'

export const mockCamps: PracticeCamp[] = [
  {
    id: 'camp-1',
    name: '室早导管操作训练营',
    description: 'Day 1 到 Day N 微观任务，含 RVOT、三尖瓣环室早导管操作',
    totalDays: 7,
    completedDays: 2,
    locked: false,
  },
  {
    id: 'camp-2',
    name: '房颤消融进阶营',
    totalDays: 5,
    completedDays: 0,
    locked: true,
  },
]

export const mockCampDays: PracticeDay[] = [
  {
    id: 'day-1',
    day: 1,
    title: 'RVOT 导管操作基础',
    completed: true,
    tasks: [
      { id: 't1', title: '阅读：RVOT 解剖', type: 'reading', completed: true },
      { id: 't2', title: '测试题：导管入路', type: 'quiz', completed: true, requiredScore: 80 },
    ],
  },
  {
    id: 'day-2',
    day: 2,
    title: '三尖瓣环室早导管操作',
    completed: true,
    tasks: [
      { id: 't3', title: '阅读：三尖瓣环定位', type: 'reading', completed: true },
      { id: 't4', title: '测试题：标测要点', type: 'quiz', completed: true, requiredScore: 80 },
    ],
  },
  {
    id: 'day-3',
    day: 3,
    title: '独立室早消融流程',
    completed: false,
    tasks: [
      { id: 't5', title: '模拟器：导管操作', type: 'simulator', completed: false },
      { id: 't6', title: '测试题：流程考核', type: 'quiz', completed: false, requiredScore: 80 },
    ],
  },
]

export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'single',
    question: 'RVOT 室早最常见的起源部位是？',
    options: ['前间隔', '后间隔', '游离壁', '主动脉窦邻近'],
    answer: '前间隔',
  },
  {
    id: 'q2',
    type: 'multiple',
    question: '三尖瓣环标测时需要注意的解剖结构包括？',
    options: ['希氏束', '右室流出道', '冠状窦口', '房室沟'],
    answer: ['希氏束', '冠状窦口'],
  },
]

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, userId: 'u1', name: '张医生', score: 98, completedAt: '2024-03-15' },
  { rank: 2, userId: 'u2', name: '李医生', score: 95, completedAt: '2024-03-14' },
  { rank: 3, userId: 'u3', name: '王医生', score: 92, completedAt: '2024-03-13' },
]
