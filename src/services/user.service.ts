import { prisma } from '../database'

export const getAmountUsers = async (amount: number) => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true
    },
    take: amount
  })
}
