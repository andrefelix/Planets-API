<template>
  <div class="card">
    <div class="card-content">
      <h4>{{ planet.name }}</h4>
      <p>
        <span>POPULATION:</span> {{ planetPopulation }}
      </p>
      <ul>
        <li>
          <label for="toggle-climate"><span>CLIMATE:</span></label>
          <input type="checkbox" id="toggle-climate">
          <ul class="list-info">
            <li
              v-for="(climate, index) in planet.climate"
              :key="index"
            >
              <span>{{ climate }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <label for="toggle-terrain"><span>TERRAIN:</span></label>
          <input type="checkbox" id="toggle-terrain">
          <ul class="list-info">
            <li
              v-for="(terrain, index) in planet.terrain"
              :key="index"
            >
              <span>{{ terrain }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <label for="toggle-featured-in-films"><span>FEATURED IN FILMS:</span></label>
          <input type="checkbox" id="toggle-featured-in-films">
          <ul class="list-info">
            <li
              v-for="(film, index) in planet.featuredInFilms"
              :key="index"
            >
              <span>{{ film }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PlanetInterface from '../interfaces/PlanetInterface'

@Component
export default class PlanetInfo extends Vue {
  @Prop() private planet!: PlanetInterface;

  /**
   * - Função computed, que identifica que a população de um Planet é desconhecida ou não, e
   * manipula como essa informação será entregue ao usuário.
   *
   * @function
   */
  get planetPopulation (): number | string {
    return this.planet.population !== undefined ? this.planet.population : 'unknown'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 315px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-content {
  text-align: left;
  border: 2px solid var(--primary-color);
}

.card-content h4 {
  text-align: center;
  border-bottom: 2px solid var(--primary-color);
  margin: 0;
  padding: 15px 0;
}

p {
  /* border: 2px solid var(--secondary-color); */
  margin: 10px 10px;
  padding: 10px;
}

.card-content > ul {
  border: 2px solid var(--secondary-color);
  list-style-type: none;
  margin: 10px 10px;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card-content > ul:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-content > ul:last-child {
  margin-bottom: 15px;
}

li ul {
  display: none;
  list-style-type: disc;
}

ul li span {
  display: block;
  padding: 10px;
  word-wrap: break-word;
  cursor: pointer;
}

[id^=toggle-] {
  display: none;
}

[id^=toggle-]:checked ~ .list-info {
  display: block;
}
</style>
