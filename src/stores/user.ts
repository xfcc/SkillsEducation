import { create } from 'zustand'

export interface BadgeState {
  id: string
  name: string
  unlocked: boolean
}

interface UserState {
  points: number
  badges: BadgeState[]
  /** 已解锁的课程 ID */
  unlockedCourseIds: Set<string>
  /** 已解锁的训练营 ID */
  unlockedCampIds: Set<string>
  /** 学习地图当前节点 ID */
  learningMapCurrentId: string | null
  setPoints: (points: number) => void
  addPoints: (delta: number) => void
  setBadges: (badges: BadgeState[]) => void
  unlockCourse: (id: string) => void
  unlockCamp: (id: string) => void
  setLearningMapCurrent: (id: string | null) => void
  isCourseUnlocked: (id: string) => boolean
  isCampUnlocked: (id: string) => boolean
  /** 消耗积分并解锁（模拟） */
  spendAndUnlockCourse: (courseId: string, cost: number) => boolean
  spendAndUnlockCamp: (campId: string, cost: number) => boolean
}

const DEFAULT_POINTS = 641
const DEFAULT_UNLOCKED_COURSES = ['c1', 'c2', 'c3']
const DEFAULT_UNLOCKED_CAMPS = ['camp-1']
const DEFAULT_LEARNING_MAP_CURRENT = 'node-03'

export const useUserStore = create<UserState>((set, get) => ({
  points: DEFAULT_POINTS,
  badges: [
    { id: 'b1', name: '入门学徒', unlocked: true },
    { id: 'b2', name: '室上速通关', unlocked: true },
    { id: 'b3', name: '房颤进阶', unlocked: false },
  ],
  unlockedCourseIds: new Set(DEFAULT_UNLOCKED_COURSES),
  unlockedCampIds: new Set(DEFAULT_UNLOCKED_CAMPS),
  learningMapCurrentId: DEFAULT_LEARNING_MAP_CURRENT,

  setPoints: (points) => set({ points }),
  addPoints: (delta) => set((s) => ({ points: Math.max(0, s.points + delta) })),
  setBadges: (badges) => set({ badges }),
  unlockCourse: (id) =>
    set((s) => ({
      unlockedCourseIds: new Set([...s.unlockedCourseIds, id]),
    })),
  unlockCamp: (id) =>
    set((s) => ({
      unlockedCampIds: new Set([...s.unlockedCampIds, id]),
    })),
  setLearningMapCurrent: (id) => set({ learningMapCurrentId: id }),

  isCourseUnlocked: (id) => get().unlockedCourseIds.has(id),
  isCampUnlocked: (id) => get().unlockedCampIds.has(id),

  spendAndUnlockCourse: (courseId, cost) => {
    const { points, unlockedCourseIds } = get()
    if (points >= cost && !unlockedCourseIds.has(courseId)) {
      set({
        points: points - cost,
        unlockedCourseIds: new Set([...unlockedCourseIds, courseId]),
      })
      return true
    }
    return false
  },
  spendAndUnlockCamp: (campId, cost) => {
    const { points, unlockedCampIds } = get()
    if (points >= cost && !unlockedCampIds.has(campId)) {
      set({
        points: points - cost,
        unlockedCampIds: new Set([...unlockedCampIds, campId]),
      })
      return true
    }
    return false
  },
}))
