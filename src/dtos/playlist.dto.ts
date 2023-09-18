import { IReqIdPlaylist, IReqPlaylist } from '@/interfaces/playlist.inerface'
import { IsBooleanString, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator'

export class ReqPlaylist implements IReqPlaylist {
  @IsOptional()
  @IsString()
  title: string

  @IsOptional()
  @IsBooleanString()
  owner: boolean

  @IsNumberString()
  page: number

  @IsNumberString()
  limit: number
}

export class ReqAddPlaylist implements IReqIdPlaylist {
  @IsNumber()
  id: number
}

export class ReqDeletePlaylist implements IReqIdPlaylist {
  @IsNumberString()
  id: number
}
