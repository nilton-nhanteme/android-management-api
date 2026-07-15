import express, { type Request, type Response } from "express";
import dotenv from "dotenv";

// 1. Carregar as variavés de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;