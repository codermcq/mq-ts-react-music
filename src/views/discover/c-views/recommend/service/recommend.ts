import mqRequest from "@/services";

export function getBanners() {
  return mqRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend() {
  return mqRequest.get({
    url: '/personalized',
    params: {
      limit: 8
    }
  })
}

export function getNewAlbum() {
  return mqRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return mqRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getSettleSingers(limit = 5) {
  return mqRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
