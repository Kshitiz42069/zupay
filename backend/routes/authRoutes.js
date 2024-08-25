import express from 'express'
import {login,signin,logout} from '../controller/authController.js'
const router = express.Router();

router.post('/login',login);
router.post('/signin',signin);
router.post('/logout',logout);

export default router;