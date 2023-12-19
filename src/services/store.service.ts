import { prisma } from '../database'
import { Store, StoreType } from '../interfaces/store.interface'

export const createStoreService = async (store: Store) => {
  return prisma.store.create({
    data: store
  })
}

export const getStoresByNameAndType = async (name: string, type: StoreType) => {
  return prisma.store.findMany({
    where: {
      name: {
        contains: name
      },
      type: {
        equals: type
      }
    }
  })
}

export const getStoresByCoordinates = async (latitude: number, longitude: number, distance: number) => {
  const distanceInMeters = Math.round(distance * 1000)
  return prisma.$queryRaw`SELECT
      id,
      name,
      type,
      latitude,
      longitude,
      ST_Distance_Sphere(
          POINT(longitude, latitude),
          POINT(${longitude}, ${latitude})
      ) / 1000 AS distance
    FROM
      store
    WHERE
      ST_Distance_Sphere(
          POINT(longitude, latitude),
          POINT(${longitude}, ${latitude})
      ) <= ${distanceInMeters};`
}
