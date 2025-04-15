// src/controllers/dailyExpense.ts
import { Request, Response } from 'express';
import DailyExpense from '../models/DailyExpense';

export const createExpense = async (req: Request, res: Response) => {
  try {
    // Adicione validação
    if (!req.body.date || !req.body.amount) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }
    
    const expense = new DailyExpense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ 
      error: 'Erro ao salvar despesa',
      details: (error as Error).message // Mostra detalhes do erro
    });
  }
};

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await DailyExpense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar despesas' });
  }
};