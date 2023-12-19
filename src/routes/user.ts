import express from 'express'
import { param, body } from 'express-validator'
import { validate } from '../middlewares/validate'
import { getUsers, getFavoriteStores, postFavoriteStores, deleteFavoriteStores } from '../controllers/user.controller'

const router = express.Router()

const getFavoriteStoresValidate = [param('userId').isInt().toInt()]
const postFavoriteStoresValidate = [param('userId').isInt().toInt(), body('storeId').isInt().toInt()]
const deleteFavoriteStoresValidate = [param('userId').isInt().toInt(), param('favoriteStoreId').isInt().toInt()]

router.get('/', getUsers)
router.get('/:userId/favorite-stores', validate(getFavoriteStoresValidate), getFavoriteStores)
router.post('/:userId/favorite-stores', validate(postFavoriteStoresValidate), postFavoriteStores)
router.delete('/:userId/favorite-stores/:favoriteStoreId', validate(deleteFavoriteStoresValidate), deleteFavoriteStores)

export default router
