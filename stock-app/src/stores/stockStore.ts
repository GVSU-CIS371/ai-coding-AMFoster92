import { defineStore } from "pinia";
import { getStockQuote } from "../api/stockApi";
import type { StockQuote } from "../types/stock.ts";

interface State {
  watchlist: string[];
  stocks: Record<string, StockQuote>;
}

export const useStockStore = defineStore("stocks", {
  state: (): State => ({
    watchlist: [],
    stocks: {}
  }),

  actions: {
    async fetchStock(symbol: string) {
      try {
        const data = await getStockQuote(symbol);
        this.stocks[symbol] = data;
      } catch (err) {
        console.error("API error", err);
      }
    },

    addToWatchlist(symbol: string) {
      if (!this.watchlist.includes(symbol)) {
        this.watchlist.push(symbol);
        localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
      }
    },

    removeFromWatchlist(symbol: string) {
      this.watchlist = this.watchlist.filter(s => s !== symbol);
      localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
    },

    loadWatchlist() {
      const saved = localStorage.getItem("watchlist");
      if (saved) {
        this.watchlist = JSON.parse(saved);
      }
    }
  }
});