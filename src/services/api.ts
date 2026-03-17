import type {
  LearningMap,
  FeedItem,
  TheoryCategory,
  TheoryCourse,
  TheoryCase,
  TheoryClass,
  PracticeCamp,
  PracticeDay,
  QuizQuestion,
  LeaderboardEntry,
  UserProfile,
  UserPoints,
  Badge,
  LearningStats,
  ProfileReport,
  Guidebook,
  CarouselItem,
  HeroItem,
  ClinicalFrontierItem,
  LiveNowItem,
  DailyQuiz,
  PracticeCounts,
} from './types'
import { mockLearningMap } from './mock/learningMap'
import { mockRadarFeed, mockCarousel, mockHero, mockHeroList, mockClinicalFrontier, mockLiveNow } from './mock/feed'
import { mockGuidebooks } from './mock/guidebook'
import { mockCategories, mockCourses, mockCases, mockClasses } from './mock/theory'
import { mockCamps, mockCampDays, mockQuizQuestions, mockLeaderboard, mockDailyQuiz, mockPracticeCounts } from './mock/practice'
import { mockUserProfile, mockUserPoints, mockBadges, mockLearningStats, mockReports } from './mock/profile'

export async function getLearningMap(): Promise<LearningMap> {
  await delay(200)
  return mockLearningMap
}

export async function getRadarFeed(): Promise<FeedItem[]> {
  await delay(150)
  return mockRadarFeed
}

export async function getCarousel(): Promise<CarouselItem[]> {
  await delay(100)
  return mockCarousel
}

export async function getHero(): Promise<HeroItem> {
  await delay(100)
  return mockHero
}

export async function getHeroList(): Promise<HeroItem[]> {
  await delay(100)
  return mockHeroList
}

export async function getClinicalFrontier(): Promise<ClinicalFrontierItem[]> {
  await delay(150)
  return mockClinicalFrontier
}

export async function getLiveNow(): Promise<LiveNowItem | null> {
  await delay(100)
  return mockLiveNow
}

export async function getDailyQuiz(): Promise<DailyQuiz | null> {
  await delay(150)
  return mockDailyQuiz
}

export async function getPracticeCounts(): Promise<PracticeCounts> {
  await delay(100)
  return mockPracticeCounts
}

export async function getGuidebooks(): Promise<Guidebook[]> {
  await delay(150)
  return mockGuidebooks
}

export async function getTheoryCategories(): Promise<TheoryCategory[]> {
  await delay(150)
  return mockCategories
}

export async function getTheoryCourses(categoryId?: string): Promise<TheoryCourse[]> {
  await delay(150)
  if (categoryId) return mockCourses.filter((c) => c.categoryId === categoryId)
  return mockCourses
}

export async function getTheoryCases(): Promise<TheoryCase[]> {
  await delay(150)
  return mockCases
}

export async function getTheoryClasses(): Promise<TheoryClass[]> {
  await delay(150)
  return mockClasses
}

export async function getPracticeCamps(): Promise<PracticeCamp[]> {
  await delay(150)
  return mockCamps
}

export async function getPracticeCampDays(campId: string): Promise<PracticeDay[]> {
  await delay(150)
  return mockCampDays
}

export async function getQuizQuestions(taskId: string): Promise<QuizQuestion[]> {
  await delay(150)
  return mockQuizQuestions
}

export async function submitQuizAnswer(_taskId: string, _answers: Record<string, string | string[]>): Promise<{ passed: boolean; score: number }> {
  await delay(300)
  return { passed: true, score: 90 }
}

export async function getLeaderboard(_campId?: string): Promise<LeaderboardEntry[]> {
  await delay(150)
  return mockLeaderboard
}

export async function getUserProfile(): Promise<UserProfile> {
  await delay(100)
  return mockUserProfile
}

export async function getUserPoints(): Promise<UserPoints> {
  await delay(100)
  return mockUserPoints
}

export async function getBadges(): Promise<Badge[]> {
  await delay(100)
  return mockBadges
}

export async function getLearningStats(): Promise<LearningStats> {
  await delay(100)
  return mockLearningStats
}

export async function getProfileReports(): Promise<ProfileReport[]> {
  await delay(150)
  return mockReports
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
