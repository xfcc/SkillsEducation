/**
 * 统一请求封装。当前为 Mock 阶段，接口在 api.ts 中直接返回 Mock 数据。
 * 接入真实后端时，可在此处使用 Taro.request 并统一处理：
 * - 鉴权（header 或 token）
 * - 错误与 loading
 * - 基础 URL 与超时
 */
import Taro from '@tarojs/taro'

export const BASE_URL = '' // 正式环境替换为后端 base URL

export interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: Record<string, unknown>
  header?: Record<string, string>
}

export async function request<T>(options: RequestOptions): Promise<T> {
  const { url, method = 'GET', data, header = {} } = options
  const fullUrl = BASE_URL ? `${BASE_URL}${url}` : url
  const res = await Taro.request({
    url: fullUrl,
    method,
    data,
    header: {
      'Content-Type': 'application/json',
      ...header,
    },
    timeout: 10000,
  })
  if (res.statusCode >= 200 && res.statusCode < 300) {
    return res.data as T
  }
  throw new Error(res.data?.message || `Request failed: ${res.statusCode}`)
}
