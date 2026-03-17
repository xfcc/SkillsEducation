import { View, Text, ScrollView, Input, Swiper, SwiperItem, Image } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, Tag } from '../../components'
import { getHeroList, getClinicalFrontier, getLiveNow } from '../../services/api'
import type { HeroItem, ClinicalFrontierItem, LiveNowItem } from '../../services/types'
import './index.scss'

export default function Index() {
  const [heroList, setHeroList] = useState<HeroItem[]>([])
  const [frontierList, setFrontierList] = useState<ClinicalFrontierItem[]>([])
  const [liveNow, setLiveNow] = useState<LiveNowItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getHeroList(), getClinicalFrontier(), getLiveNow()]).then(([h, f, l]) => {
      setHeroList(h)
      setFrontierList(f)
      setLiveNow(l ?? null)
      setLoading(false)
    })
  }, [])

  const goToHero = (item: HeroItem) => {
    if (item?.link) Taro.navigateTo({ url: item.link })
  }

  const isPrimaryCategory = (c: ClinicalFrontierItem['category']) =>
    c === '经典病例' || c === '病例复盘'

  return (
    <View className="page-index">
      {/* 顶栏：搜索 + 通知 */}
      <View className="index-header">
        <View className="index-header__search">
          <Input
            className="index-header__input"
            placeholder="搜索文献、病例或术式…"
            placeholderClass="index-header__placeholder"
            disabled
          />
        </View>
        <View className="index-header__bell">
          <View className="index-header__bell-dot" />
          <Image
            className="index-header__bell-icon"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'/%3E%3Cpath d='M13.73 21a2 2 0 0 1-3.46 0'/%3E%3C/svg%3E"
            mode="aspectFit"
          />
        </View>
      </View>

      <ScrollView scrollY className="index-scroll" enhanced showScrollbar={false}>
        {/* Hero 轮播 */}
        {heroList.length > 0 && (
          <Swiper
            className="index-hero-swiper"
            autoplay
            circular
            indicatorDots
            indicatorColor="rgba(255,255,255,0.4)"
            indicatorActiveColor="#fff"
          >
            {heroList.map((hero, i) => (
              <SwiperItem key={hero.id}>
                <View className="index-hero" onClick={() => goToHero(hero)}>
                  <View className="index-hero__gradient" />
                  <View className="index-hero__content">
                    <Text className="index-hero__badge">{hero.badge}</Text>
                    <Text className="index-hero__title">{hero.title}</Text>
                    <Text className="index-hero__meta">{hero.meta}</Text>
                  </View>
                </View>
              </SwiperItem>
            ))}
          </Swiper>
        )}

        {/* 临床前沿 */}
        <View className="index-section">
          <View className="index-section__head">
            <Text className="index-section__title">临床前沿</Text>
            <Text className="index-section__filter">筛选</Text>
          </View>
          {loading ? (
            <View className="index-empty"><Text>加载中…</Text></View>
          ) : (
            <View className="index-frontier">
              {frontierList.map((item) => (
                <Card key={item.id} className="index-frontier-card">
                  <View className="index-frontier-card__head">
                    <Tag type={isPrimaryCategory(item.category) ? 'primary' : 'default'}>
                      {item.category}
                    </Tag>
                    <Text className="index-frontier-card__date">{item.date}</Text>
                  </View>
                  <Text className="index-frontier-card__title">{item.title}</Text>
                  <Text className="index-frontier-card__excerpt">{item.excerpt}</Text>
                </Card>
              ))}
            </View>
          )}
        </View>
        <View className="index-scroll-bottom" />
      </ScrollView>

      {/* 直播浮层 */}
      {liveNow && (
        <View
          className="index-live-float"
          onClick={() => {}}
        >
          <View className="index-live-float__dot-wrap">
            <View className="index-live-float__ping" />
            <View className="index-live-float__dot" />
          </View>
          <View className="index-live-float__text">
            <Text className="index-live-float__label">Live 正在直播</Text>
            <Text className="index-live-float__title">{liveNow.title}</Text>
          </View>
        </View>
      )}
    </View>
  )
}
