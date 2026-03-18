import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function ClassDetail() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="班级详情"
        subtitle="班级成员、任务与讨论区正在开发中。"
        meta={{ id: params?.id, name: params?.name }}
      />
    </View>
  )
}

