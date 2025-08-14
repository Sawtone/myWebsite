// utils/arrayUtils.ts

/**
 * 从数组中随机选择一个元素
 * @param arr - 源数组
 * @param seed - 0-1 之间，确保随机性
 * @returns 返回数组中被随机选择的结果
 */
export function randChoice<T>(arr: T[], seed: number = Math.random()): T {
    return arr[Math.floor(seed * arr.length)];
  }
  