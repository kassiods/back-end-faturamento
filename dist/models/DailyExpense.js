"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DailyExpenseSchema = new mongoose_1.default.Schema({
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, default: 'Outros' }
});
exports.default = mongoose_1.default.model('DailyExpense', DailyExpenseSchema);
