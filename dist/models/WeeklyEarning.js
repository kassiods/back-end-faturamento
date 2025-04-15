"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const weeklyEarningSchema = new mongoose_1.default.Schema({
    weekNumber: { type: Number, required: true },
    grossAmount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: String
});
exports.default = mongoose_1.default.model('WeeklyEarning', weeklyEarningSchema);
