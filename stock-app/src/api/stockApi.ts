import axios from "axios";
import type { StockQuote } from "../types/stock.ts";

const API_KEY = "d7kdnrpr01qiqbcu02pgd7kdnrpr01qiqbcu02q0";
const BASE_URL = "https://finnhub.io/api/v1";

export const getStockQuote = async (symbol: string): Promise<StockQuote> => {
  const res = await axios.get<StockQuote>(`${BASE_URL}/quote`, {
    params: {
      symbol,
      token: API_KEY
    }
  });
  return res.data;
};