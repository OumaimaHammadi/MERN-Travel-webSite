import express  from "express";

import { verifyUser } from "../utils/verifyToken.js";
import { createBooking,getBooking,getAllBookings } from "../controllers/bookingController.js";

const router = express.Router()
router.get('/',verifyUser,getAllBookings)

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking )




export default router 