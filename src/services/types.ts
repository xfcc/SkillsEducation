/** 首页单 Hero：核心训练营 */
export interface HeroItem {
  id: string
  badge: string
  title: string
  meta: string
  link: string
}

/** 临床前沿分类 */
export type ClinicalFrontierCategory = '指南解读' | '经典病例' | '术式精讲' | '前沿文献' | '病例复盘'

export interface ClinicalFrontierItem {
  id: string
  category: ClinicalFrontierCategory
  date: string
  title: string
  excerpt: string
  link?: string
}

/** 当前直播（浮层） */
export interface LiveNowItem {
  id: string
  title: string
  link?: string
  liveId?: string
}

// User assets (for Profile, reused on Home if needed)

export interface UserProfile {
  id: string
  name: string
  avatar?: string
  department?: string
  position?: string
}

export interface Badge {
  id: string
  name: string
  icon?: string
  unlocked: boolean
}

export interface LearningStats {
  totalMinutes: number
}

// Theory: guidebooks (核心技能手册)
export interface Guidebook {
  id: string
  title: string
  description?: string
  cover?: string
}

// Theory: categories & courses
export interface TheoryCategory {
  id: string
  name: string
  children?: TheoryCategory[]
  courseCount?: number
}

export interface TheoryCourse {
  id: string
  title: string
  categoryId: string
  progress: number
  totalChapters: number
  locked?: boolean
}

// Theory: cases
export interface TheoryCase {
  id: string
  title: string
  indication: string
  updatedAt: string
}

// Theory: teaching room / classes
export interface TheoryClass {
  id: string
  name: string
  memberCount: number
  nextActivity?: string
}

// Practice: camps & tasks
export interface PracticeCamp {
  id: string
  name: string
  description?: string
  totalDays: number
  completedDays: number
  locked?: boolean
}

export interface PracticeDay {
  id: string
  day: number
  title: string
  tasks: PracticeTask[]
  completed: boolean
}

export interface PracticeTask {
  id: string
  title: string
  type: 'reading' | 'quiz' | 'simulator'
  completed: boolean
  requiredScore?: number
}

export interface QuizQuestion {
  id: string
  type: 'single' | 'multiple' | 'blank'
  question: string
  options?: string[]
  answer?: string | string[]
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  name: string
  score: number
  completedAt?: string
}

/** 每日一题（演练页） */
export interface DailyQuizOption {
  text: string
  percent: number
  isCorrect?: boolean
}

export interface DailyQuiz {
  id: string
  dateLabel: string
  tags: string[]
  question: string
  options: DailyQuizOption[]
  participantCount: number
  commentCount: number
}

/** 演练页入口数量 */
export interface PracticeCounts {
  openCampsCount: number
  joinedClassesCount: number
}

// Profile: reports
export type ReportType = 'AIFV' | 'iEP' | 'department' | 'journey'

export interface ProfileReport {
  id: string
  type: ReportType
  title: string
  date: string
}
