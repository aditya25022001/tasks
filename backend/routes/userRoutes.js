import express from 'express'
import { updateCredAndReturnTaxIncome } from '../controllers/userController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/getTaxInc').post(authenticate,updateCredAndReturnTaxIncome)

export default router