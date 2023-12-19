import { Request, Response } from 'express'
import { getAmountUsers } from '../services/user.service'
import {
  getFavoriteStoresByUserId,
  addFavoriteStores,
  deleteFavoriteStoresByUserId
} from '../services/favorite-store.service'

export const getFavoriteStores = async (req: Request, res: Response) => {
  const { userId } = req.params
  const favoriteStores = await getFavoriteStoresByUserId(Number(userId))

  return res.send(favoriteStores)
}

export const postFavoriteStores = async (req: Request, res: Response) => {
  const { userId } = req.params
  const { storeId } = req.body
  await addFavoriteStores(Number(userId), Number(storeId))

  return res.send({ message: 'OK' })
}

export const deleteFavoriteStores = async (req: Request, res: Response) => {
  const { userId, storeId } = req.params
  await deleteFavoriteStoresByUserId(Number(userId), Number(storeId))

  return res.send({ message: 'OK' })
}

export const getUsers = async (req: Request, res: Response) => {
  const amount = 100
  const users = await getAmountUsers(amount)

  return res.send(users)
}
