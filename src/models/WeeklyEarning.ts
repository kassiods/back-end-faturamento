import mongoose from 'mongoose';

const weeklyEarningSchema = new mongoose.Schema({
  weekNumber: { type: Number, required: true },
  grossAmount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: String
});

export default mongoose.model('WeeklyEarning', weeklyEarningSchema);