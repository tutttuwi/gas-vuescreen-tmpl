<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

if (typeof google !== 'undefined') {
  google.script.run.withSuccessHandler(() => {
    // 正常に動作したとき
  }).withFailureHandler((err: Error) => {
    // error処理
    console.log(err);
  }).someFunction('Hello', { name: 'Bob', age: 20 })
} else {
  // Vue.js単体で動作している時の処理
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
