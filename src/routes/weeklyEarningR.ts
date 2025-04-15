// src/routes/weeklyEarningR.ts
import express from 'express';
import { createEarning, getEarnings } from '../controllers/weeklyEarning';

const router = express.Router();

router.post('/', createEarning);  
router.get('/', getEarnings);     


export default router;