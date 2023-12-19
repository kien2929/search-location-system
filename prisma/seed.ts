import { User } from '../src/interfaces/user.interface'
import { Store, StoreType } from '../src/interfaces/store.interface'
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()
const MAX_USERS = 20
const MAX_STORES = 50000
const seedUsers = async (): Promise<void> => {
  const fakeUsers = faker.helpers.uniqueArray<User>(
    () => ({
      name: faker.person.fullName(),
      password: faker.internet.password(),
      email: faker.internet.email()
    }),
    MAX_USERS
  )

  await prisma.user.createMany({ data: fakeUsers })
}

const seedStores = async (): Promise<void> => {
  const fakeStores = faker.helpers.uniqueArray<Store>(
    () => ({
      name: faker.company.name(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      type: faker.helpers.enumValue(StoreType)
    }),
    MAX_STORES
  )

  await prisma.store.createMany({ data: fakeStores })
}

async function seed(): Promise<void> {
  await Promise.all([seedUsers(), seedStores()])
}

async function main(): Promise<void> {
  let isError: boolean = false
  try {
    await seed()
  } catch (e) {
    isError = true
    console.error(e)
  } finally {
    await prisma.$disconnect()
    process.exit(isError ? 1 : 0)
  }
}

void main()
