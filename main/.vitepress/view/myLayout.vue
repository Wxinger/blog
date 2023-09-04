<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Home from "./home.vue";
import Footer from "./footer.vue"
const { Layout } = DefaultTheme;
const back = () => {
  history.back();
};
</script>

<template>
  <Layout>
    <template #doc-before>
      title
    </template>
    <template #doc-after>
      <div>
        <button @click="back">cd ··</button>
      </div>
      back????
    </template>
    <template #home-hero-before>
     <Home />
    </template>
    <template #home-features-after>
      <Footer />
    </template>
  </Layout>
  <!-- copywright -->
</template>

<style >
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
</style>