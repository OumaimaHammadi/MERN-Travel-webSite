import express  from "express";
const router =express.Router()



import {
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser} from './../controllers/userController.js'


import {verifyUser,verifyAdmin } from '../utils/verifyToken.js'    





//update user
router.put('/:id',verifyUser,updateUser)

//delete user
router.delete('/:id',verifyUser,deleteUser)


//get Single user
router.get('/:id',verifyUser,getSingleUser)

//get All users
router.get('/',verifyAdmin,getAllUser)

export default router;