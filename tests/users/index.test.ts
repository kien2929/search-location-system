import supertest from 'supertest'
import app from '../../index'
import { prisma } from '../../src/database'
let request: any

beforeEach(() => {
  request = supertest(app)
})
beforeEach(async () => {
  await app.close()
})

describe('/v1/users', () => {
  test('get list user', async () => {
    const res = await request.get('/v1/users')
    expect(res.status).toBe(200)
  })
  describe('/favorite-stores', () => {
    beforeAll(async () => {
      try {
        await prisma.favoriteStore.delete({
          where: {
            idx_user_id_store_id: {
              userId: 1,
              storeId: 499
            }
          }
        })
      } catch (error) {
        console.log('Do not have favorite store before')
      }
    })
    test('create favorite store', async () => {
      const res = await request.post('/v1/users/1/favorite-stores').send({ storeId: 499 })
      expect(res.status).toBe(200)
    })

    test('create duplicate favorite store', async () => {
      const res = await request.post('/v1/users/1/favorite-stores').send({ storeId: 499 })
      expect(res.status).toBe(400)
    })

    test('get favorite store', async () => {
      const res = await request.get('/v1/users/1/favorite-stores')
      expect(res.status).toBe(200)
    })

    test('delete favorite store', async () => {
      const res = await request.delete('/v1/users/1/favorite-stores/499')
      expect(res.status).toBe(200)
    })

    test('delete favorite store failure', async () => {
      const res = await request.delete('/v1/users/1/favorite-stores/aa')
      expect(res.status).toBe(400)
    })
  })
})
