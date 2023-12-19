import { prisma } from '../database'

export const getFavoriteStoresByUserId = async (userId: number) => {
  return prisma.favoriteStore.findMany({
    select: {
      store: true
    },
    where: {
      userId
    }
  })
}

export const addFavoriteStores = async (userId: number, storeId: number) => {
  return prisma.favoriteStore.create({
    data: {
      userId,
      storeId
    }
  })
}

export const deleteFavoriteStoresByUserId = async (favoriteStoreId: number) => {
  return prisma.favoriteStore.delete({
    where: {
      id: favoriteStoreId
    }
  })
}
