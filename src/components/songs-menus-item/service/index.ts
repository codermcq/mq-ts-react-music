import mqRequest from "@/services";

export function getPlayTrackAll(id: number) {
  return mqRequest.get({
    url: '/playlist/track/all',
    params: {
      id
    }
  })
}
