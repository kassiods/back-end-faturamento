"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const dailyExpenseR_1 = __importDefault(require("./routes/dailyExpenseR"));
const weeklyEarningR_1 = __importDefault(require("./routes/weeklyEarningR"));
dotenv_1.default.config();
// Conexão com MongoDB
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro de conexão:', err));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Se precisar de cookies/auth
}));
app.use(express_1.default.json());
// Rotas
app.use('/api/transactions', dailyExpenseR_1.default);
app.use('/api/earnings', weeklyEarningR_1.default);
// Middleware 404 (SEMPRE ÚLTIMO)
app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
