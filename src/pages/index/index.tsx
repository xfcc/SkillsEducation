import { View, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, Tag } from '../../components'
import { getRadarFeed, getCarousel } from '../../services/api'
import type { FeedItem, CarouselItem } from '../../services/types'
import './index.scss'

export default function Index() {
  const [carouselList, setCarouselList] = useState<CarouselItem[]>([])
  const [feedList, setFeedList] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getRadarFeed(), getCarousel()]).then(([feedRes, carouselRes]) => {
      setFeedList(feedRes)
      setCarouselList(carouselRes)
      setLoading(false)
    })
  }, [])

  const goToClass = () => {
    Taro.navigateTo({ url: '/subpackages/theory-course/class/index' })
  }

  return (
    <ScrollView scrollY className="page-index">
      {/* 快捷入口 */}
      <View className="section">
        <Text className="section__title">快捷入口</Text>
        <Card>
          <View className="engine-actions">
            <View className="engine-item" onClick={() => {}}>
              <Text className="engine-item__label">AI 智能助手</Text>
              <Text className="engine-item__desc">临床问题随时问，答案直达</Text>
            </View>
            <View className="engine-item" onClick={goToClass}>
              <Text className="engine-item__label">我的班级</Text>
              <Text className="engine-item__desc">教研室与班级活动</Text>
              <View className="engine-item__arrow">›</View>
            </View>
          </View>
        </Card>
      </View>

      {/* 精选推荐轮播 */}
      {carouselList.length > 0 && (
        <View className="section">
          <Text className="section__title">精选推荐</Text>
          <Swiper className="feed-carousel" autoplay circular indicatorDots>
            {carouselList.map((item) => (
              <SwiperItem key={item.id}>
                <View className="feed-carousel__item">
                  <Text className="feed-carousel__title">{item.title}</Text>
                </View>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
      )}

      {/* 资讯与直播 */}
      <View className="section">
        <Text className="section__title">资讯与直播</Text>
        <Card noPadding>
          {feedList.length === 0 && !loading ? (
            <View className="radar-empty">
              <Text>暂无内容</Text>
            </View>
          ) : (
            <View className="radar-list">
              {feedList.map((item) => (
                <View key={item.id} className="radar-item" onClick={() => {}}>
                  <View className="radar-item__head">
                    <Tag type={item.type === 'live' ? 'primary' : 'default'}>
                      {item.type === 'live' ? '直播' : '文献'}
                    </Tag>
                    <Text className="radar-item__time">{item.time}</Text>
                  </View>
                  <Text className="radar-item__title">{item.title}</Text>
                </View>
              ))}
            </View>
          )}
        </Card>
      </View>
    </ScrollView>
  )
}
