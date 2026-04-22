<template>
  <div class="container">
    <h1>Watchlist</h1>

    <div v-if="store.watchlist.length === 0">
      No stocks added yet.
    </div>

    <div v-for="symbol in store.watchlist" :key="symbol" class="card">
      <h2>{{ symbol }}</h2>

      <div v-if="store.stocks[symbol]">
        <p>Price: ${{ store.stocks[symbol].c }}</p>
        <p>Change: {{ store.stocks[symbol].d }}</p>
        <p>% Change: {{ store.stocks[symbol].dp }}</p>
      </div>

      <button @click="refresh(symbol)">Refresh</button>
      <button @click="remove(symbol)">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStockStore } from "../stores/stockStore";

const store = useStockStore();

onMounted(() => {
  store.loadWatchlist();
  store.watchlist.forEach(symbol => {
    store.fetchStock(symbol);
  });
});

const refresh = (symbol: string) => {
  store.fetchStock(symbol);
};

const remove = (symbol: string) => {
  store.removeFromWatchlist(symbol);
};
</script>

<style>
.container {
  padding: 20px;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>