import mongoose from 'mongoose';

const DailyExpenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, default: 'Outros' }
});

export default mongoose.model('DailyExpense', DailyExpenseSchema);