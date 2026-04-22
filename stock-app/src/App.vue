<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/watchlist">Watchlist</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
nav {
  padding: 10px;
  background: #222;
}

a {
  color: white;
  margin-right: 10px;
}
</style>