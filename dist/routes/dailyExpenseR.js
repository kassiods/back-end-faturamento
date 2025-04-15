"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/dailyExpenseR.ts
const express_1 = __importDefault(require("express"));
const dailyExpense_1 = require("../controllers/dailyExpense");
const router = express_1.default.Router();
router.post('/', dailyExpense_1.createExpense);
router.get('/', dailyExpense_1.getExpenses);
exports.default = router;
