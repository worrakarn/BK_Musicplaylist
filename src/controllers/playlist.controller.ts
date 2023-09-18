import { IReqIdPlaylist, IReqPlaylist } from '@/interfaces/playlist.inerface'
import { PlaylistService } from '@/services/playlist.service'
import { HttpSuccess } from '@/utils/HttpSuccess'
import { success } from '@/utils/rscode'
import { NextFunction, Request, Response } from 'express'
import { Container } from 'typedi'

export class PlaylistController {
  public playlistService = Container.get(PlaylistService)

  public paylist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: IReqPlaylist | any = req.query
      const rs = await this.playlistService.getPlaylist({ ...data })
      res.status(200).json(new HttpSuccess('success', success, rs))
    } catch (error) {
      next(error)
    }
  }

  public paylistAdd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: IReqIdPlaylist = req.body
      await this.playlistService.addMusicPlaylist(data.id)
      res.status(201).json(new HttpSuccess('success', success))
    } catch (error) {
      next(error)
    }
  }

  public paylistDelete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: IReqPlaylist | any = req.params
      await this.playlistService.deleteMusicPlaylist(data.id)
      res.status(200).json(new HttpSuccess('success', success))
    } catch (error) {
      next(error)
    }
  }
}

export default PlaylistController
