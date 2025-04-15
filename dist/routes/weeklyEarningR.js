"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/weeklyEarningR.ts
const express_1 = __importDefault(require("express"));
const weeklyEarning_1 = require("../controllers/weeklyEarning");
const router = express_1.default.Router();
router.post('/', weeklyEarning_1.createEarning);
router.get('/', weeklyEarning_1.getEarnings);
exports.default = router;
