import express from 'express';
import { getUser, postUser } from '../controller/controller.js';
const router = express.Router();
router.get('/', getUser)
router.post('/', postUser)

export default router;