import { Service } from 'typedi'
import { IPlaylist, IPlaylistOwner } from '@/interfaces/playlist.inerface'
import { PlaylistModel, PlaylistOwnerModel } from '@/models/playlist.model'
import { isEmpty, isString, lowerCase } from 'lodash'
import { raw } from 'objection'

@Service()
export class PlaylistService {
  public async getPlaylist({ title, owner, page, limit }: { title?: string; owner?: string; page: number; limit: number }): Promise<IPlaylist[]> {
    const query = PlaylistModel.query()

    query.select(
      'playlist.id',
      'playlist.title',
      'playlist.singer',
      'playlist.album',
      'playlist.createdAt',
      raw('CASE WHEN playlist_owner.id IS NOT NULL THEN true ELSE false END').as('is_my_playlist'),
    )
    query.withGraphJoined('playlist_owner')
    query.modifyGraph('playlist_owner', builder => {
      builder.select('playlist_owner.id', 'playlist_owner.music_id')
    })

    if (isString(title) && !isEmpty(title)) {
      query.where('title', 'ilike', `%${title}%`)
    }

    if (isString(owner) && lowerCase(owner) === 'true') {
      query.whereNotNull('playlist_owner')
    }

    query.page(page, limit)
    query.orderBy('playlist.id')

    const playlist: IPlaylist[] = await query
    return playlist
  }

  public async addMusicPlaylist(music_id: number): Promise<IPlaylistOwner> {
    const query = await PlaylistOwnerModel.query().insert({
      music_id,
    })

    return query
  }

  public async deleteMusicPlaylist(id: number): Promise<void> {
    await PlaylistOwnerModel.query().delete().where({ music_id: id })
  }
}
