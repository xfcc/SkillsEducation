import { View, Text } from '@tarojs/components'
import './index.scss'

type UnderDevelopmentProps = {
  title: string
  subtitle?: string
  meta?: Record<string, string | number | undefined | null>
}

export function UnderDevelopment({ title, subtitle, meta }: UnderDevelopmentProps) {
  const entries = Object.entries(meta ?? {}).filter(([, v]) => v !== undefined && v !== null && `${v}`.length > 0)

  return (
    <View className="underdev">
      <View className="underdev__card">
        <Text className="underdev__title">{title}</Text>
        <Text className="underdev__subtitle">{subtitle ?? '该功能正在开发中，敬请期待。'}</Text>

        {entries.length > 0 && (
          <View className="underdev__meta">
            {entries.map(([k, v]) => (
              <View key={k} className="underdev__meta-row">
                <Text className="underdev__meta-key">{k}</Text>
                <Text className="underdev__meta-val">{String(v)}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  )
}

