import mqRequest from "@/services";

export function getCurrentPlaylist(id: number) {
  return mqRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
