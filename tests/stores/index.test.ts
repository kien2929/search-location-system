import supertest from 'supertest'
import { faker } from '@faker-js/faker'
import app from '../../index'
import { StoreType } from '../../src/interfaces/store.interface'
let request: any

beforeEach(() => {
  request = supertest(app)
})
afterEach(async () => {
  await app.close()
})

describe('/v1/stores', () => {
  test('create store success', async () => {
    const res = await request.post('/v1/stores').send({
      name: faker.company.name(),
      type: faker.helpers.enumValue(StoreType),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude()
    })
    expect(res.status).toBe(200)
  })

  test('create store failure', async () => {
    const res = await request.post('/v1/stores').send({
      name: faker.company.name(),
      type: '99',
      latitude: faker.location.latitude,
      longitude: faker.location.longitude
    })
    expect(res.status).toBe(400)
  })

  describe('/search', () => {
    test('search without query', async () => {
      const res = await request.get('/v1/stores/search')
      expect(res.status).toBe(400)
    })

    test('search with correct query', async () => {
      const res = await request.get('/v1/stores/search').query({ name: 'Test', type: 1 })
      expect(res.status).toBe(200)
    })

    test('search with wrong type', async () => {
      const res = await request.get('/v1/stores/search').query({ name: 'Test', type: 99 })
      expect(res.status).toBe(400)
    })

    test('search failure query', async () => {
      const res = await request.get('/v1/stores/search').query({ name: 'Test', type: 'aaa' })
      expect(res.status).toBe(400)
    })
  })

  describe('/nearby', () => {
    test('Search wrong query', async () => {
      const res = await request.get('/v1/stores/nearby').query({ latitude: 'aaa', longitude: 'bbb' })
      expect(res.status).toBe(400)
    })

    test('search with correct query', async () => {
      const res = await request.get('/v1/stores/nearby').query({ latitude: 17, longitude: -20, distance: 500 })
      expect(res.status).toBe(200)
    })
  })
})
