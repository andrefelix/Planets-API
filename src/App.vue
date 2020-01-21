<template>
  <div id="app">
    <Planet />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Planet from './components/Planet.vue'

@Component({
  components: {
    Planet
  }
})
export default class App extends Vue {}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);

:root {
  --main-bg-color: #fff;
  --primary-color: #808080;
  --secondary-color: #a0a0a0;
}

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  color: #808080;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
