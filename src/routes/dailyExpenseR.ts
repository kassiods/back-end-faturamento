// src/routes/dailyExpenseR.ts
import express from 'express';
import { createExpense, getExpenses } from '../controllers/dailyExpense';

const router = express.Router();

router.post('/', createExpense); 
router.get('/', getExpenses);    


export default router;