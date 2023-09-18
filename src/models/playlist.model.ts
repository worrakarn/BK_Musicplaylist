import { Model, ModelObject } from 'objection'
import { IPlaylist, IPlaylistOwner } from '@interfaces/playlist.inerface'

export class PlaylistModel extends Model implements IPlaylist {
  id: number
  title: string
  singer: string
  album: string
  createdAt: string
  updatedAt: string

  static tableName = 'playlist' // database table name
  static idColumn = 'id' // id column name

  static relationMappings() {
    return {
      playlist_owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: PlaylistOwnerModel,
        join: {
          from: 'playlist.id',
          to: 'playlist_owner.music_id',
        },
      },
    }
  }
}

export type PlaylistShape = ModelObject<PlaylistModel>

export class PlaylistOwnerModel extends Model implements IPlaylistOwner {
  id: number
  music_id: number
  createdAt: string
  updatedAt: string

  static tableName = 'playlist_owner' // database table name
  static idColumn = 'id' // id column name

  static relationMappings() {
    return {
      playlist: {
        relation: Model.HasOneRelation,
        modelClass: PlaylistModel,
        join: {
          from: 'playlist_owner.music_id',
          to: 'playlist.id',
        },
      },
    }
  }
}

export type PlaylistOwnerShape = ModelObject<PlaylistOwnerModel>
