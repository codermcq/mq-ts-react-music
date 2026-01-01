
const timeRexExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString: string) {
  // 1.拿到一行行的歌词
  const lines: string[] = lyricString.split('\n')

  // 2.对每句歌词进行解析, 解析成对应的对象
  const lyrics: any[] = []
  for (const line of lines) {
    // 1.匹配结果
    const result = timeRexExp.exec(line)
    if (!result) continue

    // 2.获取每一组数据
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 = result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const time = time1 + time2 + time3

    const text = line.replace(timeRexExp, '')

    lyrics.push({time, text})
  }

  return lyrics
}
