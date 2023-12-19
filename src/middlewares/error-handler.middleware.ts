import { NextFunction, Request, Response } from 'express'
import { Prisma } from '@prisma/client'

export const errorHandler = (err: Error & { status?: number }, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(400).send({
      errors: [
        {
          code: err.code,
          message: `Prisma error: ${err.code}`
        }
      ]
    })
  }
  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return res.status(400).send({ errors: [{ message: 'Prisma Unknown Error' }] })
  }

  return res.status(err.status || 500).send({ errors: [{ message: 'Internal Server Error' }] })
}
