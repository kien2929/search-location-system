import express from 'express'
import 'express-async-errors'
import store from './store'
import user from './user'

export const router = express.Router()

router.use('/v1/stores', store)
router.use('/v1/users', user)
