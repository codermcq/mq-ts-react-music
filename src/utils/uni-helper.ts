export function scrollTo(element: any, to: any, duration: number) {
  // 如果持续时间为0, 不进行滚动
  if (duration <= 0) return
  // 计算需要滚动的总距离
  let difference = to - element.scrollTop
  // 计算10毫秒需要滚动的距离
  let perTick = (difference / duration) * 10

  setTimeout(function () {
    // 每次执行, 将当前滚动的位置增加perTick, 直接增加元素距离顶部的滚动距离, 达到滚动的效果
    // 将元素的scrollTop滚动到对应的位置
    element.scrollTop = element.scrollTop + perTick
    // 如果已经滚动到目标位置, 停止递归
    if (element.scrollTop === to) return
    // 递归调用, 继续滚动
    scrollTo(element, to, duration - 10)
  }, 10)
}
