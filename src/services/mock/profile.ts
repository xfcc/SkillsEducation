import type { UserProfile, UserPoints, Badge, LearningStats, ProfileReport } from '../types'

export const mockUserProfile: UserProfile = {
  id: 'u1',
  name: '医生用户',
  avatar: '',
  department: '心血管内科',
  position: '主治医师',
}

export const mockUserPoints: UserPoints = {
  points: 641,
}

export const mockBadges: Badge[] = [
  { id: 'b1', name: '入门学徒', unlocked: true },
  { id: 'b2', name: '室上速通关', unlocked: true },
  { id: 'b3', name: '房颤进阶', unlocked: false },
]

export const mockLearningStats: LearningStats = {
  totalMinutes: 1280,
}

export const mockReports: ProfileReport[] = [
  { id: 'r1', type: 'AIFV', title: 'AIFV 诊断报告', date: '2024-03-15' },
  { id: 'r2', type: 'iEP', title: 'iEP 学习报告', date: '2024-03-14' },
  { id: 'r3', type: 'department', title: '科室发展报告', date: '2024-03-10' },
  { id: 'r4', type: 'journey', title: '学习旅程报告', date: '2024-03-01' },
]
