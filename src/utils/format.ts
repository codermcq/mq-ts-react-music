import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration'

export function formatCount(count: number) {
  if (count > 100000000) {
    return Math.ceil(count / 100000000).toFixed(1) + '亿'
  } else if (count > 10000) {
    return Math.ceil(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(imgUrl: string, width: number, height: number = width) {
  return imgUrl + `?params=${width}x${height}`
}

dayjs.extend(duration)

export function formatTime(time: number) {
  const duration = dayjs.duration(time)
  const minutes = duration.minutes().toString().padStart(2, '0')
  const seconds = duration.seconds().toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

export function formatDate(timestamp: number) {
  return dayjs(timestamp).format('YYYY-MM-DD')
}