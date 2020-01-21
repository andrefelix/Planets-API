<template>
  <div class="button-container">
    <button @click="nextPlanet">NEXT</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PlanetNextButton extends Vue {
  /**
   * - Função que emite um evento ao componente pai (Planet.vue), para executar o sorteio de um novo
   * Planet.
   *
   * @function
   */
  nextPlanet () {
    this.$emit('raffle-planet')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-container {
  margin: 25px;
}

button {
  padding: 10px;
  width: 105px;
  background-color: #fff;
  border: 2px solid var(--secondary-color);
  outline: none;
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

button:active {
  background-color: #ccc;
  transform: translateY(4px);
}
</style>
