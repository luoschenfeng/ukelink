import request from '@/utils/request'

/**
 * @description 首页表格 依据性别统计访问量
 * @param {object} [params]
 */
export function getPVBySexStatistics(params) {
  return request({
    url: 'api/statistics/PVBySex',
    params,
  })
}
