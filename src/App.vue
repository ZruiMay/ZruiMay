<!--
 * @Date: 2023-03-29 13:09:36
 * @LastEditors: Zrui
 * @LastEditTime: 2023-04-18 20:10:49
 * @FilePath: /ZruiBlog/src/App.vue
 * @Description: 描述
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="root">
    <Header></Header>
    <Content class="content"></Content>
    <Footer></Footer>
  </div>
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
.root{
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.content{
  flex: 1;
}
</style>
