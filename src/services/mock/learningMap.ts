import type { LearningMap } from '../types'

export const mockLearningMap: LearningMap = {
  currentId: 'node-03',
  nodes: [
    { id: 'node-01', title: '01 基础电生理概念', order: 1, completed: true, isCurrent: false },
    { id: 'node-02', title: '02 导管操作入门', order: 2, completed: true, isCurrent: false },
    { id: 'node-03', title: '03 独立室上速手术', order: 3, completed: false, isCurrent: true },
    { id: 'node-04', title: '04 房颤消融进阶', order: 4, completed: false, isCurrent: false },
    { id: 'node-05', title: '05 室早精确定位', order: 5, completed: false, isCurrent: false },
  ],
}
