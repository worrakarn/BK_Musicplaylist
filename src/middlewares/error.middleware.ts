import { NextFunction, Request, Response } from 'express'
import { HttpException } from '@exceptions/HttpException'
import { logger } from '@utils/logger'
import { internal_server_error } from '@/utils/rscode'
import { NODE_ENV } from '@/config'

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500
    const message: string = NODE_ENV === 'production' && status === 500 ? 'Something went wrong' : error.message
    const rs_status: number = error.rs_status || 0
    const code: string = error.code || internal_server_error
    const rs_data: Array<any> = error.rs_data || []

    if (status === 500) {
      logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${error.message}`)
    }
    res.status(status).json({ rs_status, message, code, rs_data })
  } catch (error) {
    next(error)
  }
}

export default errorMiddleware
