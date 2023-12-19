import { Request, Response } from 'express'
import { getStoresByNameAndType, getStoresByCoordinates, createStoreService } from '../services/store.service'

export const filterByNameAndType = async (req: Request, res: Response) => {
  const { name, type } = req.query
  const stores = await getStoresByNameAndType(name as string, Number(type))

  return res.send(stores)
}

export const getByCoordinates = async (req: Request, res: Response) => {
  const { latitude, longitude, distance } = req.query
  const stores = await getStoresByCoordinates(Number(latitude), Number(longitude), Number(distance))

  return res.send(stores)
}

export const createStore = async (req: Request, res: Response) => {
  const stores = await createStoreService(req.body)

  return res.send(stores)
}
