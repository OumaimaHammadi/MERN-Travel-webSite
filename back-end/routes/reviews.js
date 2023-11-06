import express  from "express";

const router = express.Router()
import {createReview} from '../controllers/reviewController.js'
import { verifyUser } from "../utils/verifyToken.js";


router.post('/:tourId',verifyUser,createReview)



export default router 