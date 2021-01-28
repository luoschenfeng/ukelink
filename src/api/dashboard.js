import request from '@/utils/request'

/**
 * @description 首页表格 依据性别统计访问量
 * @param {object} [data]
 */
export function getPVBySexStatistics(data) {
  return request({
    url: 'api/statistics/PVBySex',
    data,
  })
}
