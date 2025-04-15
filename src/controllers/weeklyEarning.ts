import { Request, Response } from 'express';
import WeeklyEarning from '../models/WeeklyEarning';

export const createEarning = async (req: Request, res: Response) => {
  try {
    const newEarning = await WeeklyEarning.create(req.body);
    res.status(201).json(newEarning);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar receita' });
  }
};

export const getEarnings = async (req: Request, res: Response) => {
  try {
    const month = req.query.month as string;
    
    // Criar datas no formato correto (primeiro dia do mês)
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1);

    const earnings = await WeeklyEarning.find({
      startDate: { 
        $gte: startDate,
        $lt: endDate
      }
    });
    
    res.json(earnings);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar receitas', error: (error as Error).message });
  }
};