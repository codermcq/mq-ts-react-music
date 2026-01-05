import mqRequest from "@/services";

// export function getSongList(limit: number = 35) {
//   return mqRequest.get({
//     url: '/personalized',
//     params: {
//       limit: 35
//     }
//   })
// }

export function getPlayList(offset: number = 0, limit: number = 35, cat: string = '全部') {
  return mqRequest.get({
    url: '/top/playlist',
    params: {
      offset,
      limit,
      cat
    }
  })
}

export function getPlaylistCatlist() {
  return mqRequest.get({
    url: '/playlist/catlist'
  })
}
