import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { Card, DataNumber } from '../../../components'
import { getLeaderboard } from '../../../services/api'
import type { LeaderboardEntry } from '../../../services/types'
import './index.scss'

export default function LeaderboardPage() {
  const [list, setList] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    getLeaderboard().then(setList)
  }, [])

  return (
    <ScrollView scrollY className="page-leaderboard">
      <View className="page-leaderboard__list">
        {list.map((entry) => (
          <Card key={entry.userId} className="leaderboard-item">
            <View className="leaderboard-item__rank">
              <Text className="leaderboard-item__rank-num">{entry.rank}</Text>
            </View>
            <View className="leaderboard-item__main">
              <Text className="leaderboard-item__name">{entry.name}</Text>
              <Text className="leaderboard-item__time">{entry.completedAt}</Text>
            </View>
            <DataNumber value={entry.score} suffix=" 分" size="sm" />
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}
