<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Home from "./home.vue"
import Footer from "./footer.vue"
const { Layout } = DefaultTheme;

</script>

<template>
  <Layout class="custom-layout">
    <template #doc-before>
     
    </template>
    <template #doc-after>
      
    </template>
    <template #home-hero-before>
      <Home />
    </template>
    <template #home-features-after>
      <Footer />
    </template>
  </Layout>
</template>

<style scoped>
button {
  display: inline-block;
  position: relative;
  color: var(--vp-c-color-d);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-color-d);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.custom-layout {
  background-size: 100% 100%;
}

</style>