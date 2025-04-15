"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenses = exports.createExpense = void 0;
const DailyExpense_1 = __importDefault(require("../models/DailyExpense"));
const createExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Adicione validação
        if (!req.body.date || !req.body.amount) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }
        const expense = new DailyExpense_1.default(req.body);
        yield expense.save();
        res.status(201).json(expense);
    }
    catch (error) {
        res.status(500).json({
            error: 'Erro ao salvar despesa',
            details: error.message // Mostra detalhes do erro
        });
    }
});
exports.createExpense = createExpense;
const getExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenses = yield DailyExpense_1.default.find();
        res.json(expenses);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar despesas' });
    }
});
exports.getExpenses = getExpenses;
