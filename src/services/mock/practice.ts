import type { PracticeCamp, PracticeDay, QuizQuestion, LeaderboardEntry, DailyQuiz, PracticeCounts } from '../types'

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

export const mockDailyQuiz: DailyQuiz = {
  id: 'dq1',
  dateLabel: '17 三月',
  tags: ['每日一题', '室早标测决策'],
  question: '在右室流出道 (RVOT) 室早的标测中，若激动标测最早激动点早于体表 QRS 波起点 30ms，且起搏标测呈 12/12 匹配，下一步最合理的决策是？',
  options: [
    { text: '立即放电消融', percent: 68, isCorrect: true },
    { text: '继续寻找更早激动点', percent: 15 },
    { text: '调整导管贴靠压力', percent: 12 },
    { text: '我不知道', percent: 5 },
  ],
  participantCount: 1204,
  commentCount: 12,
}

export const mockPracticeCounts: PracticeCounts = {
  openCampsCount: 2,
  joinedClassesCount: 3,
}
