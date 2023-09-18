import { Router } from 'express'
import IndexController from '@controllers/index.controller'
import PlaylistController from '@controllers/playlist.controller'
import { Routes } from '@interfaces/routes.interface'
import validationMiddleware from '@/middlewares/validation.middleware'
import { ReqAddPlaylist, ReqDeletePlaylist, ReqPlaylist } from '@/dtos/playlist.dto'

class IndexRoute implements Routes {
  public path = '/'
  public router = Router()
  public indexController = new IndexController()
  public playlistController = new PlaylistController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}healthy`, this.indexController.index)
    this.router.get(`${this.path}playlist`, validationMiddleware(ReqPlaylist, 'query'), this.playlistController.paylist)
    this.router.post(`${this.path}playlist/owner`, validationMiddleware(ReqAddPlaylist, 'body'), this.playlistController.paylistAdd)
    this.router.delete(`${this.path}playlist/owner/:id`, validationMiddleware(ReqDeletePlaylist, 'params'), this.playlistController.paylistDelete)
  }
}

export default IndexRoute
