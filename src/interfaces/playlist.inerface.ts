export interface IPlaylist {
  id: number
  title: string
  singer: string
  album: string
  createdAt: string
  updatedAt: string
}

export interface IPlaylistOwner {
  id: number
  music_id: number
  createdAt: string
  updatedAt: string
}

export interface IReqPlaylist {
  title: string
  owner: boolean
  page: number
  limit: number
}

export interface IReqIdPlaylist {
  id: number
}
