import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dailyRoutes from './routes/dailyExpenseR';
import weeklyRoutes from './routes/weeklyEarningR';

dotenv.config();

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro de conexão:', err));

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Se precisar de cookies/auth
}));
app.use(express.json());

// Rotas
app.use('/api/transactions', dailyRoutes);     
app.use('/api/earnings', weeklyRoutes);

// Middleware 404 (SEMPRE ÚLTIMO)
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});