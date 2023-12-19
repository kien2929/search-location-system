import express from 'express'
import { query, body } from 'express-validator'
import { validate } from '../middlewares/validate'
import { StoreType } from '../interfaces/store.interface'
import { filterByNameAndType, getByCoordinates, createStore } from '../controllers/store.controller'

const router = express.Router()

const isValidEnum = (value: any, enumObject: any) => Object.values(enumObject).includes(value)

const filterByNameAndTypeValidate = [
  query('name').isString().notEmpty(),
  query('type')
    .isInt()
    .custom((value) => isValidEnum(value, StoreType))
    .toInt()
]
const getByCoordinatesValidate = [
  query('latitude').isFloat(),
  query('longitude').isFloat(),
  query('distance').isFloat()
]
const postStoreValidate = [
  body('name').isString().notEmpty(),
  body('type')
    .isInt()
    .custom((value) => isValidEnum(value, StoreType))
    .toInt(),
  body('latitude').isFloat(),
  body('longitude').isFloat()
]

router.get('/search', validate(filterByNameAndTypeValidate), filterByNameAndType)
router.get('/nearby', validate(getByCoordinatesValidate), getByCoordinates)
router.post('/', validate(postStoreValidate), createStore)

export default router
