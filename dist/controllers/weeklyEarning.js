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
exports.getEarnings = exports.createEarning = void 0;
const WeeklyEarning_1 = __importDefault(require("../models/WeeklyEarning"));
const createEarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEarning = yield WeeklyEarning_1.default.create(req.body);
        res.status(201).json(newEarning);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar receita' });
    }
});
exports.createEarning = createEarning;
const getEarnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const month = req.query.month;
        // Criar datas no formato correto (primeiro dia do mês)
        const startDate = new Date(`${month}-01`);
        const endDate = new Date(startDate);
        endDate.setMonth(startDate.getMonth() + 1);
        const earnings = yield WeeklyEarning_1.default.find({
            startDate: {
                $gte: startDate,
                $lt: endDate
            }
        });
        res.json(earnings);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar receitas', error: error.message });
    }
});
exports.getEarnings = getEarnings;
