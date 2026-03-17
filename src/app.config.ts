export default defineAppConfig({
  // 启用组件按需注入：仅注入当前页面所需组件，降低启动耗时（基础库 2.11.1+）
  lazyCodeLoading: 'requiredComponents',
  pages: [
    'pages/index/index',
    'pages/theory/index',
    'pages/practice/index',
    'pages/profile/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '心技教育',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#8e8e93',
    selectedColor: '#0d7377',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      { pagePath: 'pages/index/index', text: '首页', iconPath: 'assets/tab-home.png', selectedIconPath: 'assets/tab-home-active.png' },
      { pagePath: 'pages/theory/index', text: '理论', iconPath: 'assets/tab-theory.png', selectedIconPath: 'assets/tab-theory-active.png' },
      { pagePath: 'pages/practice/index', text: '演练', iconPath: 'assets/tab-practice.png', selectedIconPath: 'assets/tab-practice-active.png' },
      { pagePath: 'pages/profile/index', text: '我的', iconPath: 'assets/tab-profile.png', selectedIconPath: 'assets/tab-profile-active.png' },
    ],
  },
  subpackages: [
    {
      root: 'subpackages/theory-course',
      name: 'theory-course',
      pages: ['course/index', 'case/index', 'class/index', 'guidebook/index', 'camp/index', 'task/index', 'literature/index'],
    },
    {
      root: 'subpackages/practice-tasks',
      name: 'practice-tasks',
      pages: ['quiz/index', 'leaderboard/index', 'utility-pvc/index', 'utility-aifv/index', 'utility-pvi/index'],
    },
    {
      root: 'subpackages/profile-reports',
      name: 'profile-reports',
      pages: ['report/index', 'settings/index'],
    },
  ],
})
