<template>
  <div class="container">
    <h1>Stock Search</h1>

    <input v-model="symbol" placeholder="AAPL" />
    <button @click="search">Search</button>

    <div v-if="stock">
      <h2>{{ symbol.toUpperCase() }}</h2>
      <p>Price: ${{ stock.c }}</p>
      <p>Change: {{ stock.d }}</p>
      <p>% Change: {{ stock.dp }}</p>

      <button @click="add">Add to Watchlist</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStockStore } from "../stores/stockStore.ts";
import type { StockQuote } from "../types/stock.ts";

const store = useStockStore();
const symbol = ref<string>("");

const stock = computed<StockQuote | undefined>(() => {
  return store.stocks[symbol.value];
});

const search = async () => {
  if (!symbol.value) return;
  await store.fetchStock(symbol.value.toUpperCase());
};

const add = () => {
  store.addToWatchlist(symbol.value.toUpperCase());
};
</script>

<style>
.container {
  padding: 20px;
}
</style>