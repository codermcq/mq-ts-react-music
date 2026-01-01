import mqRequest from "@/services";

export function getSongDetail(ids: number) {
  return mqRequest.get({
    url: 'song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return mqRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
