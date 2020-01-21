<template>
  <div>
    <PlanetInfo :planet="{ ...raffledPlanet }" />
    <PlanetNextButton @raffle-planet="rafflePlanet" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PlanetInterface from '../interfaces/PlanetInterface'
import PlanetInfo from './PlanetInfo.vue'
import PlanetNextButton from './PlanetNextButton.vue'
import SWAPIFilmInterface from '../interfaces/SWAPIFilmInterface'
import SWAPIPlanetInterface from '../interfaces/SWAPIPlanetInterface'
import SWAPIService from '../services/SWAPIService'

@Component({
  components: {
    PlanetInfo,
    PlanetNextButton
  }
})
export default class Planet extends Vue {
  private planets: PlanetInterface[] = []
  private qtdPlanets = 0

  public raffledPlanet: PlanetInterface = {} as PlanetInterface

  /**
   * - Função que, dado uma url do tipo string, retorna seu id convertido para number.
   * O padrão da API requisitada é sempre devolver uma url de acesso direto ao objeto, e para isso
   * ela informa o id na url.
   *
   * @function
   * @param {string} url
   * @returns {number}
   */
  private getIdFromUrl (url: string): number {
    const urlSplit = url.split('/')
    let id = ''

    while (id === '') {
      id = urlSplit.pop() || ''
    }

    return Number(id)
  }

  /**
   * - Função que sorteia um novo Planet, baseado na quantidade de Planets disponíveis.
   *
   * @function
   */
  private rafflePlanet (): void {
    const raffledIndex = Math.floor(Math.random() * this.qtdPlanets)
    this.raffledPlanet = this.planets[raffledIndex]
  }

  /**
   * - Função que recebe como parâmetro todos os Films e Planets disponíveis pela API SWAPI, e
   * manipula-os para que os mesmo se adequem à interface PlanetInterface, e os retornam em formato
   * de Array.
   *
   * @function
   * @param {SWAPIFilmInterface[]}
   * @param {SWAPIPlanetInterface[]}
   * @returns {PlanetInterface[]}
   */
  private makePlanets (
    filmsSWAPI: SWAPIFilmInterface[],
    planetsSWAPI: SWAPIPlanetInterface[]
  ): PlanetInterface[] {
    return planetsSWAPI.map(planet => {
      const population = isNaN(Number(planet.population)) ? undefined : Number(planet.population)
      const terrain = planet.terrain.toUpperCase().split(',')
      const climate = planet.climate.toUpperCase().split(',')

      const featuredInFilms = planet.films.map(filmUrl => {
        const filmId = this.getIdFromUrl(filmUrl)
        const film = filmsSWAPI.find(film => film.episode_id === filmId)

        return film !== undefined ? film.title : ''
      })

      return {
        name: planet.name.toUpperCase(),
        climate,
        terrain,
        population,
        featuredInFilms
      }
    })
  }

  /**
   * - Função executada logo após a instâcia do componente ser criada. Ela é responsável por
   * executar as funções que irão obter e manipular os dados referentes à interface PlanetInterface,
   * quantidade de Planets disponíveis e sortear um Planet para ser utilizado no componete
   * PlanetInfo.vue
   *
   * @async
   * @function
   */
  async created () {
    const filmsSWAPI: SWAPIFilmInterface[] = await SWAPIService.getAllFilms()
    const planetsSWAPI: SWAPIPlanetInterface[] = await SWAPIService.getAllPlanets()

    this.planets = this.makePlanets(filmsSWAPI, planetsSWAPI)
    this.qtdPlanets = this.planets.length
    this.rafflePlanet()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
